import van, { type State } from 'vanjs-core'

interface DataCacheEntry<T> {
  state: State<T>
  loading: State<boolean>
  fn: () => Promise<T>
}

const stateCache = new Map<string, DataCacheEntry<unknown>>()

/**
 * Creates a unique, cached, reactive data source on the provided key.
 * @param key A unique identifier for this data source
 * @param fn A function to populate the data into cache.
 * @returns data: The cached data for this key. Loading: The loading state for this key.
 */
function useData<T>(key: string, fn: () => Promise<T>) {
  if (!stateCache.has(key)) {
    const state = van.state<T>()
    const loading = van.state(true)
    stateCache.set(key, { state, loading, fn })

    fn().then(data => {
      state.val = data
      loading.val = false
    })
  }

  const entry = stateCache.get(key) as DataCacheEntry<T>

  return {
    data: entry.state,
    loading: entry.loading
  }
}

/**
 * Invalidates the cache for the given key, forcing a reload of the data.
 * @param key The unique identifier to invalidate
 */
function invalidate(key: string) {
  const entry = stateCache.get(key)

  if (entry) {
    entry.loading.val = true
    
    entry.fn().then(data => {
      entry.loading.val = false
      entry.state.val = data
    })
  }
}

export {
  useData,
  invalidate,
}