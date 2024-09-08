"use client"
import React, { useEffect, useState } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, Input } from "@nextui-org/react";
import { FaRegEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete, MdSave } from "react-icons/md";
import useMangaList from '@/hooks/manga/useMangaList';

const statusColorMap = {
    active: "success",
    paused: "danger",
    vacation: "warning",
};

const columns = [
  {name: "Id", uid: "id"},
  {name: "NAME", uid: "name"},
  {name: "STATUS", uid: "status"},
  {name: "ACTIONS", uid: "actions"},
];

export default function MangaPage() {
    const [manga, setManga] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editRowId, setEditRowId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        id: "",
        name: "",
        status: "",
    });

    useEffect(() => {
        const fetchMangaData = async () => {
            try {
                const mangaData = await useMangaList("");
                const mangaWithStatus = mangaData.metaData.category.map((manga) => ({
                    ...manga,
                    status: "active",
                }));
                setManga(mangaWithStatus);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchMangaData();
    }, []);

    const handleEditClick = (mangaItem) => {
        setEditRowId(mangaItem.id);
        const formValues = {
            id: mangaItem.id,
            name: mangaItem.name,
            status: mangaItem.status
        };
        setEditFormData(formValues);
    };

    const handleSaveClick = (id) => {
        const updatedManga = manga.map((item) => 
            item.id === id ? editFormData : item
        );
        setManga(updatedManga);
        setEditRowId(null);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditFormData({
            ...editFormData,
            [name]: value
        });
    };

    const renderCell = (item, columnKey) => {
        const cellValue = item[columnKey];

        if (editRowId === item.id && columnKey === "name") {
            return (
                <Input
                    size="sm"
                    name="name"
                    value={editFormData.name}
                    onChange={handleInputChange}
                />
            );
        }

        switch (columnKey) {
          case "name":
            return (
              <p className='font-bold text-sm capitalize'>{item.name}</p>
            );
          case "status":
            return (
              <Chip className="capitalize" color={statusColorMap[item.status]} size="sm" variant="flat">
                {cellValue}
              </Chip>
            );
          case "actions":
            return (
              <div className="relative flex items-center justify-end gap-2">
                {editRowId === item.id ? (
                  <Tooltip className='dark' content="Save">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => handleSaveClick(item.id)}>
                      <MdSave />
                    </span>
                  </Tooltip>
                ) : (
                  <>
                    <Tooltip className='dark' content="Details">
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <FaRegEye />
                      </span>
                    </Tooltip>
                    <Tooltip className='dark' content="Edit">
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => handleEditClick(item)}>
                        <CiEdit />
                      </span>
                    </Tooltip>
                    <Tooltip className='dark' color="danger" content="Delete">
                      <span className="text-lg text-danger cursor-pointer active:opacity-50">
                        <MdDelete />
                      </span>
                    </Tooltip>
                  </>
                )}
              </div>
            );
          default:
            return cellValue;
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <Table className='dark py-4 max-w-5xl mx-auto' aria-label="Editable table with custom cells">
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody items={manga}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}