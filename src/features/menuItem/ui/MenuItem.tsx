'use client'

import clsx from 'clsx'
import {icons} from 'lucide-react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {FC} from 'react'

import {LinkType} from '@/shared/types'
import {Icon} from '@/shared/ui'

import styles from './menuItem.module.css'

export const MenuItem: FC<LinkType> = ({href, icon, name}) => {
	const pathName = usePathname()

	return (
		<Link
			className={clsx(styles.menuItem, {[styles.active]: pathName === href})}
			href={href}
		>
			<Icon name={icon} />
			<span className={styles.title}>{name}</span>
		</Link>
	)
}
