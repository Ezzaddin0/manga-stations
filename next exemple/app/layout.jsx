import MainLayout from "@/components/MainLyout"
import "@/styles/globals.css"

export const metadata = {
    title: {
        // template: '%s | MangaStations',
        // default: "MangaStations"
    },
    icons: {
        icon: "../public/images/logo.png"
    },
    openGraph: {
        images: '../public/images/logo.png'
    }
}

const Layout = ({ children }) => {

    return (
        <MainLayout>
            {children}
        </MainLayout>
    )
}

export default Layout