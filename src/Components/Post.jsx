import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogDescription from "./BlogDescription";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/Posts") // ✅ Fetch posts from JSON Server
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading posts...</p>;
  }

  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          className="mt-10 mb-10 flex flex-col rounded-lg shadow-md p-4 bg-white"
        >
          <img src={post.img} alt={post.header} className="rounded-lg" />
          <BlogDescription />
          <h1 className="text-2xl m-3 font-bold">{post.header}</h1>
          <p className="text-gray-500 m-5">
            {post.description
              ? post.description
              : "No description available for this post."}
          </p>

          <Link
            to={`/post/${post.id}`} // ✅ dynamic link to individual post
            className="font-bold text-lg hover:underline p-2 m-4 text-blue-600"
          >
            Read more
          </Link>
        </div>
      ))}
    </>
  );
};

export default Post;
