import React from "react";

const Blog = ({ post }) => {
  return (
    <div>
      <p className="font-bold">{post.title}</p>
      <p className="text-xs">
        By <span className="italic">{post.author}</span> on{" "}
        <span className="underline font-bold">{post.category}</span>
      </p>
      <p className="text-[12px]">Posted on {post.date} </p>
      <p className="text-md mt-[5px]">{post.content}</p>
      <div className="flex gap-x-3">
        {post.tags.map((tag, index) => {
          return (
            <a
              href="#"
              key={index}
              className="underline bold text-blue-500 text-[12px]">
              #{tag}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
