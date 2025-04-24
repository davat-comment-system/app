"use client"

import React from "react";
import {Avatar, Card, CardBody, CardHeader, CardFooter, Button} from "@heroui/react";
import {Comment} from "@/interfaces/Comment.interface";
import {Heart, Reply} from "lucide-react";

export type CommentItemPropsType = {
    comment: Comment;
}

export function CommentItem(props: CommentItemPropsType) {

    const {comment} = props;

    return (
        <Card
            fullWidth
            shadow="md"
            className=""
        >
            <CardHeader className="gap-3 ">
                <Avatar
                    isBordered
                    radius="md"
                    showFallback
                    name={comment.user?.fullName}
                />
                <span className="font-bold text-sm">{comment.user?.fullName}</span>
            </CardHeader>
            <CardBody className="overflow-visible  gap-3">
                <p className="text-justify text-sm">
                    {comment.content}
                </p>
            </CardBody>
            <CardFooter className="flex gap-3">
                <Button
                    isIconOnly
                    color="danger"
                    variant="light"
                >
                    <Heart fill="currentColor" />
                </Button>
                <Button
                    isIconOnly
                    color="primary"
                    variant="light"
                >
                    <Reply  />
                </Button>
            </CardFooter>
        </Card>
    );
}
