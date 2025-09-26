import van from 'vanjs-core'

const { div } = van.tags

export default () => {
  return div({ id: 'chores' }, 'Chores Page')
}
