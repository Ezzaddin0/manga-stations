import useMangaSearch from "@/hooks/manga/useMangaSearch"
import GridList from "@/components/MangaList/GridList"
import { mangaToRemove } from "../../../hooks/utils/removedData"

export const generateMetadata = async ({ params }) => {
    return {
        title: params.id,
        description: params.id
    }
}

const MangaList = async ({ params }) => {    

    const mangaData = await useMangaSearch(params.id)

    return (
        <GridList
            id={params.id}
            dataList={mangaData.mangaList.filter((category) => !mangaToRemove.includes(category.id))}
            metaData={mangaData.metaData}
            // SearchParams={params.id}
        />
    )
}

export default MangaList

