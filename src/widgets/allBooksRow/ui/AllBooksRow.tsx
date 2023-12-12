import {FC} from 'react'

import {Row} from '@/shared/ui'

import {MediumBookItem} from '../../../entities/mediumBookItem'

export const AllBooksRow: FC = () => {
	const arr: string[] = ['1', '2', '3', '4', '5', '6']

	return (
		<section className='books-row-container'>
			<div className='books-row-header'>
				<h3 className='books-row-title'>Все</h3>
			</div>
			<Row>
				{arr.map((_, idx) => (
					<MediumBookItem key={idx} />
				))}
			</Row>
		</section>
	)
}
