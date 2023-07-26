import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="bg-midnight-900 w-full mx-auto pb-20">
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
        <div className="flex container mx-auto">
          <h1 className="text-midnight-100 mx-auto font-IBM font-bold pt-80 pb-40 text-6xl">Glorsh globanab glinkport glibbybop gleebenop.</h1>
        </div>
      </div>
      <div className="bg-midnight-950 w-full mx-auto pb-96 flex">
        <h1 className="text-midnight-100 mx-auto font-IBM font-bold text-5xl py-20">We make games an allat</h1>
      </div>
    </main>
  )
}
