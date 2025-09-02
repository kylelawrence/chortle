import db from './db'
import type { Chore } from '../types'
import DataKeys from '../data/DataKeys'

async function create(chore: Chore) {
  await db.store(DataKeys.chores, {
    name: chore.name,
    long: chore.long,
    estimate: chore.estimate,
    bonus: chore.bonus,
    frequency: chore.frequency,
    preferredDay: chore.preferredDay,
  })
}

async function list(): Promise<Chore[]> {
  const result = await db.query(DataKeys.chores)
  return result as Chore[]
}

export default {
  create,
  list,
}