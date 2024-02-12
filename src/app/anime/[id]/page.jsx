import { getAnimeResponse } from "@/app/libs/api-libs"
import Image from "next/image"

const Page = async ({params: {id}}) => { 
    const anime = await getAnimeResponse(`anime/${id}`)
    console.log(anime)

    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-color-primary text-2xl">{anime.data.title}-{anime.data.year}</h3>
            </div>
            <div className=" pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>PERINGKAT</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>SKOR</h3>
                    <p>{anime.data.score}</p>
                </div>
            </div>
            <div className=" pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
                <Image 
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    height={250}
                    width={250}
                    className=" w-full rounded object-cover"
                />
                <p className="text-justify text-xl">{anime.data.synopsis}</p>
            </div>
        </>
    )
}

export default Page