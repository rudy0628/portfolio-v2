import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainHeader from './components/layout/MainHeader';
import IntroducePage from './page/Introduce';
import ProjectPage from './page/Project';
import ContactPage from './page/Contact';

const App = () => {
	return (
		<Fragment>
			<MainHeader />
			<Routes>
				<Route path="/" element={<IntroducePage />} />
				<Route path="/project" element={<ProjectPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
		</Fragment>
	);
};

export default App;
