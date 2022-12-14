import { Navbar, Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgHome, CgSearch, CgAdd, CgFolder, CgProfile } from 'react-icons/cg';

import Style from './SubNav.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const SubNav = () => {
	const [activePage, setActivePage] = useState('/');
	const navigate = useNavigate();

	return (
		<>
			<Navbar
				variant='dark'
				bg='dark'
				className={`${Style.navbar} d-flex align-items-start `}
			>
				{/* <NavPointer /> */}
				<Container
					className={`${Style.subnavContainer} d-flex justify-content-center `}
				>
					<span
						className={`${Style.iconContainer}`}
						style={{ borderTop: activePage === '/' && '3px solid #9b9bee' }}
						onClick={(e) => {
							setActivePage('/');
							navigate('/');
						}}
					>
						<CgHome color='white' size={35} />
					</span>
					<span
						className={`${Style.iconContainer}`}
						style={{
							borderTop: activePage === '/search' && '3px solid #9b9bee',
						}}
						onClick={(e) => {
							setActivePage('/search');
							navigate('/search');
						}}
					>
						<CgSearch color='white' size={35} />
					</span>
					<span
						className={`${Style.iconContainer}`}
						style={{
							borderTop: activePage === '/create-blog' && '3px solid #9b9bee',
						}}
						onClick={(e) => {
							setActivePage('/create-blog');
							navigate('/create-blog');
						}}
					>
						<CgAdd color='white' size={35} />
					</span>
					<span
						className={`${Style.iconContainer}`}
						style={{
							borderTop: activePage === '/folders' && '3px solid #9b9bee',
						}}
						onClick={(e) => {
							setActivePage('/folders');
							navigate('/folders');
						}}
					>
						<CgFolder color='white' size={35} />
					</span>
					<span
						className={`${Style.iconContainer}`}
						style={{
							borderTop: activePage === '/profile' && '3px solid #9b9bee',
						}}
						onClick={(e) => {
							setActivePage('/profile');
							navigate('/profile');
						}}
					>
						<CgProfile color='white' size={35} />
					</span>
				</Container>
			</Navbar>
		</>
	);
};

export default SubNav;
