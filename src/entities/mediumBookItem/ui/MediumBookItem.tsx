import Image from 'next/image'
import Link from 'next/link'
import {FC} from 'react'

import styles from './mediumBookItem.module.css'

export const MediumBookItem: FC = () => {
	return (
		<div className={styles.item}>
			<Link
				className={styles.link}
				href='/'
			/>
			<div className={styles.image}>
				<Image
					fill
					alt=''
					src='/img.png'
				/>
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, eius eos et nam obcaecati ratione.
					</p>
				</div>
			</div>
		</div>
	)
}
