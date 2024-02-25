import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Rajarajan",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/7751830/pexels-photo-7751830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "I'am deadpool",
      img: "https://images.pexels.com/photos/13123976/pexels-photo-13123976.jpeg?auto=compress&cs=tinysrgb&w=1200",
    }
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
