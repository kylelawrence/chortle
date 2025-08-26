import van from 'vanjs-core'

const { div, input, select, option } = van.tags

type Props = {
  oninput: (value: string) => void,
  options: Array<{ value: string, label: string }>,
}

export default ({ oninput, options }: Props) => {
  const inputValue = van.state<string | null>('')
  const selectValue = van.state()

  const handleInput = (e: InputEvent) => {
    inputValue.val = e.data
    oninput(`${inputValue.val} ${selectValue.val}`)
  }

  return div({ class: 'inputSelect' },
    input({
      type: 'text',
      oninput: handleInput,
    }),
    select(
      {
        oninput: (e) => {
          selectValue.val = e.target.value
          oninput(`${inputValue.val} ${selectValue.val}`)
        }
      },
      ...options.map((opt) => option(opt.label))
    )
  )
}