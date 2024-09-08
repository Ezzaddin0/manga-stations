import Link from "next/link"
import { GiEyeball } from "react-icons/gi"
import { truncateString } from "@/hooks/utils/truncateString"
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
const CardUi = ({ val, index }) => {

  return (
    <Link key={index} prefetch={false} href={"/mangas/manga/" + val.id} className="h-full">
      <Card key={index + val.id} className="pb-4 bg-base-300 border border-red-400/25 h-full">
        <CardBody className="  p-0">
          <div className="overflow-hidden w-full h-60 bg-base-200 rounded-lg">
            <Image
              isZoomed
              width="full"
              alt="Card background"
              className="object-cover rounded-xl w-full h-full"
              src={val.image}
            />
          </div>
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h1 className="text-white font-semibold text-base">
            {truncateString(val.title, 25)}
          </h1>
          {val.description && <> <p className="text-white text-sm opacity-75">{truncateString(val.description, 60)}</p>
          <div className="flex items-center justify-between mt-1 gap-2 w-full">
            <span className="my-0.5 text-white flex flex-row px-2 py-0.5 border border-red-400 w-max gap-1 h-max items-center justify-center rounded-full">
              <GiEyeball />{val.view}
            </span>
            <p className="text-sm text-red-400 mp-1 font-light">{val.chapter}</p>
          </div> </>}
        </CardHeader>
      </Card>
    </Link>
  )
}

export default CardUi