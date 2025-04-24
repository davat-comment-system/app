"use client"

import React, {useEffect} from "react";
import {UserRoundX} from "lucide-react";
import {addToast} from "@heroui/react";

export function NotLogin() {

    useEffect(() => {
        addToast({
            title: "Authentication failed!",
            description: "Please login to continue.",
            color: "danger",
            variant: "solid",
            timeout: 3000,
            shouldShowTimeoutProgress: true,
        })
    }, []);


    return (
        <div
            className="overflow-visible flex flex-col gap-3 p-5 items-center text-danger"
        >
            <UserRoundX size={60}/>
            <span className="font-bold">Please log at first using the button below.</span>
        </div>
    )

}
