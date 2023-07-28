import Gamecard from "@/components/Cards/gamecard";
import Navbar from "@/components/navbar/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-midnight-900 w-full h-full bg-blend-overlay bg-cover backdrop-brightness-75 bg-[url('https://lh3.googleusercontent.com/pw/AIL4fc-jBVLE74L_Bp72MvczbQGF6XVmq3YsquFRTKE4LQXwHeaq2BhHVQAdV_YITiD3zAO1pPBRZG1vob8JI9HSQZUOMkFZoLxCZS09IXchbm45OB2vpXNNnG7y03uJj-pzg1Zlwyl0AL_tSSViqAmfCUJtAgfIWT7nALwggH8WY_BW_CzOFF6Yy1CR2_6xtMk-Xj8xYWTewxAEd9lKLVJkcqcImTkxT-XBX9Ah6ZMTbXjtelVHg2TknKukvua-4F5_jq7HCiMuuskaZMn9FUL1LTbvzrot-cTPVlLtnaUXxNBCZWCo7aqahqiX8P16Kws2wrqkz0akdA8KpRpmcOT2r8fvBzILNPcvhUsv2JfVIq-vu-0Tw8wxTzDNyE2rWRmYq3I5DpCoyUNh18JGhYymjDdaG-JM4ijnb6fFKUwx6eakStljIgOWe9Nfoe08RhuPCaJr1EtXe7NQ0GodYmuHXuCHlBWE74uvZG9Or_Y2Wb3RPYIaDDKtVsx9tLtLdBIQuhjEn5hEs0WLTrFbCkyfBR0mSvNvbx0Ycxl-7L-_OlVuZD3rr1DOPtkyRBT_mYf57lTg3ecSZlSNTKM70-EvUJXncersw1KpCN8iiOdVotxo_mdc1NOJOVA-T-iT6yoteT8bfgt8DN56WJcABApFJ4butLymTvNu1mYEHA9dL_KnDpictNHf-LakwuKCMXRCRwTNChqFn3hWQuNsmPqc7Nypd8-twtBQIch2bZs1uY68_KnPlwg1tGU4-ARN2V_BHARK4cG8spF4ZPOLkLbgFdSrB67yibo31IPUcuI6G-4z_6iA4dkGZFVYP8tRlxRW9MVg-fs9Jwg0PauXzTXHn1RHu9TljzeFKxOAMJDJxiFqo00a-Jzlgtqgk_5cJxwu8ynIDMiGGEH8RRYErZSEZ99Rnmka5xNf54kYY4JKDT9ZS9k0BQU_MSU4cubTWrc=w1105-h482-s-no?authuser=0')]">
        <Navbar/>
        <div className="w-full mx-auto pb-20 flex container">
          <h1 className="text-midnight-100 mx-auto font-IBM font-bold pt-80 pb-60 md:text-6xl text-4xl">Glorsh globanab glinkport glibbybop gleebenop.</h1>
        </div>
      </div>
      <div id="Games" className="bg-midnight-950 mx-auto">
        <h1 className="text-midnight-100 mx-auto font-IBM font-bold text-5xl py-20 text-center">We make games an allat</h1>
        <div className="flex mx-auto justify-center px-20 py-5">
          <Gamecard title="Two Words: I'm Burger" imageSource={'/TWIBImage.png'} description="What would you do if a fast food employee stole your credit card. Well, in Two Words: I'm Burger, Fregley takes action." alt="Cover art for Two Words: I'm Burger"></Gamecard>
        </div>
      </div>
    </div>
  )
}