import van from 'vanjs-core'
import type { Chore } from '../types'
import chores from '../services/chores'
import { invalidate } from '../DataCache'
import DataKeys from '../data/DataKeys'

const { div, input, button, h3, label } = van.tags

interface Props {
  onDone: () => void
}

export default (props: Props) => {
  const newChore = van.state<Chore>({
    name: `Test${Math.floor(Math.random() * 100000000)}`,
    long: 'Test description',
    estimate: '1 hour',
    bonus: '5',
    frequency: 'weekly',
    preferredDay: 'Monday',
  })

  const handleSubmit = () => {
    chores.create(newChore.val)
    invalidate(DataKeys.chores)
    props.onDone()
  }

  const renderInput = (desc: string, prop: keyof Chore) => {
    return div(label(
      desc,
      input({
        type: 'text',
        value: newChore.val[prop],
        oninput: (e) => newChore.val = { ...newChore.val, [prop]: e.data }
      }),
    ))
  }

  return div(
    h3('Let\'s make a chore'),
    renderInput('Name', 'name'),
    renderInput('Description', 'long'),
    renderInput('Bonus', 'bonus'),
    renderInput('Estimate', 'estimate'),
    renderInput('Frequency', 'frequency'),
    renderInput('Preferred Day', 'preferredDay'),
    button({ onclick: handleSubmit }, 'Create'),
  )
}