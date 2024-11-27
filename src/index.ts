import { Hono } from 'hono'

import fs from 'fs'
import path from 'path'

const app = new Hono()

app.get('/', (c) => {
  return c.json(JSON.parse(fs.readFileSync(path.join(__dirname, 'hono.json'), 'utf8')));
})

export default app
