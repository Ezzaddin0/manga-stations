"use client"
import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Label, Input, Textarea, Button} from "@nextui-org/react";

// export const metadata = {
//   title: 'contact',
//   description: 'About Manga Stations',
// }

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto dark">
        <CardHeader className='flex flex-col items-start'>
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <h2>Fill out the form below to get in touch with us.</h2>
        </CardHeader>
        <CardBody>
          <form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                {/* <Label htmlFor="name">Name</Label> */}
                <Input id="name" size='sm' placeholder="Enter your name" required />
              </div>
              <div className="grid gap-2">
                {/* <Label htmlFor="email">Email</Label> */}
                <Input id="email" size='sm' type="email" placeholder="Enter your email" required />
              </div>
              <div className="grid gap-2">
                {/* <Label htmlFor="subject">Subject</Label> */}
                <Input id="subject" size='sm' placeholder="Enter the subject" required />
              </div>
              <div className="grid gap-2">
                {/* <Label htmlFor="message">Message</Label> */}
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  required
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </form>
        </CardBody>
        <CardFooter>
          <Button type="submit" size='sm' className="w-full">Send Message</Button>
        </CardFooter>
      </Card>
    </div>
  )
}