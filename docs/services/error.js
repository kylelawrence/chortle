import db from './error/_indexed.js'

async function init() {
    await db.init()
}

function log(error) {
    db.log(error)
}

export default {
    init,
    log
}