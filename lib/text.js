export function getCleanId(rawId) {
  // Clean extra characters from id string

  const chars = [' ', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/']
  let id = rawId.toLowerCase()
  for (const char of chars) {
    id = id.replace(char, '-')
  }

  return id
}
