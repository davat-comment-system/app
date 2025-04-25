"use client"

import React from "react";
import {Card, CardBody, CardHeader, Image, Link} from "@heroui/react";

export type PostPropsType = {
    title: string;
    content: string;
    tags: string[];
    image?: string;
}

export function Post(props: PostPropsType) {

    const {title, content, tags, image} = props;

    return (
        <Card
            fullWidth
            shadow="md"
            className="p-4"
        >
            <CardHeader className="">
                <Link href="/">
                    <h1 className="font-bold text-lg text-gray-700">
                        {title}
                    </h1>
                </Link>
            </CardHeader>
            <CardBody className="overflow-visible py-2 gap-3 flex-col">
                {image && (
                    <div className="flex w-full justify-center shrink-0">
                        <Image
                            alt={title}
                            className="object-cover"
                            src={image}
                            width={512}
                        />
                    </div>
                )}
                <div className="flex flex-col gap-2">
                    <p className="text-sm text-wrap box-content text-justify leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
                    <div className="font-bold text-sm flex gap-1 flex-wrap text-blue-400">
                        {tags.map((tag, idx) => (
                            <span key={idx}>{"#" + tag}</span>
                        ))}
                    </div>
                </div>
            </CardBody>

        </Card>
    );
}
