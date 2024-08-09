import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-api-h9k7.onrender.com/",
});

// THIS WILL BE WHERE I KEEP ALL MY API REQUEST FUNCTIONS
const getArticles = () => {
  return api.get("/api/articles").then(({ data }) => {
    return data.articles;
  });
};

const getArticle = (article_id) => {
  return api.get(`/api/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export { getArticles, getArticle };
