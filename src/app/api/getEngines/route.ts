import openai from "@/utils/chatgpt";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const req = await request.json();
    console.log("req :>> ", req);

    const models = await openai.models.list().then((res) => res.data);

    const modelOptions = models.map((model) => ({
      value: model.id,
      label: model.id,
    }));
    console.log("modelOptions :>> ", modelOptions);
    return NextResponse.json({ modelOptions });
  } catch (error) {
    Response.json(error);
    return;
  }
}
