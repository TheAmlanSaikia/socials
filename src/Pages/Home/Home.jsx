import FeedCards from "./Components/Cards/FeedCard";
import UploadContainer from "../../Components/Upload Container/UploadContainer.js";
import { posts } from "../../Data/Posts";
import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import UploadModal from "../../Components/Upload Container/UploadModal/UploadModal";

const Home = () => {
  // const [modalShow, setModalShow] = useState(false);
  const Posts = useSelector((state) => state.allPosts);
  console.log(Posts)
  return (
    <div className=' grid grid-cols-3 gap-2 mt-11'>
      <div>Left Side</div>
      <div className='flex flex-col items-center'>
        <UploadContainer />
        {Posts &&
          Posts.map((item) => {
            return <FeedCards data={item} />;
          })}
      </div>

      <div>Right Side</div>
    </div>
  );
};

export default Home;
