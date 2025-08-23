import home from './pages/home'
import about from './pages/about'
import notFound from './pages/notFound'

export default {
	'': home,
	home,
	about,
	notFound
} as Record<string, any>
