"use client"

import React from "react";
import {useAppSelector} from "@/hooks/useStore";
import {NotLogin} from "@/components/NotLogin";
import {CommentsList} from "@/components/CommentsList";


export function Comments() {
    const selectedUser = useAppSelector((state) => state.user.selectedUser);
    if (!selectedUser) return <NotLogin/>
    return <CommentsList/>
}
