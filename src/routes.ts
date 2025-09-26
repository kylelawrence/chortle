import home from './pages/Home'
import notFound from './pages/NotFound'
import test from './pages/Test'
import settings from './pages/Settings'
import family from './pages/Family'
import chores from './pages/Chores'

export default {
	'': home,
	home,
	test,
	settings,
	family,
	chores,
	notFound
} as Record<string, any>
