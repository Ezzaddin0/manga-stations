import useMangaList from "@/hooks/manga/useMangaList"
// import GridList from "@/components/search/GridList"
import Hero from "@/components/Hero"
import SectionCards from "@/components/SectionCards"
import CategoriesList from "@/components/CategoriesList"
import CardsList from "@/components/CardsList"
import Testimonial from "@/components/Testimonial"
import { categoriesToRemove, mangaToRemove } from '@/hooks/utils/removedData';

export const metadata = {
    title: "Home",
    description: "MangaStations is a comprehensive platform offering a wide range of manga series categorized by genres like action, romance, sci-fi, adventure, and comedy. Discover your favorite manga, explore new titles, and enjoy high-quality reading experiences."
}

const Home = async () => {
    // const mangaData = await useMangaList("");
    const mangaDataAction = await useMangaList("?category=Action");
    const mangaDataDrama = await useMangaList("?category=Drama");

    const mangaListDataNewest = await useMangaList("?page=1&type=newest");
    const mangaListDataLatest = await useMangaList("?page=1&type=latest");
    const mangaListDataTopview = await useMangaList("?page=1&type=topview");      

    return (
        // <GridList
        //     dataList={mangaData.mangaList}
        //     metaData={mangaData.metaData}
        // />
        <div className=" p-3">
            <Hero />

            <SectionCards title="Action" mangeList={mangaDataAction.mangaList.filter((category) => !mangaToRemove.includes(category.id)).slice(0, 10)} />
            <SectionCards title="Drama" mangeList={mangaDataDrama.mangaList.filter((category) => !mangaToRemove.includes(category.id)).slice(0, 10)} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <CardsList newest={mangaListDataNewest.mangaList.filter((category) => !mangaToRemove.includes(category.id))} latest={mangaListDataLatest.mangaList.filter((category) => !mangaToRemove.includes(category.id))} topview={mangaListDataTopview.mangaList.filter((category) => !mangaToRemove.includes(category.id))} />
                <CategoriesList mangeList={mangaDataAction.metaData.category.filter((category) => !categoriesToRemove.includes(category.id))} />
            </div>

            <Testimonial />
        </div>
    )
}

export default Home