import HomePage from './pages/homePage';
import Footer from './components/Footer/Footer';
import './App.css';
import Header from './components/Header/Header';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogHome from './components/LoadBlog/BlogList';
import BlogEditor from './pages/Blogeditor'
import BlogPost from './components/LoadBlog/BlogPost';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/:postId" element={<BlogPost/>} />
          <Route path="/editor05012000" element={<BlogEditor/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
