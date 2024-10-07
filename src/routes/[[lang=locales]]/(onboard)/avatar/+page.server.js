import { palettes } from '$library/palettes'
import packs from '$library/avatar-packs.json' assert { type: 'json' }

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// TODO replace with data from contentful and request in layout
	const data = {
		title: 'Create your avatar',
		cta: 'Continue',
		palette: palettes['palette-1'],
		avatars: {
			pack: 'pack-1',
			count: packs['pack-1']
		}
	}

	return data
}
