import {FC} from 'react'

import {Row} from '@/shared/ui'

import {MediumBookItem} from '../../../entities/mediumBookItem'

export const DoneBooksRow: FC = () => {
	const arr: string[] = ['1', '2', '3', '4', '5', '6']

	return (
		<div className='books-row-container'>
			<div className='books-row-header'>
				<h3 className='books-row-title'>Законченные</h3>
			</div>
			<Row>
				{arr.map((_, idx) => (
					<MediumBookItem key={idx} />
				))}
			</Row>
		</div>
	)
}
