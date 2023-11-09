import openai from "@/utils/chatgpt";

export async function GET() {
  try {
    const models = await openai.models.list().then((res) => res.data);

    const modelOptions = models.map((model) => ({
      value: model.id,
      label: model.id,
    }));
    return Response.json({ modelOptions });
  } catch (error) {
    return Response.json({ modelOptions: [] });
  }
}
