import React, {useState} from 'react'
import {FILTER_ALL} from '../../../utils/constants'
import {filterItemsByTag} from '../../../utils/filter'
import {getFuseSearchResult} from '../../../utils/search'
import {Item} from '../../data/items'
import FilterSection from '../Filter-Section'
import ItemsList from './items-list'
import Searchbar from './searchbar'

interface Props {
	items: Item[]
}

export default function Home({items}: Props) {
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedTag, setSelectedTag] = useState(FILTER_ALL)

	const searchResults: Item[] = searchTerm
		? getFuseSearchResult(items, searchTerm, ['name', 'projectName'])
		: items

	const filteredItems = filterItemsByTag(searchResults, selectedTag)

	return (
		<div className="py-2">
			<div className="text-center max-w-xl mx-auto py-2">
				<FilterSection
					items={items}
					selectedTag={selectedTag}
					setSelectedTag={setSelectedTag}
				/>
				<Searchbar
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					setSelectedTag={setSelectedTag}
				/>
			</div>
			<ItemsList items={filteredItems} />
		</div>
	)
}
