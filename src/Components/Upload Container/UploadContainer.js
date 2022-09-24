import { Avatar } from "../Index";

const UploadContainer = () => {
  return (
    <div className='flex flex-col w-full lg:flex-row'>
      <div className='grid flex-grow h-32 card bg-base-300 rounded-box place-items-center'>
        <div className='flex mt-6 justify-between w-4/5'>
          <div className='w-1/4 mt-1'>
            <Avatar />
          </div>
          <input
            type='text'
            placeholder='Discuss..'
            className='input input-bordered input-lg w-full max-w-xs'
          />
        </div>
        <div className="w-3/6 ml-7 text-left">
          <button className='btn p-0 b-0 bg-base-300'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadContainer;
