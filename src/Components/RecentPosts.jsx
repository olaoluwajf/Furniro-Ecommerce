import { Link } from 'react-router-dom';
import { BlogPosts } from '../Datas';
import './RecentPosts.css';

const RecentPosts = () => {
  return (
    <div className="recent-posts">
      {BlogPosts.map((post) => (
        <Link key={post.id} to={`/blog/${post.id}`} className="recent-post-link">
          <div className="recent-post-item">
            <img src={post.img} alt={post.topic} className="recent-post-image" />
            <div className="recent-post-info">
              <h3 className="recent-post-title">{post.topic}</h3>
              <p className="recent-post-excerpt">
                {post.description || "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecentPosts;
