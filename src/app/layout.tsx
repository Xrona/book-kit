import type {Metadata} from 'next'
import {Geologica} from 'next/font/google'
import {PrimeReactContext, PrimeReactProvider} from 'primereact/api'

import '@/shared/assets/global.css'
import '@/shared/assets/reset.css'

import {ThemeProvider} from '@/processes/providers'
import {Menu} from '@/widgets/menu'

const geologica = Geologica({subsets: ['latin', 'cyrillic']})

export const metadata: Metadata = {
	title: 'book-kit',
	description: 'Generated by create next app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<ThemeProvider>
			<body className={geologica.className}>
				<PrimeReactProvider>{children}</PrimeReactProvider>
				<Menu />
			</body>
		</ThemeProvider>
	)
}
