import {FC, PropsWithChildren} from 'react'

import styles from './row.module.css'

export const Row: FC<PropsWithChildren> = ({children}) => {
	return <div className={styles.row}>{children}</div>
}
