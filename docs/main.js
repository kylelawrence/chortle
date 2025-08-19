import routes from './routes.js'
import errors from './services/error.js'

const content = van.state(() => '')

function renderRoute() {
    const hash = location.hash.substring(1)
    content.val = routes[hash] || routes.notFound
}

async function start() {
    await errors.init()

    van.add(document.body, () => content.val())
    renderRoute()
}

function handleError(error) {
    errors.log(error)
}

window.addEventListener('hashchange', renderRoute)
window.addEventListener('DOMContentLoaded', start)
window.addEventListener('error', handleError)