import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Style from './Profile.module.css';

const Profile = () => {
	return (
		<>
			<Container
				className={`${Style.container} d-flex flex-column align-items-center`}
			>
				<Image className={`${Style.profilePicture}`}></Image>
				<h5>userName</h5>
				<h2>Name</h2>
				<p className={`text-dark`}>
					{' '}
					bio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
					vitae?
				</p>
				<p>
					<Link to='/profile'>https://lalala.com</Link>
				</p>
			</Container>
		</>
	);
};

export default Profile;
