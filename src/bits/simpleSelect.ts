import van from 'vanjs-core'

const { select, option } = van.tags

type Props = {
  defaultValue: string,
  oninput: (value: string) => void,
  options: Array<{ value: string, label: string }>
}

export default ({ defaultValue, oninput, options }: Props) => {
  return select(
    {
      oninput: (e) => {
        oninput(e.target.value)
      },
    },
    ...options.map((opt) => option(
      {
        selected: opt.value === defaultValue
      },
      opt.label
    ))
  )
}