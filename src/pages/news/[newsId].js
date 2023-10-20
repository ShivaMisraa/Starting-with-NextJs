// our-domain.com/news/DetailsPage

import { useRouter } from "next/router";

const DetailsPage = () => {
  const router= useRouter();

  const newsId= router.query.newsId;
  
  
    return (
      <h1>This is Details Page</h1>
    )
  }
  
  export default DetailsPage;