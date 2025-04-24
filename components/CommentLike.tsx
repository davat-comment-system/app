"use client"

import React, {useEffect} from "react";
import {Button, addToast} from "@heroui/react";
import {Heart} from "lucide-react";
import {axiosCore} from "@/lib/axios";
import {AxiosError} from "axios";
import {CommentLikeResponse} from "@/types/CommentLikeResponse.form.type";

export type CommentLikePropsType = {
    commentId: string;
    isLiked: boolean;
    likeCount: number;
}

export function CommentLike(props: CommentLikePropsType) {

    const {commentId, isLiked, likeCount} = props;



    const [_likeCount, setLikeCount] = React.useState(likeCount);
    const [_isLiked, setIsLiked] = React.useState(isLiked);

    useEffect(() => {
        setIsLiked(isLiked)
    }, [isLiked]);

    useEffect(() => {
        setLikeCount(likeCount)
    }, [likeCount]);

    const axios = axiosCore()
    const onToggleLike = async () => {
        try {
            const data: CommentLikeResponse = await axios.post(`/comment/${commentId}/like`)
            setIsLiked(data.isLiked)
            setLikeCount(data.likeCount)
            addToast({
                title: "Comment liked successfully!",
                color: "success",
                variant: "solid",
                timeout: 3000,
                shouldShowTimeoutProgress: true,
            })
        } catch (error: unknown) {
            addToast({
                title: "Error in like comment",
                description: (error as AxiosError)?.message,
                color: "danger",
                variant: "solid",
                timeout: 3000,
                shouldShowTimeoutProgress: true,
            })
        }
    }


    return (
        <div className="flex gap-0.5 items-center">
            <Button
                isIconOnly
                color="danger"
                variant="light"
                size="sm"
                onPress={onToggleLike}
            >
                <Heart
                    fill={_isLiked ? "currentColor" : "transparent"}
                    size={20}
                />
            </Button>
            {(_likeCount > 0) && (
                <span className="text-gray-600 text-sm font-light select-none">
                    {_likeCount}
                </span>
            )}
        </div>

    );
}
