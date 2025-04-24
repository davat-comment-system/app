"use client"

import React from "react";
import {addToast, Button} from "@heroui/react";
import {SubmitHandler, useForm} from "react-hook-form";
import {CustomInput} from "@/components/CustomInput";
import {CommentFormType} from "@/types/CommentForm.form.type";
import {zodResolver} from "@hookform/resolvers/zod";
import {commentFormSchema} from "@/schemas/commentForm.schema";
import {Comment} from "@/interfaces/Comment.interface";
import {axiosCore} from "@/lib/axios";
import {AxiosError} from "axios";


export type CommentFormPropsType = {
    replyTo?: Comment;
    reloadList: () => void;
    handleCloseReply?: () => void;
}

export function CommentForm(props: CommentFormPropsType) {

    const {replyTo, reloadList, handleCloseReply} = props;

    const defaultValues: CommentFormType = {
        content: "",
        parent: replyTo?._id,
    }

    const {
        handleSubmit,
        formState,
        control,
        reset,
    } = useForm<CommentFormType>({
        resolver: zodResolver(commentFormSchema),
        defaultValues: defaultValues,
    })

    const axios = axiosCore()
    const onSubmit: SubmitHandler<CommentFormType> = async (data) => {
        try {
            await axios.post("/comment", data)
            addToast({
                title: "Your comment has been successfully submitted!",
                color: "success",
                variant: "solid",
                timeout: 3000,
                shouldShowTimeoutProgress: true,
            })
            reset()
            if (handleCloseReply) {
                handleCloseReply()
            }
            reloadList()
        } catch (error: unknown) {
            addToast({
                title: "Error in comment",
                description: (error as AxiosError)?.message,
                color: "danger",
                variant: "solid",
                timeout: 3000,
                shouldShowTimeoutProgress: true,
            })
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-2 w-full"
        >
            <CustomInput
                label="Content"
                name="content"
                control={control}
                className="col-span-full"
                isRequired
                isMultiline
            />
            {!!replyTo && (
                <Button
                    variant="solid"
                    color="default"
                    size="sm"
                    onPress={handleCloseReply}
                    isLoading={formState.isSubmitting || formState.isValidating}
                    isDisabled={formState.isSubmitting || formState.isValidating}
                >
                    Cancel
                </Button>
            )}
            <Button
                type="submit"
                variant="shadow"
                color="primary"
                size={replyTo ? "sm" : "md"}
                isLoading={formState.isSubmitting || formState.isValidating}
                isDisabled={formState.isSubmitting || formState.isValidating}
            >
                Submit
            </Button>
        </form>
    );
}
