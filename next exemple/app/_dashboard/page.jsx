"use client"
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image } from '@nextui-org/react'
import React from 'react'
import { FaRegUser, FaRegEye, FaRegComment } from 'react-icons/fa'
import { GiBlackBook } from "react-icons/gi";
import { IoIosTrendingUp , IoIosTrendingDown } from "react-icons/io";

function CardAnalysis({title, icon, value, desc, status}) {
    return (
        <Card>
            <CardHeader className=' justify-between'>
                <h1 className='text-xl font-semibold'>{title}</h1>
                {icon}
            </CardHeader>
            <Divider  />
            <CardBody>
                <h2 className='text-xl font-semibold'>{value}</h2>
                <p className='flex items-center gap-2'>{desc} {status}</p>
            </CardBody>
        </Card>
    )
}

function CardManga({title, icon, value, desc, status}) {
    return (
        <Card>
            <CardBody>
                <div className='grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center'>
                    <div className="relative col-span-6 md:col-span-3">
                        <Image alt="Album cover" className="object-cover" height={70} shadow="md" src="https://nextui.org/images/album-cover.png" width={70} />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-9">
                        <div className="">
                            <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
                            <p className="text-small text-foreground/80">12 Tracks</p>
                        </div>

                        <div className="flex w-full items-center gap-4">
                            <div className='flex items-center gap-2'>
                                <FaRegEye size={15} />
                                <p className='text-sm'>15.4k views</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaRegComment size={15} />
                                <p className='text-sm'>224 comments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default function page() {
  return (
    <div className='grid grid-cols-12 gap-y-4 dark'>
        {/* Main Section */}
        <div className='p-4 col-span-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <CardAnalysis 
                title={"Users"} 
                icon={<FaRegUser size={30} className='' />}
                value={"124.4K"}
                desc={"12% in last month"}
                status={<IoIosTrendingUp />}
            />
            <CardAnalysis 
                title={"Views"} 
                icon={<FaRegEye size={30} className='' />}
                value={"1.04m"}
                desc={"52% in last month"}
                status={<IoIosTrendingUp />}
            />
            <CardAnalysis 
                title={"Comments"} 
                icon={<FaRegComment size={30} className='' />}
                value={"10.4K"}
                desc={"22% in last month"}
                status={<IoIosTrendingDown />}
            />
            <CardAnalysis 
                title={"Manga"} 
                icon={<GiBlackBook size={30} className='' />}
                value={"44.4K"}
                desc={"2% in last month"}
                status={<IoIosTrendingDown />}
            />
            </div>

            {/* Two columns, two rows layout */}
            <div className="grid grid-cols-2 gap-4 mt-4 w-full text-white text-center">
                <div className=' bg-green-500 rounded-md p-4'>Manga</div>
                <div className=' bg-green-500 rounded-md p-4'>Users</div>
                <div className=' bg-green-500 rounded-md p-4'>Categories</div>
                <div className=' bg-green-500 rounded-md p-4'>Test</div>
            </div>
        </div>

        {/* New information section */}
        <div className='col-span-4 flex flex-col gap-3 bg-gray-200/10 rounded-md p-4 mt-4'>
            <p>new Mangas</p>
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
        </div>
    </div>
  )
}