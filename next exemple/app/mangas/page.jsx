import useMangaList from "@/hooks/manga/useMangaList"
import GridList from "@/components/search/GridList"
import { mangaToRemove } from "@/hooks/utils/removedData"

export const metadata = {
    title: "Mangas",
    description: "Mangas description"
}

const MangaList = async ({searchParams}) => {    
    const mangaData = await useMangaList(`?category=${searchParams.category}`)

    return (
        <GridList
            dataList={mangaData.mangaList.filter((category) => !mangaToRemove.includes(category.id))}
            metaData={mangaData.metaData}
            SearchParams={searchParams.category}
        />
    )
}

export default MangaList