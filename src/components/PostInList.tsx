import React from "react";
import Post from "../models/postInterface";

interface postProp {
  post: Post;
  onDelete: () => void;
}

function PostInList({ post, onDelete }: postProp) {
  return (
    <div className="PostInList">
      <h2 className="postTitle">{post.title}</h2>
      <i className="bi bi-trash-fill" onClick={onDelete}></i>
      <p>{post.thought}</p>
    </div>
  );
}

export default PostInList;
