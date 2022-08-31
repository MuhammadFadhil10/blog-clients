import { Card, Button, Image, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Class from './BlogList.module.css';

const BlogList = ({ type }) => {
	return (
		<>
			{type === 'cover' && (
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
			)}
			{type === 'list' && (
				<Container
					className={`${Class.recentBlogContainer} d-flex justify-content-between`}
				>
					<Card className={`${Class.recentBlogCard}`}>
						<Card.Img variant='top' src='' />
						<Card.Body
							className={`${Class.recentBlogCardBody} d-flex flex-column`}
						>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className={`${Class.recentBlogCard}`}>
						<Card.Img variant='top' src='' />
						<Card.Body
							className={`${Class.recentBlogCardBody} d-flex flex-column`}
						>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className={`${Class.recentBlogCard}`}>
						<Card.Img variant='top' src='' />
						<Card.Body
							className={`${Class.recentBlogCardBody} d-flex flex-column`}
						>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
						</Card.Body>
					</Card>
				</Container>
			)}
		</>
	);
};

export default BlogList;
