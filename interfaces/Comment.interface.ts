import {User} from "@/interfaces/User.interface";

export interface Comment {
    _id: string;
    content: string;

    user?: User;

    likes?: string[];
    likeCount?: number;
    isLiked?: boolean;

    replies?: Comment[];
    parent?: Comment;
    createdAt?: Date;
}
