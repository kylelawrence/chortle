import routes from './routes.js'
import errors from './services/error.js'

const content = van.state(() => '')

function renderRoute() {
    const hash = location.hash.substring(1)
    content.val = routes[hash] || routes.notFound
}

function start() {
    errors.init()

    van.add(document.body, () => content.val())
    renderRoute()
}

function handleError(event) {
    errors.log({
        message: event.message,
        source: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
    })
}

window.addEventListener('hashchange', renderRoute)
window.addEventListener('DOMContentLoaded', start)
window.addEventListener('error', handleError)