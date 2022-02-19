import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './store/theme-Context';

import './index.scss';
import App from './App';

ReactDOM.render(
	<ThemeProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThemeProvider>,
	document.getElementById('root')
);
