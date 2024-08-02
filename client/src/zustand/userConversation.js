import { create } from 'zustand';

const useConversation = create((set) => ({
  selectedConversation: null, // Initialize with null or an appropriate default value
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),

  messages: [], // Initialize with an empty array
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
