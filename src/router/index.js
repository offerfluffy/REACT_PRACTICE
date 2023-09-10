import AboutPage from "../pages/About";
import PostsPage from "../pages/Posts";
import PostsIdPage from "../pages/PostId";
import LoginPage from "../pages/Login";

export const privateRoutes = [
  { path: "/about", component: AboutPage, exact: true },
  { path: "/posts", component: PostsPage, exact: true },
  { path: "/posts/:id", component: PostsIdPage, exact: true },
];

export const publicRoutes = [
  { path: "/login", component: LoginPage, exact: true },
];
