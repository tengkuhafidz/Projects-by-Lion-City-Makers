import {Item} from '../../data/items'
import SingleItem from './single-item'

interface Props {
	items: Item[]
}

export default function ItemsList({items}: Props) {
	if (items.length < 1) {
		return (
			<p className="font-bold text-center mt-16 text-4xl text-red-400">
				No Results
			</p>
		)
	}

	const renderItems = () => {
		return items.map(item => <SingleItem item={item} key={item.id} />)
	}

	return <div className="py-16 grid gap-6">{renderItems()}</div>
}
