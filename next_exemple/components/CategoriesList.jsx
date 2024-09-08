"use client"
import React, { useState } from 'react'
import Card from "./MangaList/Card"
import { Button } from '@nextui-org/react'
import { redirectUrlGenerator } from '@/hooks/utils/redirectUrlGenerator'
import { useRouter, useSearchParams } from 'next/navigation'

export default function CategoriesList({mangeList}) {
  const router = useRouter()

  return (
    <div className='grid grid-cols-4 gap-2'>
        {mangeList && mangeList.map((val, index) => (
            <Button className='w-full h-full text-lg' key={`${val.id}-${index}`} onClick={(e) => router.push(`mangas?category=${val.name}`)}>{val.name}</Button>
        ))}
    </div>
  )
}