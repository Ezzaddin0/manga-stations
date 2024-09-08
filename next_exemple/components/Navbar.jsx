"use client"
import { GiHook } from "react-icons/gi"
import { BiChevronDown, BiSearch, BiSearchAlt } from "react-icons/bi"
import { Navbar, 
    NavbarContent, 
    NavbarItem, 
    Link, 
    Button, 
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    useDisclosure, 
    Input, 
    NavbarBrand, 
    NavbarMenuToggle, 
    NavbarMenu, 
    NavbarMenuItem, 
    Dropdown, 
    DropdownTrigger, 
    DropdownMenu, 
    DropdownItem, 
 } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Category from "./MangaList/Category";
import useMangaList from "@/hooks/manga/useMangaList";
import { redirectUrlGenerator } from "@/hooks/utils/redirectUrlGenerator";
import { categoriesToRemove } from '@/hooks/utils/removedData';
import logo from "@/public/images/logo.png"
import Image from "next/image";

const path = ['/login', '/signup']

const NavbarComponent = ({ children }) => {
    const searchParams = useSearchParams()
    const router = useRouter();
    const pathName = usePathname()    
    // const categoriesToRemove = ["Erotica", "Pornographic", "Yuri", "Yaoi", "Smut", "Mature", "Harem", "Gender Bender", "Erotica"]; // Add categories to exclude here

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [metaData, setMetaData] = useState()
    const [searchParamsStates, setSearchParamsState] = useState({
        category: searchParams.get("category"),
    })

    const handleRedirect = (f, e) => {

        setSearchParamsState((pre) => {
            return {
                ...pre,
                [f]: e
            }
        })
        
        router.push(redirectUrlGenerator(searchParams, metaData, f, e)) // i am off this line
    }

    const loadData = async () => {
        const mangaDataReq = await useMangaList("")
        setMetaData(mangaDataReq.metaData)        
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen} className={`bg-base-300 flex-1 sticky p-1 gap-3 shadow-xl ${path.includes(pathName) ? "hidden" : ""}`}>
            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
                <NavbarBrand className="flex-grow-0">
                    {/* <GiHook className="text-red-400" size={25} /> */}
                    {/* <Link href="/" className="font-bold text-inherit text-white">Manga Hook</Link> */}
                    <Link href="/" className="font-bold text-inherit text-white">
                        {/* <img src="../public/images/logo.png" alt="logo" width={64} height={64} /> */}
                        MangaStation
                    </Link>
                </NavbarBrand>

                <Dropdown className="dark">
                <NavbarItem>
                    <DropdownTrigger>
                    <Button disableRipple className="p-0 bg-transparent hidden md:flex text-white data-[hover=true]:bg-transparent" endContent={<BiChevronDown size={16} />} radius="sm" variant="light">
                        Categories
                    </Button>
                    </DropdownTrigger>
                </NavbarItem>
                {metaData && 
                <DropdownMenu aria-label="ACME features" className=" h-80 overflow-y-auto">
                {metaData.category.filter((category) => !categoriesToRemove.includes(category.id)).map((val, index) => (
                    <DropdownItem key={`${val.id}-${index}`} onClick={(e) => handleRedirect("category", val.name)} className="w-full">
                    {val.name}
                    </DropdownItem>
                ))}
                </DropdownMenu>
                }
                </Dropdown>
                <NavbarItem>
                    <Link className="text-gray-100" href="/mangas">Mangas</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="w-full " justify="end">
                <NavbarItem className="text-white">
                    <Input
                    className="hidden"
                    classNames={{
                        base: "max-w-full sm:max-w-[14rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-500/20 dark:bg-default-500/20",
                    }} placeholder="Type to search..." size="sm" startContent={<BiSearchAlt size={18} />} type="search" />
                    <SearchBox />
                </NavbarItem>
                {/* <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem> */}
            </NavbarContent>

            {metaData && (<NavbarMenu>
            {metaData.category.map((val, index) => (
                <NavbarMenuItem key={`${val.id}-${index}`}>
                    <Button color={ index === 2 ? "primary" : index === metaData.category.length - 1 ? "danger" : "foreground"} className="w-full" onClick={(e) => handleRedirect("category", val.name)} size="lg">
                    {val.name}
                    </Button>
                </NavbarMenuItem>
                ))}
            </NavbarMenu>)}
        </Navbar>
    );
}

const SearchBox = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [value, setValue] = useState("")
    const router = useRouter()

    return (
        <>
            <Button isIconOnly onPress={onOpen} className="bg-red-400 text-white flex items-center">
                <BiSearch size={20} />
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody className="bg-base-300 p-4">
                                <h1 className="font-semibold text-xl text-red-400">Search</h1>
                                <div className="flex gap-2 items-center justify-center p-1 w-full">
                                    <input value={value} onChange={(e)=>setValue(e.target.value)} placeholder="tap something ..." className="input flex-1" />
                                    <button onClick={()=>{
                                        router.push("/search/" + value)
                                        onClose()
                                    }} disabled={!value} className="btn bg-red-400">
                                        <BiSearch color="white" size={15} />
                                    </button>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}



export default NavbarComponent