/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// TODO replace with data from contentful and request in layout
	const data = {
		title: 'Create a nickname',
		subtitle: 'The nickname is only for community and does not affect your in-app name',
		cta: 'Continue'
	}

	return data
}
