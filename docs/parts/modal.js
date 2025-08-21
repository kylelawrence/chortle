const dialogContent = van.state('')
let dialog

function handleClose(e) {
	dialogContent.val = ''
}

function init() {
	dialog = doc.query('#modal')
	dialog.addEventListener('close', handleClose)
	van.add(dialog, () => dialogContent.val)
}

function show(content) {
	dialogContent.val = content
	dialog.showModal()
}

export default {
	init,
	show
}