"use client"

import React from "react";
import {MessageCircleMore} from "lucide-react";

export function NoComment() {
    return (
        <div
            className="overflow-visible flex flex-col gap-3 p-5 items-center text-gray-500 "
        >
            <MessageCircleMore size={60}/>
            <span className="font-bold">Claiming the first comment like a boss 😎</span>
        </div>
    )

}
