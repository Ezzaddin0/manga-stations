"use client";
import React from 'react';
import Link from 'next/link';
import { Button, Card, CardBody, Image, Tab, Tabs } from '@nextui-org/react';
import { GiEyeball } from 'react-icons/gi';

const FullCard = (val, index) => {
  return (
    <Link key={val.id} prefetch={false} href={"mangas/manga/" + val.id} className="w-full">
      <Card isBlurred className="bg-base-300 border border-red-400/25" shadow="sm">
        <CardBody className='p-0'>
          <div className="grid grid-cols-6 md:grid-cols-12 items-center justify-center">
            <div className="relative col-span-6 overflow-hidden md:col-span-4 h-60">
              <Image isZoomed width="full" alt="Card background" className="object-cover rounded-xl w-full h-full" src={val.image} />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8 h-full pl-4">
              <div className="flex justify-between">
                <div className="flex flex-col py-4 pr-2">
                  <h1 className="text-lg font-semibold text-white dark:text-foreground/90 line-clamp-2">{val.title}</h1>
                  <h2 className="text-sm text-white font-medium mt-2 line-clamp-2">{val.description}</h2>
                  <span className="my-0.5 text-white flex flex-row px-2 py-0.5 border border-red-400 w-max gap-1 h-max items-center justify-center rounded-full">
                    <GiEyeball />{val.view}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};

export default function CardsList({ topview, latest, newest }) {
  return (
    <div>
      <Tabs size='sm' radius='sm' color='danger' variant='bordered' aria-label="Options">
        <Tab key="newest" title="Newest">
          <div className='flex flex-col gap-4'>
            {newest && newest.slice(0, 5).map((val, index) => FullCard(val, index))}
          </div>
        </Tab>
        <Tab key="latest" title="Latest">
          <div className='flex flex-col gap-4'>
            {latest && latest.slice(0, 5).map((val, index) => FullCard(val, index))}
          </div>
        </Tab>
        <Tab key="topview" title="Top View">
          <div className='flex flex-col gap-4'>
            {topview && topview.slice(0, 5).map((val, index) => FullCard(val, index))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}