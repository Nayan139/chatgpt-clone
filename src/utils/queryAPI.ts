import openai from "@/utils/chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openai.chat.completions.create({
    model,
    messages: [{ role: "user", content: prompt }],
    stream: true,
  });

  console.log("res-------------------------<> :>> ", res);
};

export default query;
