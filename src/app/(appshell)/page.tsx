import HomePageSkeleton from "@/components/HomePageSkeleton";
import {Metadata} from "next";
import React from "react";


export const generateMetadata = async ({searchParams}: {
    searchParams: { [key: string]: string | string[] }
}): Promise<Metadata> => {
    return {
        title: searchParams['term'] ? `Search for ${searchParams.term} | ByteBloom` : 'ByteBloom',
    }
}

const HomePage = ({searchParams}: {
    searchParams: { [key: string]: string }
}) => {
    return (
        <>
            <HomePageSkeleton searchParams={searchParams}/>
        </>

    )
}


export default HomePage