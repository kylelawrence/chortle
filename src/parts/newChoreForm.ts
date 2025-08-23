import van from 'vanjs-core'

const { div, input, button, h3 } = van.tags

interface Props {
  onDone: () => void
}

export default (props: Props) => {
  const name = van.state('')

  const handleSubmit = () => {
    alert(`Value: ${name.val}`)
    props.onDone()
  }

  return div(
    h3('Let\'s make a chore'),
    input({
      type: 'text',
      placeholder: 'Chore name',
      value: name,
      oninput: e => name.val = e.target.value,
    }),
    button({ onclick: handleSubmit }, 'Create')
  )
}