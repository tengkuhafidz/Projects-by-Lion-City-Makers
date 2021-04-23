import {FILTER_ALL} from '../../../utils/constants'

interface Props {
	options: string[]
	selectedFilter: string
	setSelectedFilter: React.Dispatch<React.SetStateAction<string>>
}

export default function FilterOptions({
	options,
	selectedFilter,
	setSelectedFilter,
}: Props) {
	const renderOptions = () => {
		const allOptions = [FILTER_ALL, ...options]
		return allOptions.map(option => (
			<span
				onClick={() => setSelectedFilter(option)}
				className={`py-1 px-4 inline-block text-sm m-1 cursor-pointer rounded-lg font-bold ${
					option === selectedFilter
						? 'bg-red-600 hover:bg-red-700 text-white'
						: 'hover:bg-red-500 dark:text-white text-gray-700 hover:text-white'
				}`}
			>
				{option}
			</span>
		))
	}

	return <div className="py-1">{renderOptions()}</div>
}
