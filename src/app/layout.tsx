import './globals.css'
import App from '@/components/App'
import {Metadata} from "next";
import React from "react";


export const metadata: Metadata = {
    title: 'ByteBloom',
}

const RootLayout = ({children}: {
    children: React.ReactNode,
}) => {
    return (
        <App>
            {children}
        </App>
    )
}


export default RootLayout
