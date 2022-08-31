import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import './index.css';
import App from './App';
import Navigation from './components/Navigation';
import NotFound from './pages/error/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Navigation />
		<Routes>
			<Route path='/' element={<App />}></Route>
			<Route path='*' element={<NotFound />}></Route>
		</Routes>
	</BrowserRouter>
);
