import {Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from './components/Footer';
import HomePage from "./pages/homePage";
import Articles from './pages/article/Article.jsx'
import Login from "./pages/login/LoginPage";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import RegisterPage from "./pages/register/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";
import AdminLayout from "./pages/admin/AdminLayout";
import Admin from "./pages/admin/screens/Admin";
import Comments from "./pages/admin/screens/comments/Comments";
import ManagePosts from "./pages/admin/screens/posts/ManagePosts";
import EditPost from "./pages/admin/screens/posts/EditPost";
import { Toaster } from "react-hot-toast";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/login" element={<Login />} />
        {/* <Route index path="/" element={<HomePage />} /> */}
        <Route path="/blog/:slug" element={<ArticleDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="comments" element={<Comments />} />
          <Route path="posts/manage" element={<ManagePosts />} />
          <Route path="posts/manage/edit/:slug" element={<EditPost />} />
        </Route>
      </Routes>
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
