import db from './db'

const tableName = 'errors'

function log(error: ErrorEvent) {
	db.store(tableName, {
		error: {
			message: error.message,
			source: error.filename,
			lineno: error.lineno,
			colno: error.colno,
			error: error.error
		},
		timestamp: new Date()
	}).catch(() => {
		// Do nothing, as we dont want to catch error storing errors
	})
}

export default {
	log,
}