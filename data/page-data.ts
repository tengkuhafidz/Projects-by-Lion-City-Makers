import {fetchSheetsData} from '../services/sheet'
import {SheetsDimension} from '../utils/constants'
import {stringToBoolean} from '../utils/transform'

export interface PageData {
	// THEME
	darkMode: boolean
	// GENERAL
	searchbarPlaceholder: string
	listingButtonText: string
	// SEO
	seoTitle: string
	seoDescription: string
	bannerImageUrl: string
}

export const getPageData = async () => {
	const {data} = await fetchSheetsData('site', 'B1:B9', SheetsDimension.COLUMNS)
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
	// SEO
	seoTitle: pageDataValue[6],
	seoDescription: pageDataValue[7],
	bannerImageUrl: pageDataValue[8],
})
