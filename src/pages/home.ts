import van from 'vanjs-core'
import modal from '../bits/modal'
import newChoreForm from '../parts/newChoreForm'
import choreList from '../parts/choreList'

const { h1, div, button } = van.tags

export default () => {
	const handleCreateClick = async () => {
		modal.show(newChoreForm({
			onDone: () => {
				modal.hide()
			}
		}))
	}

	return div(
		h1('Welcome to chortle'),
		button({ onclick: handleCreateClick }, 'Create new chore'),
		choreList(),
	)
}