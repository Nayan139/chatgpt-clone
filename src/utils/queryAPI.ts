import openai from "@/utils/chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  try {
    const res = await openai.completions.create({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    if (res) {
      return res.choices[0].text;
    } else {
    }
  } catch (error) {
    return `ChatGPT was unable to find an answer for that! (Error: ${error})`;
  }
};

export default query;
