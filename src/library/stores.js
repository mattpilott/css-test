import { writable } from 'svelte/store'
import { storable } from 'kitto/svelte'

// A writable store for UI state
export const ui = writable()

// A localstorage backed store for preferences
export const prefs = storable({ avatar: 'pack-1/avatar-1', swatch: 1 }, 'prefs')

// A localstorage backed store for caching data
export const cache = storable({}, 'cache')
