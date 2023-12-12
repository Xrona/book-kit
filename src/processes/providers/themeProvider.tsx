'use client'

import {FC, PropsWithChildren, createContext, useState} from 'react'

type Theme = 'light' | 'dark'

type ThemeContextType = {
	value: Theme
	setValue: (value: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType>({
	value: 'light',
	setValue: () => {},
})

export const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
	const [theme, setTheme] = useState<Theme>('light')

	return (
		<ThemeContext.Provider
			value={{
				value: theme,
				setValue: setTheme,
			}}
		>
			<html>{children}</html>
		</ThemeContext.Provider>
	)
}
