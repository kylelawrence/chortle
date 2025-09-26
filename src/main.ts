import van from 'vanjs-core'
import routes from './routes'
import db from './services/db'
import errors from './services/errors'
import './styles/base.scss'

const { div, a } = van.tags

const route = van.state('')
const content = van.state(() => '')

function updateContent() {
	route.val = location.hash.substring(1)
	content.val = routes[route.val] || routes.notFound
}

function Nav() {
	return div(
		{ id: 'nav' },
		a({ href: '#' }, '🗓️'),
		a({ href: '#chores' }, '🧽'),
		a({ href: '#family' }, '🧑‍🧑‍🧒‍🧒'),
		a({ href: '#settings' }, '⚙️'),
	)
}

async function start() {
	await db.init()

	updateContent()

	van.add(
		document.getElementById('app')!,
		Nav(),
		div(
			{ id: 'content' },
			() => content.val()
		)
	)
}

window.addEventListener('hashchange', updateContent)
window.addEventListener('DOMContentLoaded', start)
window.addEventListener('error', errors.log)