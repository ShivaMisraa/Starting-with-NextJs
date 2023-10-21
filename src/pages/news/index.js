// our-domain.com/NewsPage

import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>This is NewsPage</h1>
      <ul>
        <li><Link href="news/nextjs-is-a-great-framework">NextJS is a great Framework</Link></li>
        <li>Something else</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
