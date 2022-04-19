import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import InitialLoading from './components/UI/initialLoading/InitialLoading';
import ThemeProvider from './store/theme-Context';

import './index.scss';
const App = React.lazy(() => import('./App'));
// import App from './App';

ReactDOM.render(
	<ThemeProvider>
		<BrowserRouter>
			<Suspense fallback={<InitialLoading />}>
				<App />
			</Suspense>
		</BrowserRouter>
	</ThemeProvider>,
	document.getElementById('root')
);
