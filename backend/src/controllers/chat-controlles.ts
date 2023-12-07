import { Request, Response, NextFunction } from "express";
import User from "../models/user.js";

export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;
  try {
    const user = await User.findById(res.locals.jwtData.id);

    if (!user) {
      return res
        .status(401)
        .json({ message: "User not registered or token issue" });
    }
    // get all of the users previous messages
    const chats = user.chats.map(({ role, content }) => ({
      role,
      content,
    }));
    // add the latest chat to our chat array and user chat array
    chats.push({ content: message, role: "user" });
    user.chats.push({ content: message, role: "user" });

    // TODO send the chat to the model
    // const modelConfig = ourModelAPIConfig();
    // const model = new OurModel(modelConfig);
    // const chatResponse = await model.createChatCompletion({
    //   model: "mika",
    //   messages: chats,
    // });
    const chatResponse = {
      role: "model",
      content: "Hello Sensei! It's me, Mika!",
    };
    user.chats.push(chatResponse);
    await user.save();

    return res.status(200).json({ chats: user.chats });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const sendChatsToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send("User not registered or token issue");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permission mismatch");
    }
    return res.status(200).json({ message: "OK", chats: user.chats });
  } catch (error) {
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const deleteChats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send("User not registered or token issue");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permission mismatch");
    }
    //@ts-ignore
    user.chats = [];
    await user.save();
    return res.status(200).json({ message: "OK" });
  } catch (error) {
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};
