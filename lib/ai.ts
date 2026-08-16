import { createOpenAI } from "@ai-sdk/openai"

const provider = createOpenAI({
  apiKey: process.env.AI_API_KEY,
  baseURL: process.env.AI_API_BASE_URL ?? "http://localhost:20128/v1",
})

export function getAIModel(modelId: string) {
  return provider(modelId)
}
