'use client'
import Link from "next/link";
import { MouseEvent } from "react";

export default function Navbar() {
    function balls(event: MouseEvent) {
        const target = event.target as HTMLDivElement
        if (target == null) { return }

        target.classList.toggle("open");
    }

    return (
        <div className="flex container mx-auto py-10">
            <div className="mx-auto w-auto">
                <Link href="/" className="text-midnight-100 mx-auto font-IBM font-bold text-3xl">British Toast Games</Link>
            </div>
            <div className="mx-auto w-32 lg:flex justify-center align-middle items-center hidden">
                <Link href="#Games" className="text-midnight-100 mx-auto font-IBM font-light text-3xl hover:font-medium transition-[font-weight] duration-300 motion-reduce:transition-none">Games</Link>
            </div>
            <div className="mx-auto w-32 lg:flex justify-center align-middle items-center hidden">
                <Link href="/" className="text-midnight-100 mx-auto font-IBM font-light text-3xl hover:font-medium transition-[font-weight] duration-300 motion-reduce:transition-none">DevLog</Link>
            </div>
            <div className="mx-auto w-32 lg:flex justify-center align-middle items-center hidden">
                <Link href="/" className="text-midnight-100 mx-auto font-IBM font-light text-3xl hover:font-medium transition-[font-weight] duration-300 motion-reduce:transition-none">Team</Link>
            </div>
            <div className="mx-auto w-32 lg:flex justify-center align-middle items-center hidden">
                <Link href="/" className="text-midnight-100 mx-auto font-IBM font-light text-3xl hover:font-medium transition-[font-weight] duration-300 motion-reduce:transition-none">Contact</Link>
            </div>
            <div className="lg:hidden block">
                <div id="nav-icon2" onClick={balls}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}