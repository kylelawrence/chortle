let db: IDBDatabase | null = null

function isNotReady() {
  if (!db) {
    console.error('IndexedDB is not initialized. Call init() first.')
    return true
  }

  return false
}

function init() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('chortle', 1)

    request.onupgradeneeded = (event) => {
      db = (event.target as IDBOpenDBRequest).result

      db.createObjectStore('errors', { keyPath: 'id', autoIncrement: true })
      db.createObjectStore('chores', { keyPath: 'name' })
    }

    request.onsuccess = (event) => {
      db = (event.target as IDBOpenDBRequest).result
      resolve({})
    }

    request.onerror = (event) => {
      console.error('IndexedDB error:', (event.target as IDBOpenDBRequest).error)
      reject((event.target as IDBOpenDBRequest).error)
    }
  })
}

function store(table: string, item: any) {
  if (isNotReady()) return

  try {
    const transaction = db!.transaction(table, 'readwrite')
    const store = transaction.objectStore(table)
    store.add(item)
  } catch {
    // Ignore add errors, because this is what catches them
  }
}

function clear(table: string) {
  return new Promise((resolve, reject) => {
    if (isNotReady()) return reject(new Error('IndexedDB is not initialized'))

    const transaction = db!.transaction(table, 'readwrite')
    const store = transaction.objectStore(table)
    const request = store.clear()

    request.onsuccess = () => {
      resolve('All errors cleared from IndexedDB.')
    }

    request.onerror = (event) => {
      reject((event.target as any).error)
    }
  })
}

function query(table: string) {
  if (isNotReady()) return Promise.resolve([])

  return new Promise((resolve, reject) => {
    const transaction = db!.transaction(table, 'readonly')
    const store = transaction.objectStore(table)
    const request = store.getAll()

    request.onsuccess = () => {
      resolve(request.result)
    }

    request.onerror = (event) => {
      reject((event.target as any).error)
    }
  })
}

export {
  isNotReady,
  init,
  store,
  clear,
  query,
}

export default db