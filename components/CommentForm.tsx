"use client"

import React, {useEffect} from "react";
import {addToast, Button, Chip, toast} from "@heroui/react";
import {SubmitHandler, useForm} from "react-hook-form";
import {CustomInput} from "@/components/CustomInput";
import {CommentFormType} from "@/types/CommentForm.form.type";
import {zodResolver} from "@hookform/resolvers/zod";
import {commentFormSchema} from "@/schemas/commentForm.schema";
import {useAppSelector} from "@/hooks/useStore";
import {Comment} from "@/interfaces/Comment.interface";
import {axiosCore} from "@/lib/axios";
import {AxiosError} from "axios";


export type CommentFormPropsType = {
    replyTo?: Comment;
}

export function CommentForm(props: CommentFormPropsType) {

    const {replyTo} = props;

    const selectedUser = useAppSelector((state) => state.user.selectedUser)!;
    const defaultValues: CommentFormType = {
        content: "",
        parentId: replyTo?._id,
        userId: selectedUser._id,
    }

    const {
        handleSubmit,
        formState,
        control,
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
            className="flex flex-col gap-2 w-full p-4"
        >
            <div className="font-light text-sm flex items-center gap-1">
                You are logged in as <Chip color="success" className="text-white">{selectedUser!.fullName}</Chip>
            </div>
            {/*{!!replyTo && (*/}
            {/*    <div className="font-bold text-sm">*/}
            {/*        Reply to*/}
            {/*        <div className="bg-primary-100 p-2 rounded-lg font-light cursor-pointer select-none flex gap-1">*/}
            {/*            <strong className="font-bold ">{replyTo.user?.fullName}:</strong>*/}
            {/*            <p className="truncate text-gray-600">{replyTo.content}</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*)}*/}
            {/*{!replyTo && (*/}
            {/*    <div className="font-bold text-sm">*/}
            {/*        New Comment*/}
            {/*    </div>*/}
            {/*)}*/}
            <CustomInput
                label="Content"
                name="content"
                control={control}
                isRequired
                isMultiline
            />
            <Button
                type="submit"
                variant="shadow"
                color="primary"
                isLoading={formState.isSubmitting || formState.isValidating}
                isDisabled={formState.isSubmitting || formState.isValidating}
            >
                Submit
            </Button>
        </form>
    );
}
