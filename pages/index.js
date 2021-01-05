import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import Link from "next/link";


const Index = ({ blogLists, title, description }) => {
  // const ListItems = data.map((blog) => matter(blog).data);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{title}</title>
      </Head>
      <h1>My First Blog ✍ </h1>
      <div>
        <ul>
          {blogLists.slice(0,2).map((blogTitle, i) => (
            <li key={i}>
              <Link href="/post/[blog]" as = {`/post/${blogTitle}`}>
                <a>{blogTitle}</a>
              </Link>
                {/* <p>{blog.description}</p> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Index;


export async function getStaticProps() {
  const siteData = await import(`../config.json`);

  //get all .md files in the posts dir
  var glob = require("glob")
  const blogs = glob.sync('content/*.md')

  //remove path and extension to leave filename only
  const blogSlugs = blogs
  .map(file =>
    file
      .split('/')[1]
      .replace(/ /g, '-')
      .slice(0, -3)
      .trim()
  )

  return {
    props: {
      blogLists: blogSlugs,
      title: siteData.default.title,
      description: siteData.default.description,
    },
  };
}