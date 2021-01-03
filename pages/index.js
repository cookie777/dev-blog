import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import Link from "next/link";

const Index = ({ data, title, description }) => {
  const ListItems = data.map((blog) => matter(blog).data);


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
          {ListItems.map((blog, i) => (
            <li key={i}>
              <Link href={`/post/${blog.slug}`}>
                <a>{blog.title}</a>
              </Link>
                <p>{blog.description}</p>
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

  const fs = require("fs");
  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");
  const blogs = files.filter((fn) => fn.endsWith(".md") && !fn.match("undefined.md") );
  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });
    return rawContent;
  });

  return {
    props: {
      data: data,
      title: siteData.default.title,
      description: siteData.default.description,
    },
  };
}