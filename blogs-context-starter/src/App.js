import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext.jsx";
import "./App.css";

export default function App() {
  const { fetchBlogPosts, page } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts(page);
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
