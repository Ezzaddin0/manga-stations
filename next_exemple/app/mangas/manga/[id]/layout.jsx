import useManga from "@/hooks/manga/useManga"
import ChapterGridList from "@/components/Manga/ChaptersGridList"
import MangaLayout from "@/components/Manga/MangaLayout"
import useMangaList from "@/hooks/manga/useMangaList"
import SectionCards from "@/components/SectionCards"
import { mangaToRemove } from "../../../../hooks/utils/removedData"

export const generateMetadata=async({params})=>{

    const mangaData = await useManga(params.id)

    return{
        title: mangaData.name,
        description: mangaData.name
    }
}

const MangaPage = async ({ params, children }) => {

    const mangaData = await useManga(params.id);
    const mangaCategory = await useMangaList(`?category=${mangaData.genres[0]}`);

    return (
        <div>
        <MangaLayout
            name={mangaData.name}
            imageUrl={mangaData.imageUrl}
            author={mangaData.author}
            view={mangaData.view}
            genres={mangaData.genres}
        >
            {children}
        </MangaLayout>

        <div className="px-4 pb-4">
            <SectionCards title="Suggestions" mangeList={mangaCategory.mangaList.filter((category) => !mangaToRemove.includes(category.id)).slice(0, 10)} />
        </div>
        </div>
    )
}

export default MangaPage