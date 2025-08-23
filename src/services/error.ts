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
	})
}

export default {
	log,
}