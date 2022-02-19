import React, { useState } from 'react';

export const ThemeContext = React.createContext({
	isDark: false,
	setThemeHandler: () => {},
});

const ThemeProvider = props => {
	const [isDark, setTheme] = useState(false);

	const setThemeHandler = () => {
		setTheme(prevState => !prevState);
	};

	const value = { isDark, setThemeHandler };

	return (
		<ThemeContext.Provider value={value}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
