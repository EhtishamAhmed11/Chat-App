import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/userConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation(); // Correctly destructure
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search Term Must be 3 characters long");
    }
    const conversation = conversations.find((conversation) =>
      conversation.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch(""); // Reset the search input
    } else {
      toast.error("No Such user Found");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        value={search} // Make the input controlled
        onChange={(e) => setSearch(e.target.value)} // Update state on change
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;

//STARTER CODE
// import { IoSearchSharp } from "react-icons/io5";
// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="input input-bordered rounded-full"
//       />
//       <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//       <IoSearchSharp className="w-6 h-6 outline-none" />

//       </button>
//     </form>
//   );
// };

// export default SearchInput;
