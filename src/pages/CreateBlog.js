import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalForm from '../components/GlobalForm';

const CreateBlog = () => {
	return (
		<>
			<Container>
				<GlobalForm type='createBlog' />
			</Container>
		</>
	);
};

export default CreateBlog;
