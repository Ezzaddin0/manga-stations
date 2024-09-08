// 'use client'
import useMangaList from "@/hooks/manga/useMangaList"
import { mangaToRemove } from "@/hooks/utils/removedData"
import Image from "next/image"
import { HeroImages } from "@/hooks/utils/HeroImages";

export default async function Hero() {
    // const mangaData = await useMangaList("")
    // const mangaDataTwo = await useMangaList("?page=2")
    // const mangaDataThree = await useMangaList("?page=3")
    const size = 100
  return (
    <div className="relative h-80 flex flex-col justify-center overflow-hidden rounded-lg bg-gray-950/40 p-3">
        <div className="w-full h-full bg-gray-950/60 absolute z-10 top-0 left-0"></div>
        <div className="pb-24">
          <h1 className="relative z-20 text-4xl">Discover the world of manga</h1>
          <p className="relative z-20">Enjoy the best manga stories from around the world.</p>
        </div>
        <div className="absolute -bottom-44 -right-[24rem] -rotate-[35deg] flex flex-col gap-2">
          {HeroImages && <>
            <div className="flex gap-3 animate-slide-left alternate">
            {HeroImages.slice(0, 24).map((item) => (
                <Image style={{ width: 'auto', height: 'auto' }} key={item} className="rounded-lg" src={`https://ww8.mangakakalot.tv//mangaimage/${item}.jpg`} alt={item} width={size} height={size} />
            ))}
          </div>
          <div className="flex gap-3 animate-slide-right alternate">
            {HeroImages.slice(24, 48).map((item) => (
                <Image style={{ width: 'auto', height: 'auto' }} key={item} className="rounded-lg" src={`https://ww8.mangakakalot.tv//mangaimage/${item}.jpg`} alt={item} width={size} height={size} />
            ))}
          </div>
          <div className="flex gap-3 animate-slide-left alternate">
            {HeroImages.slice(48, 72).map((item) => (
                <Image style={{ width: 'auto', height: 'auto' }} key={item} className="rounded-lg" src={`https://ww8.mangakakalot.tv//mangaimage/${item}.jpg`} alt={item} width={size} height={size} />
            ))}
          </div>
          </>}
          
        </div>
    </div>
  )
}