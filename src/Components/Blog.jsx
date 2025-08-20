import Hero from "./Hero";
import { BlogPosts } from "../Datas";
import { FaSearch } from "react-icons/fa";
import Post from "./Post";
import Features from "./Features";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <Hero PageName="Blog" />
      <div className="blog-container">
        <div className="side1">
          <Post />
        </div>
        <div className="blog-side2">
          <div className="w-[80%]">
            <div className="search-container">
              <input type="text" className="search-input" />
              <span>
                <FaSearch className="font-light text-2xl" />
              </span>
            </div>
            <h1 className="categories-title">Categories</h1>
            <div className="categories-list">
              <div>
                <span>Crafts</span>
                <span>Design</span>
                <span>Handmade</span>
                <span>Interior</span>
                <span>Wood</span>
              </div>
              <div>
                <span>2</span>
                <span>8</span>
                <span>7</span>
                <span>1</span>
                <span>6</span>
              </div>
            </div>
          </div>
          <div className="recent-photos">
            <h1 className="recent-title">Recent Photos</h1>
            <div className="recent-list">
              {BlogPosts.map((item) => (
                <Link className="recent-item">
                  <img src={item.img} alt="" />
                  <div className="recent-item-content">
                    <h2 className="recent-item-title">{item.topic}</h2>
                    <span className="recent-item-date">{item.dayInfo}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Blog;
