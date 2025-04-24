import {z} from "zod";

export const commentFormSchema = z.object({
    content: z.string({message: "Enter content"}).min(3, "Content must be at least 3 characters"),
    userId: z.string({message: "User ID is required"}).nonempty("User ID is required").optional().nullable(),
    parentId: z.string().optional().nullable(),
});
