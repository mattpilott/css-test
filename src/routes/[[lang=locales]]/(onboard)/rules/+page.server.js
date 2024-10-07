/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// TODO replace with data from contentful and request in layout
	const data = {
		title: 'House rules',
		subtitle:
			'We have four golden rules we’d like you to acknowledge and agree to follow before entering the community:',
		cta: 'Accept & Continue',
		rules: [
			{
				emoji: '💝',
				title: 'Be kind',
				subtitle: 'Treat everyone with respect and empathy'
			},
			{
				emoji: '🤗',
				title: 'Be inclusive',
				subtitle: 'Treat everyone with respect and empathy'
			},
			{
				emoji: '💪',
				title: 'Be empowering',
				subtitle: 'Treat everyone with respect and empathy'
			},
			{
				emoji: '🌿',
				title: 'Your health is your wealth',
				subtitle: 'Treat everyone with respect and empathy'
			}
		]
	}

	return data
}
