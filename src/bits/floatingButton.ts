import van from 'vanjs-core'

const { button } = van.tags

export default (onclick: () => void, content: any) => {
  return button(
    {
      onclick,
      type: 'button',
      class: 'floating-button'
    },
    content
  )
}