import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    console.log("check1")
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    console.log("check2")
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    console.log("check3")
    const newMessage = new Message({
        senderId: senderId,
        receiverId: receiverId,
        message: message,
    })
    console.log("check4")
    if(newMessage){
        conversation.messages.push(newMessage._id)
    }

    //SOCKET.IO functionality

    // both will run in parallel 
    await Promise.all([conversation.save(),newMessage.save()])

    res.status(201).json(newMessage)
  } catch (error) {
    console.log("Error in sendMessage controller:", error.message);
    res.status(500).json({ error: "Internal server Error" });
  }
};


export const getMessage = async(req,res)=>{
    try {
        const {id:userToChatId} = req.params
        const senderId = req.user._id //coming from protect Route middleware

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]}
        }).populate("messages")// not reference but actual message

        if(!conversation){
            return res.status(200).json([])
        }
        const messages = conversation.messages

        res.status(200).json(conversation.messages)
    } catch (error) {
        console.log("Error in getMessage controller:", error.message);
        res.status(500).json({ error: "Internal server Error" });
             
    }
}