let db: IDBDatabase | null = null

function init() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('chortle', 1)

    request.onupgradeneeded = (event) => {
      db = (event.target as IDBOpenDBRequest).result

      db.createObjectStore('errors', { keyPath: 'id', autoIncrement: true })
      db.createObjectStore('chores', { keyPath: 'name' })
      db.createObjectStore('family', { keyPath: 'name' })
    }

    request.onsuccess = (event) => {
      db = (event.target as IDBOpenDBRequest).result
      resolve(true)
    }

    request.onerror = (event) => {
      console.error('IndexedDB error:', (event.target as IDBOpenDBRequest).error)
      reject((event.target as IDBOpenDBRequest).error)
    }
  })
}

function transact(table: string, act: (store: IDBObjectStore) => IDBRequest) {
  return new Promise((resolve, reject) => {
    if (!db) return reject(new Error('IndexedDB is not initialized'))

    const transaction = db!.transaction(table, 'readwrite')
    const store = transaction.objectStore(table)
    const request = act(store)

    request.onsuccess = () => {
      resolve(request.result)
    }

    request.onerror = (event) => {
      reject((event.target as any).error)
    }
  })
}

function store(table: string, item: any) {
  return transact(table, (store) => store.add(item))
}

function clear(table: string) {
  return transact(table, (store) => store.clear())
}

function query(table: string) {
  return transact(table, (store) => store.getAll())
}

function remove(table: string, key: string) {
  return transact(table, (store) => store.delete(key))
}

export {
  init,
  store,
  clear,
  query,
  remove,
}

export default db