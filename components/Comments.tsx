"use client"

import React from "react";
import {Card, CardBody, CardHeader} from "@heroui/react";
import {Comment} from "@/interfaces/Comment.interface";
import {CommentItem} from "@/components/CommentItem";

export type CommentsPropsType = {
    comments: Comment[];
}

export function Comments(props: CommentsPropsType) {

    const {comments} = props;


    return (
        <Card
            fullWidth
            shadow="md"
            className=""
        >
            <CardHeader className="font-bold">
                Comments (2)
            </CardHeader>
            <CardBody className="overflow-visible py-2 gap-3">
                {comments.map((comment, index) => (
                    <CommentItem
                        key={index}
                        comment={comment}
                    />
                ))}
            </CardBody>
        </Card>
    );
}
