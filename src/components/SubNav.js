import { Navbar, Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './SubNav.module.css';

const SubNav = () => {
	return (
		<>
			<Navbar variant='dark' bg='dark' className={`${Style.navbar}`}>
				<Container>
					<Image src='#' className='' alt=''></Image>
					<Image src='#' className='' alt=''></Image>
					<Image src='#' className='' alt=''></Image>
					<Image src='#' className='' alt=''></Image>
					<Image src='#' className='' alt=''></Image>
				</Container>
			</Navbar>
		</>
	);
};

export default SubNav;
