import query from "@/utils/queryAPI";

export async function POST(request: Request) {
  try {
    const req = await request.json();
    const { prompt, chatId, model, session } = req.body;

    if (!prompt) {
      Response.json({ answer: "Please provide a prompt!" });
      return;
    }

    if (!chatId) {
      Response.json({ answer: "Please provide a valid chatId!" });
      return;
    }
    //   CHATGPT query
    const response = await query(prompt, chatId, model);
  } catch (error) {
    Response.json(error);
    return;
  }
}
