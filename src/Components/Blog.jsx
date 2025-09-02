import { useEffect, useState } from "react";
import Hero from "./Hero";
import { FaSearch } from "react-icons/fa";
import Post from "./Post";
import Features from "./Features";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from JSON Server
  useEffect(() => {
    fetch("http://localhost:3000/BlogPosts") // change to products2 if needed
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog posts:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Hero PageName="Blog" />
      <div className="flex flex-col lg:flex-row xl:flex-row justify-center gap-5 m-5 mt-20">
        <div className="side1">
          <div>
            <Post />
          </div>
        </div>

        <div className="side2 flex flex-col gap-5 w-full md:w-[60%] lg:w-[30%] p-3 xl:w-[40%]">
          {/* Search Bar */}
          <div className="w-[80%]">
            <div className="flex flex-row w-full items-center justify-center gap-4 m-5">
              <input
                type="text"
                className="border justify-center w-full p-4 rounded-xl text-gray-500"
                placeholder="Search..."
              />
              <span>
                <FaSearch className="font-light text-2xl" />
              </span>
            </div>

            {/* Categories (Static for now) */}
            <h1 className="text-3xl font-semibold ml-10">Categories</h1>
            <div className="flex flex-row gap-5 mt-10 m-4 ml-5">
              <div className="flex flex-col gap-12 w-full xl:w-[45%] lg:w-[45%] text-gray-500">
                <span>Crafts</span>
                <span>Design</span>
                <span>Handmade</span>
                <span>Interior</span>
                <span>Wood</span>
              </div>
              <div className="flex flex-col gap-12 text-gray-500">
                <span>2</span>
                <span>8</span>
                <span>7</span>
                <span>1</span>
                <span>6</span>
              </div>
            </div>
          </div>

          {/* Recent Posts from API */}
          <div className="flex flex-col w-full lg:w-[43%]">
            <h1 className="font-bold text-2xl m-3">Recent Photos</h1>
            <div className="m-4 mb-6 flex flex-col gap-5">
              {loading ? (
                <p>Loading posts...</p>
              ) : (
                blogPosts.map((item) => (
                  <Link
                    key={item.id}
                    to={`/blog/${item.id}`}
                    className="flex flex-row items-center text-left"
                  >
                    <img
                      src={item.img}
                      alt={item.topic}
                      className="w-20 h-20 object-cover rounded-lg mr-3"
                    />
                    <div className="flex flex-col">
                      <h2 className="font-semibold w-40 m-2 mb-1">
                        {item.topic}
                      </h2>
                      <span className="text-sm w-30 flex">{item.dayInfo}</span>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <Features />
    </div>
  );
};

export default Blog;
