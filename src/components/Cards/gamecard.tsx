import Image from "next/image"
import Link from "next/link"

export default function Gamecard(props: {title: string, imageSource: string, description: string, alt: string, className?: string, link: string}) {
    return (
        <Link href={props.link} className={`w-96 bg-midnight-800 p-6 hover:border hover:p-[calc(1.5rem-1px)] rounded-md border-midnight-100 ${props.className}`}>
            <Image src={props.imageSource} alt={props.alt} width={500} height={500} className="rounded-md"/>
            <h1 className="text-midnight-100 font-IBM font-bold text-center text-2xl pt-4">{props.title}</h1>
            <p className="text-midnight-100 font-IBM pt-2">{props.description}</p>
        </Link>
    )
}