import van from 'vanjs-core'
import useChores from '../data/useChores'

const { div, h2 } = van.tags

export default () => {
  const { loading, data } = useChores()

  return div(
    h2('Chore list'),
    () => loading.val
      ? div('Loading...')
      : div(data.val.map((chore) => div(chore.name)))
  )
}
