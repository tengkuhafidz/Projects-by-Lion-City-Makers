import {useContext} from 'react'
import PageDataContext from '../../utils/PageDataContext'
import {Item} from '../../data/items'

interface Props {
	item: Item
}

export default function SingleItem({item}: Props) {
	const {listingButtonText} = useContext(PageDataContext)
	const {
		id,
		profileImageUrl,
		name,
		role,
		projectName,
		projectDescription,
		projectUrl,
	} = item

	return (
		<div
			className={`text-center px-20 md:px-2 py-4 md:py-2 md:grid md:grid-cols-12  rounded font-light ${
				id % 2 === 1 ? 'bg-gray-100 dark:bg-gray-900' : ''
			}`}
		>
			<div className="md:col-span-2 mx-auto">
				<p className="hidden md:inline-block">🇸🇬</p>
				<img
					src={profileImageUrl}
					className="h-24 md:h-12 lg:h-16 rounded-full inline mx-4"
				/>
			</div>
			<div className="md:col-span-2 text-lg md:text-sm lg:text-lg md:flex md:items-center font-bold mt-1  md:mt-0">
				{name}
			</div>

			<div className="md:col-span-2 text-lg md:text-sm lg:text-lg md:flex md:items-center font-light mt-1 md:mt-0">
				{projectName}
			</div>
			<div className="col-span-5 flex items-center text-sm lg:text-base mt-1 md:mt-0">
				{projectDescription}
			</div>
			<div className="flex col-span-1 md:flex md:items-center">
				<a
					href={projectUrl}
					target="_blank"
					className="bg-red-600 hover:bg-red-700 text-white py-1 text-sm font-light px-8 md:px-4 lg:px-6 rounded-md mx-auto mt-4 md:mt-0"
				>
					{listingButtonText}
				</a>
			</div>
		</div>
	)
}
