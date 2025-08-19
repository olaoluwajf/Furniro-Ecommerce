import Hero from "./Hero";
import { BlogPosts } from "../Datas";
import { Link, useParams } from "react-router-dom";
import Features from "./Features";
import BlogDescription from "./BlogDescription";

const RPost = () => {
  const { id } = useParams();
  const post = BlogPosts.find((p) => p.id === parseInt(id));
  if (!post) {
    return (
      <div className="p-5 text-center text-red-600">
        Post not found. Please check the URL or return to the blog.
        <Link to="/Blog" className="block mt-4 text-blue-500 hover:underline">
          Go to Blog
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Hero PageName="Post" />
      <Link className="mt-10 mb-10 flex flex-col rounded-lg w-full justify-center ">
        <h1 className="text-5xl font-bold m-10 text-center">{post.topic}</h1>
        <div className="justify-center">
          <img src={post.img} alt="" className="w-[500px] justify-self-center"/>
          <BlogDescription  />
        </div>
        
        <p className="text-gray-500 m-5 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          aliquid doloremque, <br /> in suscipit voluptates eos fugiat ratione
          architecto vitae omnis delectus sunt esse nesciunt beatae <br /> modi,
          incidunt cupiditate dolore. Doloribus. Lorem ipsum dolor sit amet
          consectetur <br /> adipisicing elit. Doloribus, cumque. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Doloribus, cumque.
        </p>

        <Link
          to="/Post "
          className="font-bold text-lg text-center hover:underline underline p-2 m-4"
        >
          Read more
        </Link>
      </Link>
      
      <Features/>
    </div>
  );
};

export default RPost;
