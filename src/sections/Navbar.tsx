"use client";
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import Link from "next/link";
import { navLinks } from "@/constants/navLinks";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence,motion } from "framer-motion";
export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <>
        <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
            <div className="container max-w-5xl">
                <div className="border border-white/15  rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                    <div className="grid grid-cols-2 lg:grid-cols-3  p-2 px-4 items-center md:pr-2 ">
                        <div>
                            <Image
                                src={logoImage}
                                alt="Layers Logo"
                                className="h-9 w-auto md:h-auto "
                            />
                        </div>
                        <div className="lg:flex items-center justify-center hidden">
                            <nav className="flex gap-6 font-medium">
                                {navLinks.map((link) => (
                                    <Link
                                        href={link.href}
                                        key={link.href}
                                        className="hover:text-gray-400 duration-75"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <div className="flex justify-end gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-menu cursor-pointer md:hidden"
                                onClick={()=>setOpen(!open)}
                            >
                                <line x1="3" y1="6" x2="21" y2="6" className={twMerge("origin-left transition",open &&"rotate-45 -translate-y-1")}></line>
                                <line  x1="3" y1="12" x2="21" y2="12" className={twMerge("transition",open &&"opacity-0")}></line>
                                <line x1="3" y1="18" x2="21" y2="18"  className={twMerge("origin-left transition",open &&"-rotate-45 translate-y-1")}></line>
                            </svg>
                            <Button
                                variant="secondary"
                                className="hidden md:inline-flex items-center hover:opacity-45 duration-75"
                            >
                                Log In
                            </Button>
                            <Button
                                variant="primary"
                                className="hidden md:inline-flex items-center hover:opacity-45 duration-75"
                            >
                                Sign Up
                            </Button>
                        </div>
                    </div>
                    <AnimatePresence>
                        {open &&(
                        <motion.div
                        initial={{height:0}}
                        animate={{height:"auto"}}
                        exit={{height:0}}
                        className=" overflow-hidden">
                            <div  className="flex flex-col items-center gap-4 py-4">
                                {navLinks.map(link =>(
                                    <Link href={link.href} key={link.label} className="">
                                        {link.label}
                                    </Link>
                                ))}
                                <Button variant="secondary">Log In</Button>
                                <Button variant="primary">Sign Up</Button>
                            </div>
                        </motion.div>)}
                    </AnimatePresence>
                </div>
            </div>
        </section>
        <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]">

        </div>
        </>
    );
}
