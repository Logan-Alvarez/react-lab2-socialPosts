import { title } from "process";
import React, { useState } from "react";
import Post from "../models/postInterface";
import PostForm from "./PostForm";
import PostInList from "./PostInList";

function SocialPosts() {
  const [posts, setPost] = useState<Post[]>([
    { title: "Almost cried", thought: "Almost cried tyring to learn react" },
    { title: "Monkey Brain", thought: "Monkey brain struggle to learn react" },
    { title: "Devolving", thought: "Now monkey" },
  ]);

  const [hidden, setHidden] = useState<boolean>(false);

  function handleDeletePost(index: number) {
    setPost((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  }

  function handlePostFormSubmit(post: Post) {
    setPost((prev) => [...posts, post]);
  }

  return (
    <div className="spcontainer">
      <h1>My Thoughts</h1>
      <button className="newThought" onClick={() => setHidden(true)}>
        New Thought
      </button>
      <div className="Post-Container">
        {posts.map((post, i) => (
          <PostInList
            key={i}
            post={post}
            onDelete={() => handleDeletePost(i)}
          />
        ))}
      </div>
      <div className="opacityDiv"></div>
      {hidden ? (
        <PostForm
          onSubmit={handlePostFormSubmit}
          onClose={() => setHidden(false)}
        />
      ) : null}
    </div>
  );
}

export default SocialPosts;
