import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/userConversation";

const MessageContainer = () => {

const {selectedConversation,setSelectedConversation} =   useConversation()
useEffect(()=>{
  //cleanup function
  return()=>setSelectedConversation(null)
},[setSelectedConversation])
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-gray-200 hover:bg-gray-50 bg-opacity-30 px-4 py-2 mb-2 rounded backdrop-filter backdrop-blur-md">
            <span className="label-text font-semibold">To:</span>{" "}
            <span className="text-black font-semibold">{selectedConversation.fullName}</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Ehtisham </p>
        <p>Select a Chat to start messaging </p>
        <TiMessages className="text-3xl md:text-6xl text-center text-white" />
      </div>
    </div>
  );
};
