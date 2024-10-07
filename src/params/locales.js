/**
 * @param {string} param
 * @satisfies {import('@sveltejs/kit').ParamMatcher}
 */
export function match(param) {
	const locales = ['en_gb']
	return locales.includes(param)
}
