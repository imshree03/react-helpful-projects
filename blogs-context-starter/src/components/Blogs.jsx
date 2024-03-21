import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Blog from "./Blog";
import Spinner from "./Spinner";

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[630px] py-3 flex flex-col gap-y-4 mt-16 mb-16 justify-center items-center">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>No Post Found</div>
      ) : (
        posts.map(post => <Blog key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Blogs;
