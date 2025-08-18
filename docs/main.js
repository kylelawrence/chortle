import routes from './routes.js'

const content = van.state(() => "")

function renderRoute() {
    const hash = location.hash.substring(1)
    content.val = routes[hash] || routes.notFound
}

function start() {
    van.add(document.body, () => content.val())
    renderRoute();
}

window.addEventListener('hashchange', renderRoute)
window.addEventListener('DOMContentLoaded', start)