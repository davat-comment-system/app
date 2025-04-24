"use client";


import React, {Suspense} from "react";
import {HeroUIProvider} from "@heroui/system";
import SWRProvider from "@/components/SWRProvider";
import {store} from "@/store";
import {Provider} from 'react-redux';
import {ToastProvider} from "@heroui/react";

export type ProvidersProps = {
    children: React.ReactNode;
}

export function Providers({children}: ProvidersProps) {

    return (
        <HeroUIProvider>
            <Suspense>
                <Provider store={store}>
                    <ToastProvider placement="bottom-center"/>
                    <SWRProvider>
                        {children}
                    </SWRProvider>
                </Provider>
            </Suspense>
        </HeroUIProvider>
    );
}
