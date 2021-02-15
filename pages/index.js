import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import Link from "next/link";
import NavigationBar from "../components/NavigationBar";
import BlogThumbs from "../components/BlogThumbs";

const numOfTopNBlogs = 2

const Index = ({ blogLists, title, description }) => {
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{title}</title>
      </Head>
      <NavigationBar/>
      <h1>My Blogs ✍ </h1>
      <BlogThumbs blogLists = {blogLists} />
    </>
  );
};

export default Index;

// prepare props at server side before hand
export async function getStaticProps() {
  const siteData = await import(`../config.json`);

  //get all .md files in the posts dir
  var glob = require("glob")
  const blogs = glob.sync('content/*.md').filter((_,index)=> index <1)

  // Fixing name
  // Remove path and extension .md to leave filename only
  // test.md ->  test
  const blogSlugs = blogs
  .map(file =>
    file
      .split('/')[1]
      .replace(/ /g, '-')
      .slice(0, -3)
      .trim()
  )

  // Return all blog props as static data at server-side
  return {
    props: {
      blogLists: blogSlugs,
      title: siteData.default.title,
      description: siteData.default.description,
    },
  };
}