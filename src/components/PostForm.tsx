import React, { FormEvent, useState } from "react";
import Post from "../models/postInterface";
import modal from "react-modal";

interface Props {
  onSubmit: (post: Post) => void;
  onClose: () => void;
}

function PostForm({ onSubmit, onClose }: Props) {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");
  const [close, setOnClose] = useState(false);

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();

    const newPost: Post = {
      title: title,
      thought: thought,
    };
    onSubmit(newPost);
    setTitle("");
    setThought("");
  }

  return (
    <div className="PostForm" onSubmit={handleFormSubmit}>
      <form>
        <div className="exitBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-circle-fill"
            viewBox="0 0 16 16"
            onClick={onClose}
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
        </div>
        <h2>Title</h2>
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h2>Thought</h2>
        <textarea
          name=""
          id="thought"
          placeholder="Thoughts..."
          cols={30}
          rows={10}
          value={thought}
          onChange={(e) => setThought(e.target.value)}
        ></textarea>
        <span>
          <button type="submit">Add Post</button>
        </span>
      </form>
    </div>
  );
}

export default PostForm;
