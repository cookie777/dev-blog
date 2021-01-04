import react from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const Blog = (props) => {

  return (
    <>
      <h1>{props.siteTitle}</h1>
      <h3>{props.frontmatter.description}</h3>
      <ReactMarkdown source={props.markdownBody} />
    </>
  );
};

export default Blog;

export async function getStaticProps(context) {
  const { blog } = context.params;
  // Import our .md file using the `slug` from the URL
  const content = await import(`../../content/${blog}.md`);
  const config = await import(`../../config.json`)
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
};

export async function getStaticPaths() {
  //get all .md files in the posts dir
  var glob = require("glob")
  const blogs = glob.sync('content/*.md')

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map(file =>
    file
      .split('/')[1]
      .replace(/ /g, '-')
      .slice(0, -3)
      .trim()
  )

  // create paths with `slug` param
  const paths = blogSlugs.map(slug => `/post/${slug}`)

  return {
    paths,
    fallback: false,
  }
}