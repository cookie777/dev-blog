import react from "react";
import Head from "next/head";

const ArticleHeader = ({title, description}) =>{
    return(
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{title}</title>
      </Head>
    )
}

export default ArticleHeader;