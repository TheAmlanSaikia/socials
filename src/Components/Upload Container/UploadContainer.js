import { useEffect, useState } from "react";
import { Avatar } from "../Index";
import { useDispatch } from "react-redux";
import { addPostAction } from "../../Redux/Action/AddPost";
import { ADD_POST } from "../../Redux/Types/Types";

const UploadContainer = ({ setModalShow }) => {
  const [inputText, setInputText] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const dispatch = useDispatch();

  const postPayload = {
    content: inputText,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [],
    postMedia: {
      url: null,
      original_filename: null,
      file: imageFile && imageFile,
    },
    profileImage: {
      url: "https://placeimg.com/192/192/people",
      original_filename: "amlansaikia",
    },
    userId: "ponkhisaikia_",
    firstName: "Ponkhi",
    lastName: "Saikia",
    username: "ponkhisaikia",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  };

  const changeText = (e) => {
    setInputText(e.target.value);
  };
  const addPost = () => {
    inputText &&
      dispatch(
        addPostAction({
          ...postPayload,
          type: ADD_POST,
        })
      );
  };

  const addImage = (e) => {
    console.log(e);
    setImageFile(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    console.log(imageFile);
  }, [imageFile]);

  return (
    <div className='flex flex-col w-full lg:flex-row'>
      <div className='grid flex-grow h-32 card shadow-md dark:bg-gray-900 dark:text-gray-100 rounded-box place-items-center'>
        <div className='flex mt-6 justify-between w-4/5'>
          <div className='w-1/4 mt-1'>
            <Avatar />
          </div>
          <input
            type='text'
            placeholder='Discuss..'
            className='input input-bordered input-lg w-full max-w-xs'
            onChange={changeText}
            // onClick={() => setModalShow(true)}
          />
        </div>
        <div className='w-3/6 ml-7 flex row justify-between text-left'>
          <input
            type='file'
            accept='image/png, image/jpeg'
            onChange={addImage}
            className='btn'
          />

          {/* <button
            className='btn p-0 b-0 bg-base-300 h-0 min-h-0'
            onClick={()=> setModalShow(true)}
          >
            <svg
              // xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
            Image
          </button> */}
          <button onClick={addPost} className='btn btn-sm btn-warning'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadContainer;
