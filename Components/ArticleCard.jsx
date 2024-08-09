import { Link } from "react-router-dom";

function ArticleCard({ articles }) {
  return (
    <>
      {articles.map((article) => {
        return (
          <>
            <Link to={`/latest/${article.article_id}`}>
              <div
                key={article.article_id}
                id="article-card"
                className="article-card"
              >
                <img
                  src={article.article_img_url}
                  ClassName="article-card-img"
                />
                <li>
                  <h3>{article.title}</h3>
                  <h4>Fibs fabricated by: {article.author}</h4>
                  <p>{article.body}</p>
                </li>
              </div>
            </Link>
          </>
        );
      })}
    </>
  );
}

export default ArticleCard;
