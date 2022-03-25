import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Page from './components/Page';
import 'aos/dist/aos.css';
ReactDOM.render(
	<Page>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Page>,
	document.getElementById('root')
);
