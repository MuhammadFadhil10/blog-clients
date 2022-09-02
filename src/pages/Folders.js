import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FolderList from '../components/FolderList';

const Folders = () => {
	return (
		<>
			<Container>
				<h1>Your folders</h1>
				<FolderList />
			</Container>
		</>
	);
};

export default Folders;
