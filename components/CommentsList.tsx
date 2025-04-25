"use client"

import React, {useEffect} from "react";
import {Button, Card, CardBody, CardHeader, Divider, ScrollShadow, Spinner} from "@heroui/react";
import {CommentItem} from "@/components/CommentItem";
import {CommentForm} from "@/components/CommentForm";
import {NoComment} from "@/components/NoComment";
import {usePaginatedComments} from "@/hooks/usePaginatedComments";
import {useAppSelector} from "@/hooks/useStore";


export function CommentsList() {

    const {comments, loadMore, isLoadingMore,isLoading, isReachingEnd, reload} = usePaginatedComments();

    const selectedUser = useAppSelector((state) => state.user.selectedUser);


    useEffect(() => {
        reload();
    }, [selectedUser]);

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
                <div className="p-4 flex flex-col gap-3 shrink-0">
                    {(!isLoading && !comments.length) && (
                        <NoComment/>
                    )}
                    <CommentForm
                        reloadList={reload}
                    />
                    {isLoading && (
                        <div className="flex w-full py-2 justify-center items-center">
                            <Spinner size="lg"/>
                        </div>
                    )}
                </div>
                {!!comments.length && (
                    <ScrollShadow
                        hideScrollBar
                        className="p-4 flex flex-col gap-3"
                    >
                        {comments.map((comment) => (
                            <CommentItem
                                key={comment._id}
                                comment={comment}
                                reloadList={reload}
                            />
                        ))}
                        {!isReachingEnd && (
                            <Button
                                variant="light"
                                color="secondary"
                                onPress={loadMore}
                                isLoading={isLoadingMore}
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
