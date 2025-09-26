import type { DateDetails } from "./types"

export function getDateDetails(date: Date): DateDetails {
  const sunday = new Date(date)
  sunday.setDate(date.getDate() - date.getDay())
  const saturday = new Date(date)
  saturday.setDate(date.getDate() + (6 - date.getDay()))
  const sundayMonth = sunday.toLocaleDateString('default', { month: 'long' })
  const sundayDay = sunday.getDate()
  const saturdayMonth = saturday.toLocaleDateString('default', { month: 'long' })
  const saturdayDay = saturday.getDate()
  const weekLabel = `${sundayMonth} ${sundayDay} — ${saturdayMonth} ${saturdayDay}`

  return {
    dayOfWeek: date.toLocaleDateString('default', { weekday: 'long' }),
    dayOfMonth: date.getDate(),
    sunday,
    saturday,
    weekLabel,
  }
}