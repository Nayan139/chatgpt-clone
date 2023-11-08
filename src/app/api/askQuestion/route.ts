import { adminDb } from "@/firebase/firebaseAdmin";
import query from "@/utils/queryAPI";
import admin from "firebase-admin";
import { uuid } from "uuidv4";

export async function POST(request: Request) {
  try {
    const req = await request.json();
    console.log("req.body :>> ", req);
    const { prompt, chatId, model, session } = req;
    if (!prompt) {
      Response.error();
      return;
    }

    if (!chatId) {
      Response.json({ answer: "Please provide a valid chatId!" });
      return;
    }
    //   CHATGPT query
    const response = await query(prompt, chatId, model);

    const message: Message = {
      id: uuid(),
      chatId: chatId,
      text: response || "ChatGPT has unable to find an answer for that!",
      createdAt: admin.firestore.Timestamp.now(),
      user: {
        _id: "ChatGPT",
        name: "ChatGPT",
        avatar: "https://links.papareact.com/89k",
      },
    };

    await adminDb
      .collection("users")
      .doc(session?.user?.email!)
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .add(message);
    return Response.json({ answer: message.text });
  } catch (error) {
    Response.json(error);
    return;
  }
}
