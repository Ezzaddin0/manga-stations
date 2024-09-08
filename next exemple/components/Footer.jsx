"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const path = ['/login', '/signup']

export default function Footer() {
    const pathName = usePathname()    
  return (
    <div className={`flex flex-col justify-center items-center gap-4 border-t py-8 ${path.includes(pathName) ? "hidden" : ""}`}>
        <ul className='flex items-center gap-12 pages'>
            <li>
                <Link className="hover:text-gray-200" href='/'>Home</Link>
            </li>
            <li>
                <Link className="hover:text-gray-200" href='/about'>About</Link>
            </li>
            <li>
                <Link className="hover:text-gray-200" href='/contact'>Contact</Link>
            </li>
            <li>
                <Link className="hover:text-gray-200" href='/terms'>Terms</Link>
            </li>
            <li>
                <Link className="hover:text-gray-200" href='/privacy'>Privacy</Link>
            </li>
        </ul>
        <ul className='flex items-center gap-6 soical'>
            <li>
                <Link href='/'>
                    <FaFacebook className="w-6 h-6 hover:text-gray-200" />
                </Link>
            </li>
            <li>
                <Link href='/'>
                    <FaInstagram className="w-6 h-6 hover:text-gray-200" />
                </Link>
            </li>
            <li>
                <Link href='/'>
                    <FaTwitter className="w-6 h-6 hover:text-gray-200" />
                </Link>
            </li>
            <li>
                <Link href='/'>
                    <FaYoutube className="w-6 h-6 hover:text-gray-200" />
                </Link>
            </li>
        </ul>
        <p>&copy; {new Date().getFullYear()} Manga, Inc. All rights reserved.</p>
    </div>
  )
}