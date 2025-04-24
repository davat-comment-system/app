"use client"

import React from "react";
import {Button, Card, CardBody, Input} from "@heroui/react";
import {Comment} from "@/interfaces/Comment.interface";
import {SubmitHandler, useForm} from "react-hook-form";
import {CustomInput} from "@/components/CustomInput";

export type CommentFormPropsType = {}

export function CommentForm(props: CommentFormPropsType) {

    const {} = props;


    const {
        register,
        handleSubmit,
        watch,
        formState,
        control,
    } = useForm<Comment>()


    const onSubmit: SubmitHandler<Comment> = (data) => {

    }

    return (
        <Card
            fullWidth
            shadow="md"
            isHoverable
        >
            <CardBody
                className="overflow-visible gap-3 p-5 items-center text-gray-500 "
            >
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4 w-full"
                >
                    <CustomInput
                        label="Username"
                        name="username"
                        control={control}
                        isRequired
                    />
                    <CustomInput
                        label="Content"
                        name="content"
                        control={control}
                        isRequired
                        isMultiline
                    />
                    <Button
                        variant="shadow"
                        color="primary"
                    >
                        Submit
                    </Button>
                </form>
            </CardBody>
        </Card>

    );
}
