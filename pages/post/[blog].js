import react from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import NavigationBar from "../../components/NavigationBar";
import ArticleHeader from "../../components/ArticleHeader";

const Blog = ({frontmatter, markdownBody}) => {
  
  const {title, description} = frontmatter
  return (
    <>
      <ArticleHeader title={title} description={description} />
      <NavigationBar/>
      <h1>{title}</h1>
      <h3>{description}</h3>

      {/* This is the mark donw content body */}
      <ReactMarkdown 
        source={markdownBody} 
        // ./images/name.jpg  -> /images/name.jpg
        transformImageUri={ url => {
          return url.slice(1)
          }
        }
      />
      
    </>
  );
};
export default Blog;

// Create static props for each blog
export async function getStaticProps(context) {
  //if the page name is [id].js , then params will look like { id: ... }. 
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

// This is just getting articles overview (title)
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
