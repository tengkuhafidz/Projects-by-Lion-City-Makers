import {useContext} from 'react'
import { FILTER_ALL } from '../../../utils/constants'
import PageDataContext from '../../../utils/PageDataContext'

interface Props {
	searchTerm: string
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>
	setSelectedTag: React.Dispatch<React.SetStateAction<string>>

}

export default function Searchbar({searchTerm, setSearchTerm, setSelectedTag}: Props) {
	const {searchbarPlaceholder} = useContext(PageDataContext)

	const setSearchTermAndResetTagFitler = (searchTerm: string) => {
		setSearchTerm(searchTerm)
		setSelectedTag(FILTER_ALL)
	}

	const renderClearButton = () => {
		if (!searchTerm) {
			return null
		}

		return (
			<button
				className="absolute -ml-6 mt-2 text-gray-300 hover:text-gray-500"
				onClick={() => setSearchTerm('')}
			>
				x
			</button>
		)
	}

	return (
		<div className="relative">
			<input
				type="text"
				className="text-center shadow font-light py-2 px-4 w-full text-gray-500 rounded-xl border border-gray-200 outline-none focus:shadow-lg dark:border-gray-900 dark:bg-gray-900 dark:text-gray-300"
				placeholder={searchbarPlaceholder}
				value={searchTerm}
				onChange={e => setSearchTermAndResetTagFitler(e.target.value)}
			/>
			{renderClearButton()}
		</div>
	)
}
