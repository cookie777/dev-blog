import react from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

// List the blogs link and thumbnail by using blogContents
const BlogLists = ({ blogContents }) => {
    console.log(blogContents)
    return (
        <div>
            {/* show list blog up to N  */}
            <ul>
                {blogContents.map((blog, i) => (
                    <li key={i}>
                        <Link href="/post/[blog]" as={`/post/${blog.header.slug}`}>
                            <a>{blog.header.title}</a>
                        </Link>
                        {/* <ReactMarkdown source={blog.content.slice(0,40)} /> */}
                        {/* {blog.content.slice(0,40)} */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogLists;