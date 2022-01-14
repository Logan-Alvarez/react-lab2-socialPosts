import React, { FormEvent, useState } from "react";
import Post from "../models/postInterface";
import Modal from "react-modal";

interface Props {
  onSubmit: (post: Post) => void;
}

function PostForm({ onSubmit }: Props) {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");
  const [hidden, setHidden] = useState(false);

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();

    const newPost: Post = {
      title: title,
      thought: thought,
    };
    onSubmit(newPost);
  }

  return (
    <div className="PostForm" onSubmit={handleFormSubmit}>
      <form>
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
          cols={30}
          rows={10}
          value={thought}
          onChange={(e) => setThought(e.target.value)}
        ></textarea>
        <p>
          <button type="submit">Add Post</button>
        </p>
      </form>
    </div>
  );
}

export default PostForm;
