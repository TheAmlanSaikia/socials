const UploadModal = () => {
  return (
    <div class='flex justify-center  absolute h-screen w-screen items-center bg-base-200 z-50 top-0  antialiased'>
      <div class='flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border bg-base
      -300 opacity-100 shadow-xl'>
        <div class='flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg'>
          <p class='font-semibold text-gray-800'>Add a step</p>
          <svg
            class='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M6 18L18 6M6 6l12 12'></path>
          </svg>
        </div>
        <div class='flex flex-col px-6 py-5 bg-gray-50'>
          <p class='mb-2 font-semibold text-gray-700'>Bots Message</p>
          <textarea
            type='text'
            name=''
            placeholder='Type message...'
            class='p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36'
            id=''></textarea>
          <hr />
        </div>
        <div class='flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg'>
          <p class='font-semibold text-gray-600'>Cancel</p>
          <button class='px-4 py-2 text-white font-semibold bg-blue-500 rounded'>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
