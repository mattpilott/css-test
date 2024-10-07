/** @type {import('./$types').LayoutServerLoad} */
export async function load({ params }) {
	return { lang: params.lang && `/${params.lang}` }
}
