import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useFetching } from "../../hooks/useFectching";
import PostsService from "../../api";
import Loader from "../../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostsService.getById(params.id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostsService.getCommentsById(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
  }, []);

  useEffect(() => {
    fetchComments(params.id);
  }, []);

  return (
    <div>
      <h1>Вы открыли страницу поста с ID = {params.id}</h1>
      {error && <h1>{error}</h1>}
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1>Коментарии</h1>
      {comError && <h1>{comError}</h1>}
      {isComLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <div>
          {comments.map((com) => (
            <div key={com.id} style={{ marginTop: "15px" }}>
              <h5>{com.email}</h5>
              <div>{com.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
