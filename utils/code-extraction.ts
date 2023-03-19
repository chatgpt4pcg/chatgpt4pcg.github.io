export function extractString(text: string): string | null {
  const PATTERN = /```([^`]+)```/g;
  const CODE_PATTERN = /ab\_drop\(['|"]b[1|3][1|3]['|"], *\d*\)/g;

  let match;
  let lastMatch = null;
  while ((match = PATTERN.exec(text)) !== null) {
    lastMatch = match;
  }
  if (!lastMatch) {
    return null
  }
  const code = lastMatch[0]
  const functionCode = code.matchAll(CODE_PATTERN)

  let output = ''
  for (const fn of functionCode) {
    output += fn.toString().replaceAll('"', "'") + '\n'
  }

  if (output.length === 0) {
    return null
  }

  return output;
}