import exp from "constants";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API, // defaults to process.env["OPENAI_API_KEY"]
});

export default openai;
