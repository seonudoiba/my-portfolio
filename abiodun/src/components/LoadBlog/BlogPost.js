import React, { useContext, useEffect, useState } from "react";
import EditImage from "../../images/edit.png";
import DeleteImage from "../../images/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import './Blog.scss'
const BlogPost = () => {
  const [post, setPost] = useState({});

  // The useLocation hook returns the current location object, which contains information about the current URL.
  const location = useLocation();
  // The useNavigate hook returns a navigate function that can be used to navigate to a new location.
  const navigate = useNavigate();

  // Extract the post ID from the current URL.
  const postId = location.pathname.split("/")[2];

  // Get the current user from the AuthContext.
  const currentUser = {
    username: "starr"
  }

  // Use the useEffect hook to fetch the blog post data from the server when the component mounts.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  // Handler function for deleting a blog post.
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/posts/${postId}`);
      // Navigate to the home page after deleting the post.
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // Helper function to extract plain text from an HTML string.
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  // Render the blog post.
  return (
    <div className="single">
      <div className="content">
        {/* Render the post image. */}
        <img src={`../upload/${post?.img}`} alt="post cover" />
        <div className="user">
          <div className="info">
            {/* Render the post author and date. */}
            <span>Starr</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {/* Render the edit and delete buttons if the current user is the author of the post. */}
          {/* {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={EditImage} alt="edit" />
              </Link>
              <img onClick={handleDelete} src={DeleteImage} alt="delete" />
            </div>
          )} */}
        </div>
        {/* Render the post title and description. */}
        <h1>{post.title}</h1>
        {getText(post.content)}
        <p>
          Ut eu sem integer vitae. Aliquam vestibulum morbi blandit cursus risus
          at. Convallis aenean et tortor at risus viverra adipiscing at. Sit
          amet dictum sit amet justo donec enim. Nulla aliquet porttitor lacus
          luctus accumsan tortor. Ultrices mi tempus imperdiet nulla malesuada
          pellentesque elit eget gravida. Dui sapien eget mi proin sed. Urna
          nunc id cursus metus aliquam eleifend mi in. Euismod quis viverra nibh
          cras pulvinar mattis. Consequat nisl vel pretium lectus quam id leo in
          vitae. Turpis egestas integer eget aliquet nibh praesent tristique
          magna. Dui accumsan sit amet nulla facilisi. Risus ultricies tristique
          nulla aliquet enim tortor at auctor.
        </p>
        <p>
          Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
          Eget nunc lobortis mattis aliquam. Quisque non tellus orci ac auctor.
          Gravida quis blandit turpis cursus in hac habitasse platea dictumst.
          Id neque aliquam vestibulum morbi blandit cursus risus. Orci porta non
          pulvinar neque laoreet suspendisse interdum. In nibh mauris cursus
          mattis molestie a. Phasellus faucibus scelerisque eleifend donec
          pretium vulputate. Dis parturient montes nascetur ridiculus mus mauris
          vitae ultricies. Elit scelerisque mauris pellentesque pulvinar. Enim
          praesent elementum facilisis leo vel fringilla est ullamcorper eget.
        </p>
      </div>
      {/* Show related categories. */}
      {/* <Menu cat={post.cat} /> */}
    </div>
  );
};

export default BlogPost;