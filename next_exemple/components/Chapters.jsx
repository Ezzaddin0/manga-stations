"use client"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { use, useEffect, useMemo, useState } from "react";

export default function Chapters({ chapterList, id }) {
  const [selectedKeys, setSelectedKeys] = useState(new Set([chapterList[0].name]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );  

  const formatKey = (key) => {
    return key.replace(/[^\w\s]/gi, ''); // إزالة الأحرف الخاصة من المفتاح
  };

  return (
    <div className="flex justify-end">
      <Dropdown className="dark">
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize text-white">{selectedValue}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          className="max-h-96 overflow-auto"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          {chapterList.map((val) => (
            <DropdownItem key={formatKey(val.name)} href={`${val.id}`}>
              {val.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}