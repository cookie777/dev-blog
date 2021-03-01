import React from "react";
import Link from "next/link";

import matter from "gray-matter";


import NavigationBar from "../components/NavigationBar";
import BlogLists from "../components/BlogLists";
import ArticleHeader from "../components/ArticleHeader";


const numOfTopNBlogs = 2

const Index = ({blogContents, title, description }) => {
  console.log(blogContents)
  return (
    <>
      <ArticleHeader title={title} description={description}/>
      <NavigationBar/>
      <h1>My Blogs ✍ </h1>
      <BlogLists blogContents = {blogContents} />
    </>
  );
};

export default Index;





// Generate Top N articles.
export async function getStaticProps() {
  const siteData = await import(`../config.json`);

  //get all .md files in the posts dir
  // eg blogTitles == [ 'fist-post1', 'fist-post2' ]
  var glob = require("glob")
  const blogTitles = glob
    .sync('content/*.md')
    .filter((_,index)=> index < numOfTopNBlogs) // extract only Top N items
    .map(title => title.slice(8, -3)) // "content/fist-post1.md" -> "fist-post1"


  // by using blogTitles, get the actual contents. 
  const blogContents = []
  for (var i = 0; i < blogTitles.length; i++) {
    const content = await import(`../content/${blogTitles[i]}.md`);
    const data = matter(content.default);
    data.data.slug = blogTitles[i]
    blogContents.push({header: data.data, content: data.content})
  }

  // Return all blog props as static data at server-side
  return {
    props: {
      title: siteData.default.title,// global blog title from config.json
      description: siteData.default.description, // global blog desc from config.json
      blogContents: blogContents // Array of Top N blog contents.
    },
  };
}



  // brute force
  // create and save all items as props
  // also create top 5 items
  // or 
  // save as rudux
  // create and save all items as props
  // save top 5 in redux
  // use top 5 items in index from redux



