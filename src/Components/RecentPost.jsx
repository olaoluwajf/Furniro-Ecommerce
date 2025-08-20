import Hero from "./Hero";
import { BlogPosts } from "../Datas";
import { Link, useParams } from "react-router-dom";
import Features from "./Features";
import BlogDescription from "./BlogDescription";
import './RPost.css';

const RPost = () => {
  const { id } = useParams();
  const post = BlogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="error-message">
        Post not found. Please check the URL or return to the blog.
        <Link to="/Blog" className="error-link">
          Go to Blog
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Hero PageName="Post" />
      <div className="post-container">
        <h1 className="post-title">{post.topic}</h1>
        <div className="post-image-container">
          <img src={post.img} alt="" className="post-image"/>
          <BlogDescription />
        </div>
        <p className="post-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          aliquid doloremque, in suscipit voluptates eos fugiat ratione
          architecto vitae omnis delectus sunt esse nesciunt beatae modi,
          incidunt cupiditate dolore. Doloribus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Doloribus, cumque. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Doloribus, cumque.
        </p>

        <Link to="/Post" className="read-more-link">
          Read more
        </Link>
      </div>

      <Features />
    </div>
  );
};

export default RPost;
