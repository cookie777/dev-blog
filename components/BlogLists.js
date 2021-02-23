import react from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

// List the blogs link and thumbnail by using blogContents
const BlogLists = ({ blogContents }) => {
    console.log(blogContents[0].content.slice(0,20))
    return (
        <div>
            {/* show list blog up to N  */}
            <ul>
                {blogContents.map((blog, i) => (
                    <li key={i}>
                        <Link href="/post/[blog]" as={`/post/${blog.data.slug}`}>
                            <a>{blog.data.title}</a>
                        </Link>
                        <ReactMarkdown source={blog.content} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogLists;