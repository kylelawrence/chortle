import DataKeys from '../data/DataKeys'
import db from './db'

async function createMember(name: string) {
  await db.store(DataKeys.family, { name })
}

async function listMembers() {
  return await db.query(DataKeys.family)
}

async function removeMember(name: string) {
  await db.remove(DataKeys.family, name)
}

export {
  createMember,
  listMembers,
  removeMember,
}