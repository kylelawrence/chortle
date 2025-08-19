let db

function isNotReady() {
    if (!db) {
        console.error('IndexedDB is not initialized. Call init() first.')
        return true
    }
    return false
}

function init() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('errorDB', 1)

        request.onupgradeneeded = (event) => {
            db = event.target.result
            db.createObjectStore('errors', { keyPath: 'id', autoIncrement: true })
        }

        request.onsuccess = (event) => {
            db = event.target.result
            resolve()
        }

        request.onerror = (event) => {
            console.error('IndexedDB error:', event.target.error)
            reject(event.target.error)
        }
    })
}

function log(error) {
    if (isNotReady()) return

    const transaction = db.transaction('errors', 'readwrite')
    const store = transaction.objectStore('errors')
    store.add({ error, timestamp: new Date() })
}

function clear() {
    return new Promise((resolve, reject) => {
        if (isNotReady()) return reject(new Error('IndexedDB is not initialized'))

        const transaction = db.transaction('errors', 'readwrite')
        const store = transaction.objectStore('errors')
        const request = store.clear()

        request.onsuccess = () => {
            resolve('All errors cleared from IndexedDB.')
        }

        request.onerror = (event) => {
            reject(event.target.error)
        }
    })
}

export default {
    init,
    log,
    clear
}