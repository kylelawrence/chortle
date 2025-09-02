import van from 'vanjs-core'
import useChores from '../data/useChores'
import type { Chore } from '../types'
import chores from '../services/chores'
import { invalidate } from '../data/dataCache'
import DataKeys from '../data/DataKeys'
import RemoveButton from '../bits/RemoveButton'

const { div, h2 } = van.tags

function Chore(chore: Chore) {
  const onRemove = async () => {
    await chores.remove(chore.name)
    invalidate(DataKeys.chores)
  }

  return div(
    RemoveButton({ onRemove }),
    chore.name
  )
}

export default () => {
  const { loading, data } = useChores()

  return div(
    h2('Chore list'),
    () => div(loading.val
      ? 'Loading...'
      : data.val.map(Chore))
  )
}
