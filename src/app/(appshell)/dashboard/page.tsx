import HomePageSkeleton from "@/components/HomePageSkeleton";
import {Metadata} from "next";
import React from "react";
import DashboardPageSkeleton from "@/components/DashboardSkeleton";


export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: 'Dashboard | ByteBloom',
    }
}

const DashboardPage = () => {
    return (
        <>
            <DashboardPageSkeleton/>
        </>

    )
}


export default DashboardPage