import DataKeys from '../data/DataKeys'
import db from './db'

function log(error: ErrorEvent) {
	db.store(DataKeys.errors, {
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