// BlogPage.js
import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import BlogList from './BlogList';
import BlogPost from './BlogPost';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='blog-div'>
            <h1>My Blog</h1>
            <BlogList posts={currentPosts} />
      {/* <Route path={`${match.path}/:id`} element={<BlogPost />} /> */} */}

            <div className="pagination">
                {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map((_, index) => (
                    <Link
                        key={index + 1}
                        to="/blog"
                        // {`${match.url}?page=${index + 1}`}
                        onClick={() => paginate(index + 1)}
                    >
                        {index + 1}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
