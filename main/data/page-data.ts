import {fetchSheetsData} from '../../services/sheet'
import {SheetsDimension} from '../../utils/constants'
import {stringToBoolean} from '../../utils/transform'

export interface PageData {
	// THEME
	darkMode: boolean
	// GENERAL
	searchbarPlaceholder: string
	listingButtonText: string
}

export const getPageData = async () => {
	const {data} = await fetchSheetsData('site', 'B1:B5', SheetsDimension.COLUMNS)
	return transformPageData(data.values[0])
}

// =============================================================================
// TRANSFORMER
// =============================================================================

export const transformPageData = (pageDataValue: any[]): PageData => ({
	// THEME
	darkMode: stringToBoolean(pageDataValue[1]),
	// GENERAL
	searchbarPlaceholder: pageDataValue[3],
	listingButtonText: pageDataValue[4],
})
