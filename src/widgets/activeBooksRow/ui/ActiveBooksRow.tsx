import {FC, PropsWithChildren} from 'react'

import {Row} from '@/shared/ui'

import {MediumBookItem} from '@/entities/mediumBookItem'

export const ActiveBooksRow: FC<PropsWithChildren> = ({children}) => {
	const arr: string[] = ['1', '2', '3', '4', '5', '6']

	return (
		<div className='books-row-container'>
			<div className='books-row-header'>
				<h3 className='books-row-title'>Сейчас читаю</h3>
			</div>
			<Row>
				{arr.map((_, idx) => (
					<MediumBookItem key={idx} />
				))}
			</Row>
		</div>
	)
}
