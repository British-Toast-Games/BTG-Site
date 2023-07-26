import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex container mx-auto py-10">
            <div className="mx-auto w-auto">
                <Link href="/" className="text-midnight-100 mx-auto font-IBM font-bold text-3xl">British Toast Games</Link>
            </div>
            <div className="mx-auto w-32 flex justify-center align-middle items-center">
                <Link href="/" className="text-midnight-100 mx-auto font-IBM font-light text-3xl hover:font-medium transition-[font-weight] duration-300 motion-reduce:transition-none">Games</Link>
            </div>
            <div className="mx-auto w-32 flex justify-center align-middle items-center">
                <Link href="/" className="text-midnight-100 mx-auto font-IBM font-light text-3xl hover:font-medium transition-[font-weight] duration-300 motion-reduce:transition-none">DevBlog</Link>
            </div>
            <div className="mx-auto w-32 flex justify-center align-middle items-center">
                <Link href="/" className="text-midnight-100 mx-auto font-IBM font-light text-3xl hover:font-medium transition-[font-weight] duration-300 motion-reduce:transition-none">Team</Link>
            </div>
            <div className="mx-auto w-32 flex justify-center align-middle items-center">
                <Link href="/" className="text-midnight-100 mx-auto font-IBM font-light text-3xl hover:font-medium transition-[font-weight] duration-300 motion-reduce:transition-none">Contact</Link>
            </div>
        </div>
    )
}