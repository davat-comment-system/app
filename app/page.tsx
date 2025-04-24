"use client"

import {Post} from "@/components/Post";
import {Comments} from "@/components/Comments";
import * as rootConfig from "@/config/root.config";

export default function Home() {
    return (
        <div className="h-full p-4">
            <div className="h-full grid grid-cols-1 lg:grid-cols-3 gap-4 container mx-auto">
                <div className="col-span-1 lg:col-span-2">
                    <Post {...rootConfig.post}/>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <Comments/>
                </div>
            </div>
        </div>
    );
}
