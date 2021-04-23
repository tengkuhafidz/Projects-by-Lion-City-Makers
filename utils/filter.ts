import {Item} from '../main/data/items'
import {FILTER_ALL} from './constants'

export const getDistinctTags = (items: Item[]) => {
	const distinctFields = []
	items.forEach(item => {
		if (item.tags) {
			item.tags.forEach(field => {
				field && !distinctFields.includes(field) && distinctFields.push(field)
			})
		}
	})

	return distinctFields.sort()
}

export const filterItemsByTag = (items: Item[], selectedTag: string) => {
	if (selectedTag === FILTER_ALL) {
		return items
	}

	return items.filter(item => item.tags.includes(selectedTag))
}
