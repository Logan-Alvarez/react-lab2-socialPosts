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
        <div className="trashCan">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash-fill"
            viewBox="0 0 16 16"
            onClick={onClose}
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
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
