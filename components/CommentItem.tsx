"use client"

import React from "react";
import {Avatar, Card, CardBody, CardHeader, CardFooter, Button} from "@heroui/react";
import {Comment} from "@/interfaces/Comment.interface";
import {Reply} from "lucide-react";
import {CommentLike} from "@/components/CommentLike";
import {CommentForm} from "@/components/CommentForm";
import moment from "moment";
import {AnimatePresence, motion} from "framer-motion";


export type CommentItemPropsType = {
    comment: Comment;
    noReply?: boolean;
    reloadList: () => void;
}

export function CommentItem(props: CommentItemPropsType) {

    const {comment, noReply = false, reloadList} = props;

    const [openReply, setOpenReply] = React.useState(false);
    const handleOpenReply = () => {
        setOpenReply(true);
    }
    const handleCloseReply = () => {
        setOpenReply(false);
    }

    return (
        <Card
            fullWidth
            shadow="md"
            className="p-3 gap-3 shrink-0"
        >
            <CardHeader className="gap-3 justify-between p-0">
                <div className="flex items-center gap-3">
                    <Avatar
                        isBordered
                        radius="md"
                        showFallback
                        name={comment.user?.fullName}
                    />
                    <span className="font-bold text-sm">{comment.user?.fullName}</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-light text-gray-500 text-tiny">
                        {moment(comment.createdAt).fromNow()}
                    </span>
                </div>
            </CardHeader>
            <CardBody className="p-0 gap-3">
                <p className="text-justify text-sm">
                    {comment.content}
                </p>
            </CardBody>
            <CardFooter className="gap-1 p-0 justify-between">
                <CommentLike
                    commentId={comment._id}
                    isLiked={comment.isLiked || false}
                    likeCount={comment.likeCount || 0}
                />
                {!noReply && (
                    <Button
                        isIconOnly
                        color="primary"
                        variant="light"
                        size="sm"
                        onPress={handleOpenReply}
                    >
                        <Reply size={20}/>
                    </Button>
                )}
            </CardFooter>
            {(!!comment.replies?.length || openReply) && (
                <div className="bg-gray-200 flex flex-col gap-3 shadow-inner p-3 rounded-2xl">
                    <AnimatePresence mode="wait">
                        {openReply && (
                            <motion.div
                                initial={{height: "fit-content"}}
                                exit={{height: 0}}
                                className="overflow-hidden"
                            >
                                <CommentForm
                                    replyTo={comment}
                                    reloadList={reloadList}
                                    handleCloseReply={handleCloseReply}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {(comment.replies || []).map((comment) => (
                        <CommentItem
                            key={comment._id}
                            comment={comment}
                            reloadList={reloadList}
                            noReply
                        />
                    ))}
                </div>
            )}
        </Card>
    );
}
