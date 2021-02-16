import react from "react";
import Link from "next/link";

const BlogThumbs = ({ blogLists }) => {
    return (
        <div>
            {/* show list blog up to N */}
            <ul>
                {blogLists.map((blogTitle, i) => (
                    <li key={i}>
                        <Link href="/post/[blog]" as={`/post/${blogTitle}`}>
                            <a>{blogTitle}</a>
                        </Link>
                        {/* <p>{blog.description}</p> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogThumbs;