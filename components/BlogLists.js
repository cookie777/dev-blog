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
                        <ReactMarkdown source={blog.content} />
                        {/* {blog.content.slice(0,80)} */}
                        {/* <ReactMarkdown 
                            source={markdownBody} 
                            // ./images/name.jpg  -> /images/name.jpg
                            transformImageUri={ url => {
                                return url.slice(1)
                                }
                            }
                        /> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogLists;