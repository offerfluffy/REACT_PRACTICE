import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default class PostsService {
  static async getAll(limit = 10, page = 1) {
    const response = await httpClient.get(`/posts`, {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return response;
  }
  static async getById(id) {
    const response = await httpClient.get(`/posts/${id}`);
    return response;
  }
  static async getCommentsById(id) {
    const response = await httpClient.get(`/posts/${id}/comments`);
    return response;
  }
}
