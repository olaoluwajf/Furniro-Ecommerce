
import { FiUser, FiCalendar, FiTag } from "react-icons/fi";
import "./BlogDescription.css";   // ✅ import CSS

const BlogDescription = () => {
  return (
    <div className="blog-description">
      <FiUser />
      <span>Admin</span>
      <FiCalendar />
      <span>14th October 2025 G.C</span>
      <FiTag />
      <span>Wood</span>
    </div>
  );
};

export default BlogDescription;
