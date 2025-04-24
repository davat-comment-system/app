import {User} from "@/interfaces/User.interface";

export interface Comment {
    _id: string;
    content: string;

    userId: string;
    user?: User;

    likes: string[];
    likesCount: number;

    parentId?: string;
    createdAt?: Date;
}
