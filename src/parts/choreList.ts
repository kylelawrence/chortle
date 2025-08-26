import van from 'vanjs-core'
import chore from '../services/chore'
import type { Chore } from '../types'

const { div } = van.tags

const loadChores = () => {
  const state = van.state({
    loading: true,
    chores: [] as Chore[],
  })

  chore.list()
    .then(chores => {
      state.val = {
        loading: false,
        chores,
      }
    })

  return state.val
}

export default () => {
  const { loading, chores } = loadChores()

  return div(
    () => loading ? div('Loading...') : div(chores.map((chore) => div(chore.name)))
  )
}