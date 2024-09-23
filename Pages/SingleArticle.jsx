import { useEffect, useState } from "react";
import { getArticle, getArticleComments } from "../Components/apiRequests";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import CommentCard from "../Components/CommentCard";

const SingleArticle = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComment] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    getArticleComments(article_id).then((comment) => {
      setComment(comment);
      setIsLoading(false);
    });
  }, []);

  const { title, topic, author, body, article_img_url, created_at, votes } =
    article;

  if (isLoading) {
    return <Loading />;
  } else {
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
        <div>
          <h3>Comments</h3>
          <CommentCard comments={comments} />;
        </div>
      </>
    );
  }
};

export default SingleArticle;
