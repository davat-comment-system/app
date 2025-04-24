"use client"

import React, {ReactNode} from "react";
import {SWRConfig, SWRConfiguration} from "swr";
import {axiosCore} from "@/lib/axios";


export type SWRProviderProps = {
    children: ReactNode;
}


const SWRProvider = (props: SWRProviderProps) => {
    const {children} = props


    const configuration:  SWRConfiguration = {
        fetcher: (url) => {
            return axiosCore().get(url)
        },
    }
    return (
        <SWRConfig value={configuration}>
            {children}
        </SWRConfig>
    )
}


export default SWRProvider
