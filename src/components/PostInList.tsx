import React from "react";
import Post from "../models/postInterface";

interface postProp {
  post: Post;
}

function PostInList({ post }: postProp) {
  return (
    <div className="PostInList">
      <p>{post.title}</p>
      <p>{post.thought}</p>
    </div>
  );
}

export default PostInList;
