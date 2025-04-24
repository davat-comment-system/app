"use client"

import React from "react";
import {Card, CardBody} from "@heroui/react";
import {MessageCircleMore} from "lucide-react";

export function NoComment() {
    return (
        <Card
            fullWidth
            shadow="md"
            isHoverable
        >
            <CardBody
                className="overflow-visible gap-3 p-5 items-center text-gray-500 "
            >
                <MessageCircleMore size={60}/>
                <span className="font-bold">Claiming the first comment like a boss 😎</span>
            </CardBody>
        </Card>
    )

}
