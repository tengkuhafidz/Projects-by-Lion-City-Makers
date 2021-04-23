import {fetchSheetsData} from '../services/sheet'
import {SheetsDimension} from '../utils/constants'
import {stringToArray, stringToBoolean} from '../utils/transform'

export interface Item {
	id: number
	name: string
	role: string
	profileImageUrl: string
	projectName: string
	projectDescription: string
	projectUrl: string
	tags: string[]
	isActive: boolean
}

export const getItems = async () => {
	const {data} = await fetchSheetsData('items', 'A2:H', SheetsDimension.ROWS)
	const allItems = transformItemsData(data.values)
	return allItems.filter(item => item.isActive)
}

// =============================================================================
// TRANSFORMER
// =============================================================================

export const transformItemsData = (itemValues: any[]): Item[] => {
	return itemValues.map((itemValue, index) => ({
		id: index,
		name: itemValue[0],
		role: itemValue[1],
		profileImageUrl: itemValue[2],
		projectName: itemValue[3],
		projectDescription: itemValue[4],
		projectUrl: itemValue[5],
		tags: stringToArray(itemValue[6]),
		isActive: stringToBoolean(itemValue[7]),
	}))
}
