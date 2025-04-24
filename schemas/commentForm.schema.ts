import {z} from "zod";

export const commentFormSchema = z.object({
    content: z.string({message: "Enter content"}).min(3, "Content must be at least 3 characters"),
    parent: z.string().optional().nullable(),
});
