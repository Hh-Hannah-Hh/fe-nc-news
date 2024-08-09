import "./App.css";
import { Routes, Route } from "react-router-dom";
import Categories from "../Pages/Categories";
import Latest from "../Pages/Latest";
import Users from "../Pages/Users";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SingleArticle from "../Pages/SingleArticle";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/latest/:article_id" element={<SingleArticle />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
