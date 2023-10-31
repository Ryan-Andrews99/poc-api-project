export interface RegisterRequest {
  email: string
  password: string
}

export const isValidRegisterRequest = (
  request: unknown
): request is RegisterRequest => {
  const test = request as RegisterRequest
  return typeof test?.email === 'string' && typeof test?.password === 'string'
}
