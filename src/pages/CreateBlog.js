import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalForm from '../components/GlobalForm';

const CreateBlog = () => {
	const createBlogHandler = (
		titleValue,
		thumbnailValue,
		contentValue,
		tagValue,
		saveToFolder,
		isAnonymous
	) => {
		console.log(titleValue);
		console.log(thumbnailValue);
		console.log(contentValue);
		console.log(tagValue);
		console.log(saveToFolder);
		console.log(isAnonymous);
	};
	return (
		<>
			<Container>
				<GlobalForm type='createBlog' handler={createBlogHandler} />
			</Container>
		</>
	);
};

export default CreateBlog;
