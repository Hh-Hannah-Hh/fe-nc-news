import { useEffect, useState } from "react";
import { getArticle } from "../Components/apiRequests";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);
  const { title, topic, author, body, article_img_url, created_at, votes } =
    article;

  return (
    <>
      <div className="single-article">
        <h2>{title}</h2>
        <img src={article_img_url} alt={`Image relating to ${topic}.`} />
        <h4>Category: {topic}</h4>
        <h4>Fibs fabricated by: {author}</h4>
        <p>{body}</p>
        <p>Support for this lie: {votes}</p>
      </div>
    </>
  );
};

export default SingleArticle;
