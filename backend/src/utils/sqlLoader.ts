import fs from 'fs'
import path from 'path'

const cache: Record<string, string> = {}

export function loadSQL(filePath: string): string {
  if (cache[filePath]) return cache[filePath]

  const fullPath = path.join(__dirname, '..', 'sql', filePath)
  const sql = fs.readFileSync(fullPath, 'utf-8')
  cache[filePath] = sql
  return sql
}