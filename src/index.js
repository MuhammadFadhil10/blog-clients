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
import Search from './pages/Search';
import CreateBlog from './pages/CreateBlog';
import Folders from './pages/Folders';
import Profile from './pages/Profile';

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
			<Route path='/search' element={<Search />}></Route>
			<Route path='/create-blog' element={<CreateBlog />}></Route>
			<Route path='/folders' element={<Folders />}></Route>
			<Route path='/profile' element={<Profile />}></Route>
			<Route path='*' element={<NotFound />}></Route>
		</Routes>
	</BrowserRouter>
);
