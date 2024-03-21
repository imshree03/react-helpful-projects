import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Blog from "./Blog";
import Spinner from "./Spinner";

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);

  return (
    <div>
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
