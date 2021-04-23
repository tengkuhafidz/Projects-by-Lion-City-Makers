import axios from 'axios'
import { SheetsDimension, SHEET_ID, SHEET_KEY } from '../utils/constants'

export const fetchSheetsData = async (
	tabName: string,
	cellRange: string,
	majorDimension: SheetsDimension,
) => {
	return await axios.get(
		`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${tabName}!${cellRange}?majorDimension=${majorDimension}&key=${SHEET_KEY}`,
	)
}