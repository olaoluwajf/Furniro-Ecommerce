import React from 'react';
import BlogDescription from './BlogDescription';
import { Link } from 'react-router-dom';
import { Posts } from '../Datas';
import './Post.css';

const Post = () => {
  return (
    <div className="post-container">
      {Posts.map((post) => (
        <div key={post.id} className="post-card">
          <img src={post.img} alt={post.header} className="post-image" />
          <BlogDescription />
          <h1 className="post-title">{post.header}</h1>
          <p className="post-excerpt">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium aliquid doloremque,
            in suscipit voluptates eos fugiat ratione architecto vitae omnis delectus sunt esse nesciunt
            beatae modi, incidunt cupiditate dolore. Doloribus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus, cumque.
          </p>
          <Link to="/Post" className="post-readmore">
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Post;
