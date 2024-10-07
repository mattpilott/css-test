import fs from 'fs'
import path from 'path'

export function avatarCount() {
	return {
		name: 'avatar-counts',
		buildStart() {
			const avatarsDir = path.resolve('static', 'avatars')

			// Check if the avatars directory exists
			if (!fs.existsSync(avatarsDir)) {
				console.warn('Avatars directory does not exist:', avatarsDir)
				return
			}

			// Read all subdirectories (packs) in the avatars directory
			const packs = fs.readdirSync(avatarsDir).filter(pack => {
				return fs.statSync(path.join(avatarsDir, pack)).isDirectory()
			})

			const counts = {}

			packs.forEach(pack => {
				const packDir = path.join(avatarsDir, pack)
				// Read all files in the pack directory
				const files = fs.readdirSync(packDir).filter(file => {
					return fs.statSync(path.join(packDir, file)).isFile()
				})
				// Store the count of files in the counts object
				counts[pack] = files.length
			})

			// Define the output path for the JSON file
			const outputPath = path.resolve('src', 'library', 'avatar-packs.json')

			// Write the counts object to the JSON file
			fs.writeFileSync(outputPath, JSON.stringify(counts, null, 2))

			console.log('Avatar counts generated:', counts)
		}
	}
}
