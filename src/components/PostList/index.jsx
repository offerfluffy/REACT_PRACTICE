import React from "react";
import PostItem from "../PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ remove, posts, title, loading }) => {

  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>;
  }

  return (
    <div>
      {/* стили можно писать в пропсах в {} */}
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem
              remove={remove}
              post={post}
              key={post.id}
              number={index + 1}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
