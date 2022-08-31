import { Card, Button, Image, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Class from './BlogList.module.css';

const BlogList = () => {
	return (
		<>
			<Container className={`${Class.container} d-flex`}>
				<Image className={`${Class.blogCover}`} src='#'></Image>
				<Image className={`${Class.blogCover}`} src='#'></Image>
				<Image className={`${Class.blogCover}`} src='#'></Image>
				<Image className={`${Class.blogCover}`} src='#'></Image>
				<Image className={`${Class.blogCover}`} src='#'></Image>
				<Image className={`${Class.blogCover}`} src='#'></Image>
				<Image className={`${Class.blogCover}`} src='#'></Image>
				<Image className={`${Class.blogCover}`} src='#'></Image>
			</Container>
		</>
	);
};

export default BlogList;
