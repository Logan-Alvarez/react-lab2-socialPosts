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
        <h2>
          Title <i className="bi bi-x-circle-fill" onClick={onClose}></i>
        </h2>
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
