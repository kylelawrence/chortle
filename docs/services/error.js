import db from './error/_indexed.js'

function init() {
    db.init()
}

function log(error) {
    db.log(error)
}

export default {
    init,
    log
}