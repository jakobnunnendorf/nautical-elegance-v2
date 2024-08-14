'use client'
import { NavMenus } from "@/app/data/constants/NavMenus"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Logo from "../shared/Logo"
import Drawer from "../ui/Drawer"

const Navbar = ({ isWhiteBg }) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <nav className={`py-3 max-xl:px-5 ${isWhiteBg ? "bg-white" : "bg-primary-one"}`}>
                <div className="flex items-center justify-between gap-5 layout-container border-b border-black pb-5">
                    <div className="max-[830px]:hidden">
                        <NavMenu isWhiteBg={isWhiteBg} splitT0={0} splitFrom={3} />
                    </div>
                    <Logo />
                    <div className="max-[830px]:hidden">
                        <NavMenu isWhiteBg={isWhiteBg} splitT0={0} splitFrom={3} />
                    </div>
                    <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer max-[830px]:block hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </nav>
            <Drawer open={open} setOpen={setOpen}>
                <div className="flex flex-col gap-10">
                    <NavMenu />
                    <SocialIcon />
                </div>
            </Drawer>
        </>
    )
}

export default Navbar

function SocialIcon({ isWhiteBg }) {
    return <div className='flex items-center gap-2.5'>
        <Link href="/#" className="">
            <Image src={isWhiteBg ? "/images/instagram-bg.svg" : "/images/instagram.svg"} width="24" height="24" alt="instagram" />
        </Link>
        <Link href="/#" className="">
            <Image src={isWhiteBg ? "/images/x-bg.svg" : "/images/x.svg"} width="24" height="24" alt="x" />
        </Link>
        <Link href="/#" className="">
            <Image src={isWhiteBg ? "/images/fb-bg.svg" : "/images/fb.svg"} width="24" height="24" alt="fb" />
        </Link>
        <Link href="/#" className="">
            <Image src={isWhiteBg ? "/images/youtube-bg.svg" : "/images/youtube.svg"} width="24" height="24" alt="youtube" />
        </Link>
    </div>
}

function NavMenu({ isWhiteBg, splitTo, splitFrom }) {
    return <ul className={`text-lg font-lora font-normal flex items-center gap-4 max-[830px]:flex-col ${isWhiteBg ? "text-gray-light" : "text-white"}`}>
        {NavMenus.slice(splitTo, splitFrom).map((menu, index) => (
            <li key={index} className="">
                <Link href={menu.link} className="">{menu.name}</Link>
            </li>
        ))}
    </ul>
}
