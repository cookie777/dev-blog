import React from "react";
import matter from "gray-matter";
import Link from "next/link";
import NavigationBar from "../components/NavigationBar";
import BlogThumbs from "../components/BlogThumbs";
import ArticleHeader from "../components/ArticleHeader";
import {getStaticProps} from "./post/[blog]"

console.log(getStaticProps())

// Here we put the main and basic component

const numOfTopNBlogs = 2

// const Index = ({ blogLists, title, description }) => {
  
//   return (
//     <>
//       <ArticleHeader title={title} description={description}/>
//       <NavigationBar/>
//       <h1>My Blogs ✍ </h1>
//       <BlogThumbs blogLists = {blogLists} />
//     </>
//   );
// };

// export default Index;

const Index = () => {
  
  return (
    <>
    </>
  );
};

export default Index;








// // This is just getting articles overview (eg. title)
// export async function getStaticProps() {
//   const siteData = await import(`../config.json`);

//   //get all .md files in the posts dir
//   // eg ,[ 'content/fist-post1.md', 'content/fist-post2.md' ]
//   var glob = require("glob")
//   const blogs = glob.sync('content/*.md').filter((_,index)=> index <2)
//   console.log(blogs)

//   // Fixing file name
//   // Remove path and extension .md to leave filename only
//   // [ 'content/fist-post1.md', 'content/fist-post2.md' ] -> [ 'fist-post1', 'fist-post2' ]
//   const blogSlugs = blogs
//   .map(file =>
//     file
//       .split('/')[1]
//       .replace(/ /g, '-')
//       .slice(0, -3)
//       .trim()
//   )


//   // Return all blog props as static data at server-side
//   return {
//     props: {
//       blogLists: blogSlugs,
//       title: siteData.default.title,// from config.json
//       description: siteData.default.description, //  from config.json
//     },
//   };
// }