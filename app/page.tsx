"use client"

import {Post} from "@/components/Post";
import {Comments} from "@/components/Comments";
import {CommentForm} from "@/components/CommentForm";
import * as rootConfig from "@/config/root.config";

export default function Home() {
    return (
        <div className="h-screen">
            <div className="p-4 h-full grid grid-cols-1 lg:grid-cols-3 gap-4 container mx-auto">
                <div className="col-span-1 lg:col-span-2">
                    <Post {...rootConfig.post}/>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <CommentForm/>
                    <Comments
                        comments={[
                            {
                                _id: "hfhfhf",
                                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                                userId: "",
                                user: {
                                    _id: "gggggg",
                                    fullName: "Rasoul Ahmadi",
                                },
                                likes: ["gg", "gg", "ggg"],
                                likesCount: 0,
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}
