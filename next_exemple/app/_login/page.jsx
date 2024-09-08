"use client"
import { Button, Divider, Input } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { GiHook } from 'react-icons/gi'
import { FaGoogle } from "react-icons/fa";

export default function page() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <GiHook className="text-red-400 mx-auto" size={50} />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
        Sign in to your account
        </h2>
    </div>

    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-4">
        <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
            Email address
            </label>
            <div className="mt-2">
            <Input type="email" id='email' isRequired size='sm' placeholder="Enter your email" />
            </div>
        </div>

        <div>
            <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                Password
            </label>
            <div className="text-sm">
                <a href="#" className="font-semibold text-red-400 hover:text-red-500">Forgot password?</a>
            </div>
            </div>
            <div className="mt-2">
                <Input type="password" id='password' isRequired size='sm' placeholder="Enter your password" />
            </div>
        </div>

        <div>
            <Button type="submit" radius='sm' fullWidth className='bg-red-400 hover:bg-red-500 text-white text-base'>
            Sign in
            </Button>
        </div>
        </form>

        <p className="mt-6 text-center text-sm text-white">
        Not a member?{' '}
        <Link href="/signup" className="font-semibold text-sm leading-6 text-red-400 hover:text-red-500">Start a 14 day free trial</Link>
        </p>

        <div>
        <Divider className="my-4 bg-gray-100/40" />
        <Button type="submit" radius='sm' fullWidth color='primary' className='text-base'>
            <FaGoogle className="mr-1" />
            Sign in with Google
        </Button>
        </div>
    </div>
    </div>
  )
}