"use client"
import useManga from '@/hooks/manga/useManga';
import { Button, Card, CardBody, CardFooter, CardHeader, Image, Input, Select, SelectItem, Tab, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

const category = [
  {
  "id": "all",
  "name": "ALL"
  },
  {
  "id": "Action",
  "name": "Action"
  },
  {
  "id": "Adventure",
  "name": "Adventure"
  },
  {
  "id": "Comedy",
  "name": "Comedy"
  },
  {
  "id": "Cooking",
  "name": "Cooking"
  },
  {
  "id": "Doujinshi",
  "name": "Doujinshi"
  },
  {
  "id": "Drama",
  "name": "Drama"
  },
  {
  "id": "Erotica",
  "name": "Erotica"
  },
  {
  "id": "Fantasy",
  "name": "Fantasy"
  },
  {
  "id": "Gender bender",
  "name": "Gender bender"
  },
  {
  "id": "Harem",
  "name": "Harem"
  },
  {
  "id": "Historical",
  "name": "Historical"
  },
  {
  "id": "Horror",
  "name": "Horror"
  },
  {
  "id": "Isekai",
  "name": "Isekai"
  },
  {
  "id": "Josei",
  "name": "Josei"
  },
  {
  "id": "Manhua",
  "name": "Manhua"
  },
  {
  "id": "Manhwa",
  "name": "Manhwa"
  },
  {
  "id": "Martial arts",
  "name": "Martial arts"
  },
  {
  "id": "Mature",
  "name": "Mature"
  },
  {
  "id": "Mecha",
  "name": "Mecha"
  },
  {
  "id": "Medical",
  "name": "Medical"
  },
  {
  "id": "Mystery",
  "name": "Mystery"
  },
  {
  "id": "One shot",
  "name": "One shot"
  },
  {
  "id": "Pornographic",
  "name": "Pornographic"
  },
  {
  "id": "Psychological",
  "name": "Psychological"
  },
  {
  "id": "Romance",
  "name": "Romance"
  },
  {
  "id": "School life",
  "name": "School life"
  },
  {
  "id": "Sci fi",
  "name": "Sci fi"
  },
  {
  "id": "Seinen",
  "name": "Seinen"
  },
  {
  "id": "Shoujo",
  "name": "Shoujo"
  },
  {
  "id": "Shoujo ai",
  "name": "Shoujo ai"
  },
  {
  "id": "Shounen",
  "name": "Shounen"
  },
  {
  "id": "Shounen ai",
  "name": "Shounen ai"
  },
  {
  "id": "Slice of life",
  "name": "Slice of life"
  },
  {
  "id": "Smut",
  "name": "Smut"
  },
  {
  "id": "Sports",
  "name": "Sports"
  },
  {
  "id": "Supernatural",
  "name": "Supernatural"
  },
  {
  "id": "Tragedy",
  "name": "Tragedy"
  },
  {
  "id": "Webtoons",
  "name": "Webtoons"
  },
  {
  "id": "Yaoi",
  "name": "Yaoi"
  },
  {
  "id": "Yuri",
  "name": "Yuri"
  }
]

export default function page({params}) {
  const [manga, setManga] = useState({
    imageUrl: "",
    name: "",
    author: "",
    status: "",
    state : "",
    updated: "",
    view: 0,
    genres: [],
    chapterList: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchMangaData = async () => {
      try {
        const mangaData = await useManga(params.id);
        const mangaWithStatus = {
          ...mangaData,
          state: "active",
        };
        console.log(mangaWithStatus);
        setManga(mangaData)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMangaData()
  }, [])

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>; 
  
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 dark">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="grid gap-6">
          <div className=' mx-auto'>
            <Image src={manga.imageUrl} alt={manga.name} width={150} height={200} />
          </div>
          <div className="grid gap-2">
            <Input size='sm' id="imageUrl" label="Image URL" type="text" defaultValue={manga.imageUrl} className="w-full" />
          </div>
          <div className="grid gap-2">
            <Input size='sm' id="name" label="Name" type="text" defaultValue={manga.name} className="w-full" />
          </div>
          <div className="grid gap-2">
            <Select label="State" labelPlacement='inside' size='sm' id="state" defaultSelectedKeys={[manga.state]}>
                <SelectItem key="active" value="active">active</SelectItem>
                <SelectItem key="Inactive" value="inactive">inactive</SelectItem>
            </Select>
          </div>
          <div className="grid gap-2">
            <Input size='sm' id="author" label="Author" type="text" defaultValue={manga.author} className="w-full" />
          </div>
          <div className="grid gap-2">
            <Select label="Status" labelPlacement='inside' size='sm' id="status" defaultSelectedKeys={[manga.status]}>
                <SelectItem key="all" value="all">All</SelectItem>
                <SelectItem key="Completed" value="Completed">Completed</SelectItem>
                <SelectItem key="Ongoing" value="Ongoing">Ongoing</SelectItem>
                <SelectItem key="Drop" value="drop">drop</SelectItem>
                <SelectItem key="Unknown" value="unknown">unknown</SelectItem>
            </Select>
          </div>
          <div className="grid gap-2">
            {manga.updated}
            <Input size='sm' id="updated" label="Updated" type="date" defaultValue={new Date().toString()} className="w-full" />
          </div>
          <div className="grid gap-2">
            <Input size='sm' id="view" label="Views" type="text" defaultValue={manga.view} className="w-full" />
          </div>
          <div className="grid gap-2">
            <Select id="genres" label="Genres" labelPlacement='inside' selectionMode="multiple" defaultSelectedKeys={manga.genres} className="w-full">
              {category.map(cate => (
                <SelectItem key={cate.id} value={cate.id}>{cate.name}</SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <div className="grid gap-6 max-h-full">
          <Card>
            <CardHeader>
              <h1>Chapters</h1>
            </CardHeader>
            <CardBody>
            <Table radius='none' className=' max-h-[644px] overflow-auto' aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    {/* <TableColumn>Path</TableColumn> */}
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Views</TableColumn>
                    <TableColumn>Created At</TableColumn>
                    <TableColumn>Actions</TableColumn>
                </TableHeader>
                <TableBody>
                {manga.chapterList.map((chapter) => (
                  <TableRow key={chapter.id}>
                  <TableCell>{chapter.id}</TableCell>
                  {/* <TableCell>{chapter.path}</TableCell> */}
                  <TableCell>{chapter.name}</TableCell>
                  <TableCell>{chapter.view}</TableCell>
                  <TableCell>{chapter.createdAt}</TableCell>
                  <TableCell>
                    <Button size="sm">Edit</Button>
                  </TableCell>
                  </TableRow>
                ))}
                </TableBody>
            </Table>
            </CardBody>
            <CardFooter>
              <Button fullWidth variant="ghost">
                Add Chapter
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}