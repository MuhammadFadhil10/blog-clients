import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import './index.css';
import App from './App';
import Navigation from './components/Navigation';
import NotFound from './pages/error/NotFound';

import NavBack from './components/NavBack';
import SubNav from './components/SubNav';

import Register from './pages/auth/Register';
import Login from './pages/auth/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Navigation />
		<NavBack />
		<SubNav />
		<Routes>
			<Route path='/' element={<App />}></Route>
			<Route path='/register' element={<Register />}></Route>
			<Route path='/login' element={<Login />}></Route>
			<Route path='*' element={<NotFound />}></Route>
		</Routes>
	</BrowserRouter>
);
