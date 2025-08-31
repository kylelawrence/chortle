import home from './pages/home'
import about from './pages/about'
import notFound from './pages/notFound'
import test from './pages/test'

export default {
	'': home,
	home,
	about,
	test,
	notFound
} as Record<string, any>
