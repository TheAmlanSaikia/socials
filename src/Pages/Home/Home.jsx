const { UploadContainer, ImageFeedCard, TextCard } = require("../../Components/Index");

const Home = () => {
  return (
    <div className=' grid grid-cols-3 gap-2 mt-11'>
      <div>Left Side</div>
      <div className="flex flex-col items-center">
      <UploadContainer />
       <ImageFeedCard />
       <TextCard />
      </div>
     
      <div>Right Side</div>
    </div>
  );
};

export default Home;