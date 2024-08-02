import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
// import { io } from "../server.js"; // Ensure io is imported from the server setup

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId: senderId,
      receiverId: receiverId,
      message: message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // both will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    // SOCKET.IO functionality
    const receiverSocketId = getReceiverSocketId(receiverId)
    if (receiverSocketId) {
      console.log("socket check")
      // io.to(<socket_id>).emit() used to send events to specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    console.log("final check");
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller:", error.message);
    res.status(500).json({ error: "Internal server Error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id; //coming from protect Route middleware

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); // not reference but actual message

    if (!conversation) {
      return res.status(200).json([]);
    }
    const messages = conversation.messages;

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("Error in getMessage controller:", error.message);
    res.status(500).json({ error: "Internal server Error" });
  }
};
