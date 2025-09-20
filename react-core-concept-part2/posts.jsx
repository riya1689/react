/**1 */

import { use } from "react"
import Post from "./post";

//7.destructuring props
export default function Posts({postsPromise}){
    const posts =use(postsPromise) //8.calling Promise
    console.log(posts);
    return(
        <div className="card">
            <h3>
                <p>All post are here .{posts.lenght}</p>
                {
                    posts.map(post=><Post post={post}></Post>)
                }
            </h3>
        </div>
    )
}