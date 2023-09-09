import React, { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      {/* Управляемый компонент */}
      <MyInput
        type="text"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="Название поста"
      />
      {/* Неуправляемый компонент */}
      <MyInput
        type="text"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
