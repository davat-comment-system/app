"use client"

import React from "react";
import {Avatar, Card, CardBody, CardHeader, CardFooter, Button, Divider} from "@heroui/react";
import {Comment} from "@/interfaces/Comment.interface";
import {Heart, Reply} from "lucide-react";

export type CommentItemPropsType = {
    comment: Comment;
    noReply?: boolean;
}

export function CommentItem(props: CommentItemPropsType) {

    const {comment, noReply = false} = props;

    return (
        <Card
            fullWidth
            shadow="md"
            className="p-3 gap-3 shrink-0"
        >
            <CardHeader className="gap-3 p-0">
                <Avatar
                    isBordered
                    radius="md"
                    showFallback
                    name={comment.user?.fullName}
                />
                <span className="font-bold text-sm">{comment.user?.fullName}</span>
            </CardHeader>
            <CardBody className="p-0 gap-3">
                <p className="text-justify text-sm">
                    {comment.content}
                </p>
            </CardBody>
            <CardFooter className="gap-1 p-0 justify-between">
                <div className="flex gap-0.5 items-center">
                    <Button
                        isIconOnly
                        color="danger"
                        variant="light"
                        size="sm"
                    >
                        <Heart fill="currentColor" size={20}/>
                    </Button>
                    {!!comment.likesCount && (
                        <span className="text-gray-600 text-sm font-light select-none">
                            {comment.likesCount}
                        </span>
                    )}
                </div>
                {!noReply && (
                    <Button
                        isIconOnly
                        color="primary"
                        variant="light"
                        size="sm"
                    >
                        <Reply size={20}/>
                    </Button>
                )}
            </CardFooter>
            {!!comment.replies?.length && (
                <div className="bg-gray-200 flex flex-col gap-3 shadow-inner p-3 rounded-2xl">
                    {comment.replies.map((comment) => (
                        <CommentItem
                            key={comment._id}
                            comment={comment}
                            noReply
                        />
                    ))}
                </div>
            )}
        </Card>
    );
}
