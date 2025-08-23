import van from 'vanjs-core'

const dialogContent = van.state('')
let dialog: HTMLDialogElement
let initialized = false

function handleClose(_: any) {
	dialogContent.val = ''
}

function init() {
	dialog = document.getElementById('modal') as HTMLDialogElement
	dialog.addEventListener('close', handleClose)
	van.add(dialog, () => dialogContent.val)
}

function show(content: any) {
	if (!initialized) {
		init()
		initialized = true
	}

	dialogContent.val = content
	dialog.showModal()
}

function hide() {
	dialog.close()
	dialogContent.val = ''
}

export default {
	show,
	hide,
}