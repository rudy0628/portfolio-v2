import { Fragment, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from './store/theme-Context';

import DayNightBtn from './components/UI/dayNightBtn/DayNightBtn';
import MainHeader from './components/layout/MainHeader';
import IntroducePage from './page/Introduce';
import ProjectPage from './page/Project';
import ContactPage from './page/Contact';

const App = () => {
	const themeCtx = useContext(ThemeContext);
	if (themeCtx.isDark) {
		document.querySelector('body').style.background = '#333';
	} else {
		document.querySelector('body').style.background = '#fff';
	}

	return (
		<Fragment>
			<MainHeader />
			<DayNightBtn />
			<Routes>
				<Route path="/" element={<IntroducePage />} />
				<Route path="/project" element={<ProjectPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
		</Fragment>
	);
};

export default App;
