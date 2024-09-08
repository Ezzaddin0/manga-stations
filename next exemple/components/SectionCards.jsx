"use client"
import React from 'react'
import Card from "./MangaList/Card"

export default function SectionCards({mangeList, title}) {
  return (
    <div className='w-full pt-4 flex flex-col gap-3'>
        <h2 className='text-4xl'>{title}</h2>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 grid-rows-2 overflow-auto gap-3 bg-transparent'>
            {mangeList && mangeList.map((val, index) => (<Card val={val} index={index + 1 + val.id} />))}
        </div>
    </div>
  )
}