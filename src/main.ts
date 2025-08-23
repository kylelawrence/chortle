import van from 'vanjs-core'
import routes from './routes'
import db from './services/db'
import errors from './services/error'

const content = van.state(() => '')

function renderRoute() {
	const hash = location.hash.substring(1)
	content.val = routes[hash] || routes.notFound
}

async function start() {
	await db.init()

	van.add(document.getElementById('app')!, () => content.val())
	renderRoute()
}

window.addEventListener('hashchange', renderRoute)
window.addEventListener('DOMContentLoaded', start)
window.addEventListener('error', errors.log)