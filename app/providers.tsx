"use client";


import React, {Suspense} from "react";
import {HeroUIProvider} from "@heroui/system";

export type ProvidersProps = {
    children: React.ReactNode;
}

export function Providers({children}: ProvidersProps) {

    return (
        <HeroUIProvider>
            <Suspense>
                {children}
            </Suspense>
        </HeroUIProvider>
    );
}
