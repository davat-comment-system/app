"use client"

import React from "react";
import {Button, Card, CardBody, CardHeader, Divider, ScrollShadow} from "@heroui/react";
import {CommentItem} from "@/components/CommentItem";
import {CommentForm} from "@/components/CommentForm";
import {NoComment} from "@/components/NoComment";
import {usePaginatedComments} from "@/hooks/usePaginatedComments";
import {useAppSelector} from "@/hooks/useStore";
import {NotLogin} from "@/components/NotLogin";


export function Comments() {

    const {comments, loadMore, isLoadingMore, isReachingEnd} = usePaginatedComments();
    const selectedUser = useAppSelector((state) => state.user.selectedUser);

    if (!selectedUser) {
        return <NotLogin/>
    }


    return (
        <Card
            fullWidth
            shadow="md"
            className="max-h-[calc(100vh-32px)]"
        >
            <CardHeader className="font-bold">
                Comments {comments.length ? `(${comments.length})` : ""}
            </CardHeader>
            <Divider/>
            <CardBody className="p-0 gap-3">
                {!comments.length && (<NoComment/>)}
                <CommentForm/>
                {!!comments.length && (
                    <ScrollShadow
                        hideScrollBar
                        className="p-4 flex flex-col gap-3"
                    >
                        {comments.map((comment) => (
                            <CommentItem
                                key={comment._id}
                                comment={comment}
                            />
                        ))}
                        {isLoadingMore && (
                            <Button
                                variant="light"
                                color="secondary"
                            >
                                More ...
                            </Button>
                        )}
                    </ScrollShadow>
                )}
            </CardBody>
        </Card>
    );
}
