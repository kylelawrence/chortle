import routes from './routes.js'
import errors from './services/error.js'
import modal from './parts/modal.js'

const content = van.state(() => '')

function renderRoute() {
	const hash = location.hash.substring(1)
	content.val = routes[hash] || routes.notFound
}

async function start() {
	await errors.init()
	modal.init()

	van.add(doc.query('#app'), () => content.val())
	renderRoute()
}

window.addEventListener('hashchange', renderRoute)
window.addEventListener('DOMContentLoaded', start)
window.addEventListener('error', errors.log)