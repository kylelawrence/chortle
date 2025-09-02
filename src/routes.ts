import home from './pages/Home'
import about from './pages/About'
import notFound from './pages/NotFound'
import test from './pages/Test'

export default {
	'': home,
	home,
	about,
	test,
	notFound
} as Record<string, any>
