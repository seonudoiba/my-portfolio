import React from "react";
import "../Blog/Blog.css";
import Blog1 from '../../images/blog-01.jpg';
import { useEffect, useState } from "react";
import axios from "axios";


function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Defining an asynchronous function called fetchData
    const fetchData = async () => {
      try {
        // Making an HTTP GET request to the server to retrieve posts data based on the cat variable
        const res = await axios.get(`http://localhost:5000/posts`);
        // Updating the posts state variable with the retrieved data
        setPosts(res.data);
      } catch (err) {
        // Logging any errors that occur during the request
        console.log(err);
      }
    };
    // Calling the fetchData function
    fetchData();
  }, []);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading">Latest News</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>
      <div className="container">
        <div className="row">
            
          {posts.map((post) => (
            <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">{post.title}</h5>
                <h4 className="project__text">{getText(post.content).substring(0,100)}</h4>
                <a href={`blog/${post._id}`} className="blog project__btn btn">Read More</a>
              </div>
            </div>
          </div>
          ))
          }

        </div>
      </div>
    </div>
  );
}

export default Blog;
