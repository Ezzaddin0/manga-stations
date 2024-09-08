"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input, Button, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem, Chip, User, Pagination, Tooltip, Spinner } from "@nextui-org/react";
import { FaPlus, FaSearch, FaChevronDown, FaEye } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import useMangaList from "@/hooks/manga/useMangaList";
import useMangaSearch from "@/hooks/manga/useMangaSearch";
import Link from "next/link";

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["title", "chapter", "view", "status", "actions"];

export default function App() {
  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = useState("all");
  const [rowsPerPage, setRowsPerPage] = useState(24);
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "view",
    direction: "ascending",
  });
  const [page, setPage] = useState(1);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalMangaCount, setTotalMangaCount] = useState(0);
  const [totalMangaPage, setTotalMangaPage] = useState(0);

  useEffect(() => {
    const fetchMangaData = async () => {
      try {
        const mangaData = await useMangaList(`?page=${page}`);
        const mangaWithStatus = mangaData.mangaList.map((manga) => ({
          ...manga,
          status: "active",
        }));
        // console.log(mangaData);
        setTotalMangaCount(mangaData.metaData.totalStories)
        setTotalMangaPage(mangaData.metaData.totalPages)
        setData(mangaWithStatus);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMangaData();
  }, [page]);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
    const fetchMangaDataSearch = async () => {
      try {
        const mangaData = await useMangaSearch(`${filterValue}${page > 1 ? `&page=${page}` : ''}`);
        const mangaWithStatus = mangaData.mangaList.map((manga) => ({
          ...manga,
          status: "active",
        }));
        console.log(mangaData);
        // setTotalMangaCount(mangaData.metaData.totalStories)
        setTotalMangaPage(mangaData.metaData.totalPages)
        setData(mangaWithStatus);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setLoading(false);
      }
    };

    filterValue && fetchMangaDataSearch();
    }, 500); // 500ms debounce
    return () => clearTimeout(debounceTimeout);
  }, [filterValue, page]);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredManga = [...data];

    if (hasSearchFilter) {
      filteredManga = filteredManga.filter((manga) =>
        manga.title.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return filteredManga;
  }, [data, filterValue]);

  // const pages = Math.ceil(totalMangaCount / rowsPerPage);
  let pages = totalMangaPage

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = useCallback((manga, columnKey) => {
    const cellValue = manga[columnKey];

    switch (columnKey) {
      case "title":
        return (
          <User avatarProps={{ radius: "lg", src: manga.image }} description={manga.chapter} name={cellValue}>
            {manga?.description?.slice(0, 100)}...
          </User>
        );
      case "view":
        return <div>{manga?.view}</div>;
      case "chapter":
        return <div>{manga?.chapter}</div>;
      case "status":
        return  <Chip className="capitalize" color={statusColorMap[manga.status]} size="sm" variant="flat">{manga.status}</Chip>
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Tooltip className="dark" content="Details">
              <Link href={`/mangas/manga/${manga?.id}`} target='_blank' className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <FaEye />
              </Link>
            </Tooltip>
            <Tooltip className="dark" content="Edit manga">
              <Link href={`/dashboard/mangas/${manga?.id}`} className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <CiEdit />
              </Link>
            </Tooltip>
            <Tooltip className="dark" color="danger" content="Delete manga">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <MdDeleteOutline />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input isClearable className="w-full sm:max-w-[44%]" placeholder="Search by title..." startContent={<FaSearch />} value={filterValue} onClear={onClear} onValueChange={onSearchChange} />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<FaChevronDown className="text-small" />} variant="flat">
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<FaChevronDown className="text-small" />} variant="flat">
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button color="primary" endContent={<FaPlus />}>
              Add New
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {totalMangaCount} mangas</span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select className="bg-transparent outline-none text-default-400 text-small" onChange={onRowsPerPageChange}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [filterValue, totalMangaCount, onRowsPerPageChange, onSearchChange]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination isCompact showControls showShadow color="primary" page={page} total={pages} onChange={setPage} />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>Previous</Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>Next</Button>
        </div>
      </div>
    );
  }, [page, pages]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;  

  return (
    <Table className="dark container px-6 py-4" aria-label="Example table with custom cells, pagination and sorting" isHeaderSticky bottomContent={bottomContent} bottomContentPlacement="outside" selectedKeys={selectedKeys} selectionMode="multiple" sortDescriptor={sortDescriptor} topContent={topContent} topContentPlacement="outside" onSelectionChange={setSelectedKeys} onSortChange={setSortDescriptor} >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"} allowsSorting={column.sortable}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No manga found"} items={data} loadingContent={<Spinner />} loadingState={loading}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) =>  <TableCell>{renderCell(item, columnKey)}</TableCell> }
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];

const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "TITLE", uid: "title", sortable: true },
  { name: "CHAPTER", uid: "chapter", sortable: true },
  { name: "VIEW", uid: "view", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "ACTIONS", uid: "actions" }
]