import { title } from "process";
import React, { useState } from "react";
import Post from "../models/postInterface";
import PostForm from "./PostForm";
import PostInList from "./PostInList";

function SocialPosts() {
  const [posts, setPost] = useState<Post[]>([
    { title: "Hello Humans", thought: "React is tricky to learn." },
    { title: "Cows?", thought: "Thought I saw a cow in my front yard." },
    {
      title: "Pokemon",
      thought: "I got a charizard card in celebrations today!",
    },
  ]);

  const [hidden, setHidden] = useState<boolean>(true);

  function handleDeletePost(index: number) {
    setPost((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  }

  function handlePostFormSubmit(post: Post) {
    setPost((prev) => [...posts, post]);
    setHidden(true);
  }

  return (
    <div className="spcontainer">
      <h1>My Thoughts</h1>
      <button className="newThought" onClick={() => setHidden(false)}>
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
      <div className={!hidden ? "modalShade" : "random"}></div>
      {!hidden ? (
        <PostForm
          onSubmit={handlePostFormSubmit}
          onClose={() => setHidden(true)}
        />
      ) : null}
    </div>
  );
}

export default SocialPosts;
