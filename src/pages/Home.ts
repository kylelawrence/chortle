import van from 'vanjs-core'
import '../styles/home.scss'
import { getDateDetails } from '../utils'
import type { DateDetails } from '../types'

const { div, button, span } = van.tags

function Header(dateDetails: DateDetails) {
	return div(
		{ class: 'header' },
		div(
			button({ class: 'today-button' }, '🕒 Today'),
			button({}, '<'),
			button({}, '>'),
			span(dateDetails.weekLabel)
		),
		div(
			''
		)
	)
}

function DayHead(day: Date) {
	return div(
		{ class: 'day-head' },
		`${day.getDate()} ${day.toLocaleString('default', { weekday: 'short' })}`
	)
}

function HourCell(hour: Date) {
	const isSunday = van.derive(() => hour.getDay() === 0)
	const hourLabel = van.derive(
		() => hour.toLocaleString('default', { hour: 'numeric', hour12: true })
			.replace(/\./g, '')
	)

	return div(
		{ class: 'hour-cell' },
		div(
			div(
				{ class: 'hour-label' },
				() => (isSunday.val ? hourLabel.val : '')
			)
		),
		div(''),
	)
}

function Body(dateDetails: DateDetails) {
	const days = van.derive(() => {
		const days: Date[] = []

		for (let i = 0; i < 3; i++) {
			const day = new Date(dateDetails.sunday)
			day.setDate(day.getDate() + i)
			days.push(day)
		}

		return days
	})

	const hours = van.derive(() => {
		const hours: Date[] = []
		for (let i = 0; i < 24; i++) {
			for (let j = 0; j < 3; j++) {
				const day = days.val[j]
				const hour = new Date(day)
				hour.setHours(i, 0, 0, 0)
				hours.push(hour)
			}
		}

		return hours
	})

	return div(
		{ class: 'body' },
		days.val.map((day) => DayHead(day)),
		hours.val.map((hour) => HourCell(hour))
	)
}

export default () => {
	const today = new Date()
	const dateDetails = getDateDetails(today)

	return div(
		{ id: 'agenda' },
		Header(dateDetails),
		Body(dateDetails)
	)
}