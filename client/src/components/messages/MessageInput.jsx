import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage.js";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [sendMessage, loading] = useSendMessage(); // Correct destructuring

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) {
      return;
    }
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="relative px-4 my-3" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Send a message"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-none text-white outline-none bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30"
          value={message} // Controlled input
          onChange={(e) => setMessage(e.target.value)} // Update state on change
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-200">
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

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
