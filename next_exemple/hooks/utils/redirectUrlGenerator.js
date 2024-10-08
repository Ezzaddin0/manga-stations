import { jsonToUrl } from "@/hooks/utils/jsonToUrl"
import { queryToJson } from "@/hooks/utils/queryToJson"

export const redirectUrlGenerator = (searchParams, metaData, f, e) => {
    const lastQuery = queryToJson(searchParams, metaData)
    if(f && e){
        lastQuery[f] = e
    }
    
    const url = `mangas/${jsonToUrl(lastQuery)}` // change to mangas

    return url
}