export type Chore = {
  name: string
  long: string
  estimate: string
  bonus: string
  frequency: string
  preferredDay: string
}

export type DateDetails = {
  dayOfWeek: string
  dayOfMonth: number
  sunday: Date
  saturday: Date
  weekLabel: string
}