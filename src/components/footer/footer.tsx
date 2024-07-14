import Link from "next/link";
import Image from "next/image";
import { IconBrandDiscord, IconBrandPatreon, IconBrandTwitter } from '@tabler/icons-react';
import { IconBrandTiktok } from '@tabler/icons-react';

export default function Footer() {
    return (
        <div className="bg-black">
            <div className="flex container mx-auto py-40 h-full">
                <div className="mx-auto w-52 lg:flex hidden flex-col">
                    <Image src="/oldbtglogo.png" alt="British Toast Games Logo" width={500} height={500}/>
                </div>
                <div className="mx-auto w-52 lg:flex hidden flex-col">
                    <h1 className="font-IBM text-midnight-100 text-xl font-bold pb-5">Games</h1>
                    <Link href="/" className="group text-midnight-100 font-IBM text-lg transition-all duration-300 ease-in-out pb-2">
                        <span className="bg-left-bottom bg-gradient-to-r from-hotpink-600 to-hotpink-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out motion-reduce:transition-none">
                            Two Words: I&apos;m Burger
                        </span>
                    </Link>
                </div>
                <div className="mx-auto w-52 lg:flex hidden flex-col">
                    <h1 className="font-IBM text-midnight-100 text-xl font-bold pb-5">Studio</h1>
                    <Link href="/" className="group text-midnight-100 font-IBM text-lg transition-all duration-300 ease-in-out pb-2">
                        <span className="bg-left-bottom bg-gradient-to-r from-hotpink-600 to-hotpink-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out motion-reduce:transition-none">
                            Team
                        </span>
                    </Link>
                    <Link href="#Games" className="group text-midnight-100 font-IBM text-lg transition-all duration-300 ease-in-out pb-2">
                        <span className="bg-left-bottom bg-gradient-to-r from-hotpink-600 to-hotpink-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out motion-reduce:transition-none">
                            Games
                        </span>
                    </Link>
                    <Link href="/" className="group text-midnight-100 font-IBM text-lg transition-all duration-300 ease-in-out pb-2">
                        <span className="bg-left-bottom bg-gradient-to-r from-hotpink-600 to-hotpink-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out motion-reduce:transition-none">
                            Dev Log
                        </span>
                    </Link>
                </div>
                <div className="mx-auto w-52 lg:flex hidden flex-col">
                    <h1 className="font-IBM text-midnight-100 text-xl font-bold pb-5">Support</h1>
                    <Link href="/" className="group text-midnight-100 font-IBM text-lg transition-all duration-300 ease-in-out pb-2">
                        <span className="bg-left-bottom bg-gradient-to-r from-hotpink-600 to-hotpink-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out motion-reduce:transition-none">
                            Contact
                        </span>
                    </Link>
                    <Link href="/" className="group text-midnight-100 font-IBM text-lg transition-all duration-300 ease-in-out pb-2">
                        <span className="bg-left-bottom bg-gradient-to-r from-hotpink-600 to-hotpink-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out motion-reduce:transition-none">
                            Game News
                        </span>
                    </Link>
                    <Link href="/" className="group text-midnight-100 font-IBM text-lg transition-all duration-300 ease-in-out pb-2">
                        <span className="bg-left-bottom bg-gradient-to-r from-hotpink-600 to-hotpink-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out motion-reduce:transition-none">
                            Partnership Inquiries
                        </span>
                    </Link>
                </div>
                <div className="mx-auto w-52 lg:flex hidden flex-col">
                    <h1 className="font-IBM text-midnight-100 text-xl font-bold pb-5">Socials</h1>
                    <div className="flex">
                        <Link href="https://twitter.com/toast_british" className="pr-4" target="_blaknk"><IconBrandTwitter className="hover:fill-hotpink-600 hover:stroke-hotpink-600 transition-all duration-300 motion-reduce:transition-none" color="#ebf1ff" size={36}/></Link>
                        <Link href="https://www.tiktok.com/@britishtoastgames" className="pr-4" target="_blank"><IconBrandTiktok className="hover:fill-hotpink-600 hover:stroke-hotpink-600 transition-all duration-300 motion-reduce:transition-none" color="#ebf1ff" size={36}/></Link>
                        <Link href="https://www.patreon.com/user?u=77823490" className="pr-4" target="_blank"><IconBrandPatreon className="hover:fill-hotpink-600 hover:stroke-hotpink-600 transition-all duration-300 motion-reduce:transition-none" color="#ebf1ff" size={36}/></Link>
                        <Link href="https://discord.gg/uzzTWfdxHM" className="pr-4" target="_blank"><IconBrandDiscord className="hover:fill-hotpink-600 hover:stroke-hotpink-600 transition-all duration-300 motion-reduce:transition-none" color="#ebf1ff" size={36}/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}