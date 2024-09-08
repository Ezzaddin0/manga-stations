"use client"
import React from 'react'
import { Avatar, Button, Card, CardBody, CardHeader } from '@nextui-org/react'

const CardFull = ({ avatarName, userName, userTitle, quote }) => (
  <div className="flex flex-col items-start gap-4 p-6">
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 bg-gray-300 rounded-full">
        {/* يمكن استبدال هذه المنطقة بمكون Avatar */}
        <img src={`https://ui-avatars.com/api/?name=${avatarName}`} alt={avatarName} className="h-12 w-12 rounded-full" />
      </div>
      <div className="grid gap-0.5">
        <div className="text-sm font-medium">{userName}</div>
        <div className="text-xs text-muted-foreground">{userTitle}</div>
      </div>
    </div>
    <div>
      <blockquote className="text-sm leading-relaxed">
        {quote}
      </blockquote>
    </div>
  </div>
);

const cardsData = [
  {
    avatarName: 'test',
    userName: 'Jiro Daisuke 1',
    userTitle: 'Manga Enthusiast',
    quote: 'The attention to detail in the artwork and the captivating storylines make this manga series a must-read for any fan.',
  },
  {
    avatarName: 'test 2',
    userName: 'Jiro Daisuke 2',
    userTitle: 'Manga Enthusiast',
    quote: 'The attention to detail in the artwork and the captivating storylines make this manga series a must-read for any fan.',
  },
  {
    avatarName: 'test 3',
    userName: 'Jiro Daisuke 3',
    userTitle: 'Manga Enthusiast',
    quote: 'The attention to detail in the artwork and the captivating storylines make this manga series a must-read for any fan.',
  },
  {
    avatarName: 'test 4',
    userName: 'Jiro Daisuke 4',
    userTitle: 'Manga Enthusiast',
    quote: 'The attention to detail in the artwork and the captivating storylines make this manga series a must-read for any fan.',
  },
//   {
//     avatarName: 'test',
//     userName: 'Jiro Daisuke 5',
//     userTitle: 'Manga Enthusiast',
//     quote: 'The attention to detail in the artwork and the captivating storylines make this manga series a must-read for any fan.',
//   },
//   {
//     avatarName: 'test 2',
//     userName: 'Jiro Daisuke 6',
//     userTitle: 'Manga Enthusiast',
//     quote: 'The attention to detail in the artwork and the captivating storylines make this manga series a must-read for any fan.',
//   },
//   {
//     avatarName: 'test 3',
//     userName: 'Jiro Daisuke 7',
//     userTitle: 'Manga Enthusiast',
//     quote: 'The attention to detail in the artwork and the captivating storylines make this manga series a must-read for any fan.',
//   },
//   {
//     avatarName: 'test 4',
//     userName: 'Jiro Daisuke 8',
//     userTitle: 'Manga Enthusiast',
//     quote: 'The attention to detail in the artwork and the captivating storylines make this manga series a must-read for any fan.',
//   },
];

export default function Testimonial() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Fans Are Saying</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from the community about their favorite manga series.
            </p>
          </div>
          <div className="flex w-full overflow-hidden">
                {cardsData.map((card, index) => (
                <CardFull key={index} avatarName={card.avatarName} userName={card.userName} userTitle={card.userTitle} quote={card.quote} />
                ))}
            </div>
          <Button variant='solid' radius='sm' className="mt-6">Submit a Testimonial</Button>
        </div>
      </div>
    </section>
  )
}