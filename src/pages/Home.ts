import van from 'vanjs-core'
import modal from '../bits/Modal'
import newChoreForm from '../parts/NewChoreForm'
import choreList from '../parts/ChoreList'

const { h1, div, button } = van.tags

export default () => {
	const handleCreateClick = async () => {
		modal.show(newChoreForm({ onDone: modal.hide }))
	}

	return div(
		h1('Welcome to chortle'),
		button({ onclick: handleCreateClick }, 'Create new chore'),
		choreList(),
	)
}