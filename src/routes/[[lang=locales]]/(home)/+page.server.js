import { palettes } from '$library/palettes'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// TODO replace with data from nodebb

	const mygroups = Array(8).fill({
		image: '/dummy/meditate.webp',
		slug: 'spiritual-pregnancy',
		title: 'Spritual Pregnancy'
	})

	const categories = Array(8).fill({
		title: 'Mamas-to-be Circle',
		groups: Array(8).fill({
			image: '/dummy/decaf.webp',
			slug: 'decaf-chat',
			title: 'Decaf & Chat'
		})
	})

	return { mygroups, categories, palette: palettes['palette-1'] }
}
