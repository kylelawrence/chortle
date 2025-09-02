import van from 'vanjs-core'

const { div, button } = van.tags

export default () => {
  const onclick = () => {
    throw new Error('woo')
  }

  return div(
    button({ onclick }, 'Click me')
  )
}