import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import ArticleCard from "../Components/ArticleCard";
import { getArticles, getArticleComments } from "../Components/apiRequests";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div id="latest-articles" className="background-body">
        <h2>Latest Lies</h2>
        <ArticleCard articles={articles} />;
      </div>
    );
  }
};

export default ArticlesList;
