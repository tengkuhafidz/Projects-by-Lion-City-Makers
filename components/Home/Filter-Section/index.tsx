import {Dispatch, SetStateAction} from 'react'
import {getDistinctTags} from '../../../utils/filter'
import {Item} from '../../../data/items'
import FilterOptions from './filter-options'

interface Props {
	items: Item[]
	selectedTag: string
	setSelectedTag: Dispatch<SetStateAction<string>>
}

export default function FilterSection({
	items,
	selectedTag,
	setSelectedTag,
}: Props) {
	const distinctTags = getDistinctTags(items)

	return (
		<div className="py-8">
			<FilterOptions
				options={distinctTags}
				selectedFilter={selectedTag}
				setSelectedFilter={setSelectedTag}
			/>
		</div>
	)
}
