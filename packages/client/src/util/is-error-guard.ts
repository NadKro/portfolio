export function isError(potentialError: unknown): potentialError is Error {
  const objectUnderTest = potentialError as { message?: string; name?: string; stack?: string}
  return !!(objectUnderTest?.message && objectUnderTest?.name && objectUnderTest?.stack)
}
