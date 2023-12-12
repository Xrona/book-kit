import {FC} from 'react'

import {menuLinks} from '@/shared/consts'

import {MenuItem} from '@/features/menuItem'

import styles from './menu.module.css'

export const Menu: FC = () => {
	return (
		<menu className={styles.menu}>
			{menuLinks.map((link) => (
				<MenuItem
					key={link.href}
					{...link}
				/>
			))}
		</menu>
	)
}
