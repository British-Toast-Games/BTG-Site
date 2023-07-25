import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="bg-midnight-950 w-full flex mx-auto pb-20">
        <div className="flex container mx-auto py-10">
          <Link href="/" className="text-midnight-100 mx-auto font-IBM font-bold text-3xl">British Toast Games</Link>
          <Link href="/" className="text-midnight-100 mx-auto font-IBM font-bold text-3xl">Games</Link>
          <Link href="/" className="text-midnight-100 mx-auto font-IBM font-bold text-3xl">DevBlog</Link>
          <Link href="/" className="text-midnight-100 mx-auto font-IBM font-bold text-3xl">Team</Link>
          <Link href="/" className="text-midnight-100 mx-auto font-IBM font-bold text-3xl">Contact</Link>
        </div>
      </div>
    </main>
  )
}