const DEFAULT_MODELS = [
  { id: "kr/claude-sonnet-4.5", name: "Claude 4.5 Sonnet" },
  { id: "ds/deepseek-v4-pro", name: "DeepSeek Chat" },
]

function getModels() {
  const configured = process.env.AI_MODELS
    ?.split(",")
    .map((id) => id.trim())
    .filter(Boolean)

  return configured?.length
    ? configured.map((id) => ({ id, name: id }))
    : DEFAULT_MODELS
}

export const MODELS = getModels()

export const DEFAULT_MODEL = MODELS[0].id

export interface GatewayModel {
  id: string
  name: string
}

export function isModelAllowed(id: string) {
  return MODELS.some((model) => model.id === id)
}
