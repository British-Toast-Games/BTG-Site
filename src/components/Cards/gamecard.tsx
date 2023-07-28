import Image from "next/image"

export default function Gamecard(props: {title: string, imageSource: string, description: string, alt: string}) {
    return (
        <div>
            <div className="p-2 hover:border rounded-md border-midnight-100 container">
                <Image src={props.imageSource} alt={props.alt} width={500} height={500} className="rounded-md"/>
                <h1 className="text-midnight-100 font-IBM font-bold text-center text-2xl pt-4">{props.title}</h1>
                <p className="text-midnight-100 font-IBM pt-2">{props.description}</p>
            </div>
        </div>
    )
}