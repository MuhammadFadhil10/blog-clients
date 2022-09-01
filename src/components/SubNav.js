import { Navbar, Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgHome, CgSearch, CgAdd, CgFolder, CgProfile } from 'react-icons/cg';

import Style from './SubNav.module.css';
import NavPointer from './SubNavPointer';

const SubNav = () => {
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
						style={{ borderTop: '3px solid #9b9bee' }}
					>
						<CgHome color='white' size={35} />
					</span>
					<span className={`${Style.iconContainer}`}>
						<CgSearch color='white' size={35} />
					</span>
					<span className={`${Style.iconContainer}`}>
						<CgAdd color='white' size={35} />
					</span>
					<span className={`${Style.iconContainer}`}>
						<CgFolder color='white' size={35} />
					</span>
					<span className={`${Style.iconContainer}`}>
						<CgProfile color='white' size={35} />
					</span>
				</Container>
			</Navbar>
		</>
	);
};

export default SubNav;
