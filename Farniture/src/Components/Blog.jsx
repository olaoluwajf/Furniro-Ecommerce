import Hero from "./Hero";
import { BlogPosts } from "../Datas";
import { FaSearch } from "react-icons/fa";
import Post from "./Post";
import Features from "./Features";
import { Link } from "react-router-dom";
import { Posts } from '../Datas'

const Blog = () => {
  return (
    <div>
      <Hero PageName="Blog" />
      <div className="flex flex-col lg:flex-row xl:flex-row  justify-center gap-5 m-5 mt-20">
        <div className="side1  ">
          <div className="">
            <Post/>
          </div>
        </div>
        <div className="side2 flex flex-col gap-5 w-full md:w-[60%] lg:w-[30%] p-3 ml- xl:w-[40%] ">
          <div className="w-[80%] ">
            <div className="flex flex-row  w-full  items-center justify-center gap-4 m-5 ">
              <input
                type="text"
                className="border justify-center w-full p-4 rounded-xl text-gray-500"
              />
              <span className=" ">
                <FaSearch className="font-light text-2xl justify-center text-center items-center" />
              </span>
            </div>
            <h1 className="text-3xl font-semibold ml-10">Categories</h1>
            <div className="flex flex-row gap-5 mt-10 m-4 ml-5">
              <div className="flex flex-col  gap-12 w-full xl:w-[45%] lg:w-[45%]  text-gray-500">
                <span>Crafts</span>
                <span>Design</span>
                <span>Handmade</span>
                <span>Interior</span>
                <span>Wood</span>
              </div>
              <div className="flex flex-col gap-12 text-gray-500 ">
                <span>2</span>
                <span>8</span>
                <span>7</span>
                <span>1</span>
                <span>6</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-[43%]">
            <h1 className="font-bold text-2xl m-3">Recent Photos</h1>
            <div className="m-4 mb-6 flex flex-col  gap-5">
              {BlogPosts.map((item) => (
                <Link className="flex flex-row items-center text-left">
                  <img src={item.img} alt="" />
                  <div className="flex flex-col  items-center ">
                    <h2 className="font-semibold w-40 m-2 mb-1">
                      {item.topic}
                    </h2>
                    <span className="text-sm w-30 flex">{item.dayInfo}</span>
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
