import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
	const navigate = useNavigate();
	return (
		<>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand href='#home' onClick={() => navigate('/')}>
						<img
							alt=''
							src=''
							width='30'
							height='30'
							className='d-inline-block align-top'
						/>{' '}
						Read My Blog
					</Navbar.Brand>
				</Container>
				<Container className='d-flex justify-content-evenly'>
					<Link to='/login'>Login</Link>
					<Link to='/register'>Register</Link>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
