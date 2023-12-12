import {LucideProps, icons} from 'lucide-react'
import {FC} from 'react'

import {IconNameType} from '@/shared/types'

type Props = LucideProps & {
	name: IconNameType
}

export const Icon: FC<Props> = ({name, ...props}) => {
	const LucideIcon = icons[name]

	return <LucideIcon {...props} />
}
