import React from 'react';
import { BsSend } from 'react-icons/bs';

const MessageInput = () => {
  return (
    <form className='relative px-4 my-3'>
      <div className='relative w-full'>
        <input
          type="text"
          placeholder='Send a message'
          className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-none text-white outline-none bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30'
        />
        <button type='submit' className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-200'>
          <BsSend />
        </button>
      </div>
    </form>
  );
}

export default MessageInput;

//STARTER CODE
// import { BsSend } from 'react-icons/bs';

// const MessageInput = () => {
//   return (
//     <form className='relative px-4 my-3'>
//       <div className='relative w-full'>
//         <input
//           type="text"
//           placeholder='Send a message'
//           className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-none text-white outline-none bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30'
//         />
//         <button type='submit' className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-200'>
//           <BsSend />
//         </button>
//       </div>
//     </form>
//   );
// }

// export default MessageInput;
