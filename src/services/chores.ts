import db from './db'
import type { Chore } from '../types'

const tableName = 'chores'

function create(chore: Chore) {
  db.store(tableName, {
    name: chore.name,
    long: chore.long,
    estimate: chore.estimate,
    bonus: chore.bonus,
    frequency: chore.frequency,
    preferredDay: chore.preferredDay,
  })
}

async function load(): Promise<Chore[]> {
  const result = await db.query(tableName)
  return result as Chore[]
}

export default {
  create,
  load,
}