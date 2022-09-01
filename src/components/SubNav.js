import { Navbar, Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgHome, CgSearch, CgAdd, CgFolder, CgProfile } from 'react-icons/cg';

import Style from './SubNav.module.css';

const SubNav = () => {
	return (
		<>
			<Navbar variant='dark' bg='dark' className={`${Style.navbar}`}>
				<Container
					className={`${Style.subnavContainer} d-flex justify-content-between`}
				>
					<CgHome color='white' size={30} />
					<CgSearch color='white' size={30} />
					<CgAdd color='white' size={30} />
					<CgFolder color='white' size={30} />
					<CgProfile color='white' size={30} />
				</Container>
			</Navbar>
		</>
	);
};

export default SubNav;
