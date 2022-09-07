import { Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Style from './BlogDetail.module.css';
import BlogList from '../components/BlogList';

const BlogDetail = () => {
	return (
		<Container>
			<div className={`${Style.blogHeader}`}>
				<h1>Blog title</h1>
				<h5 className='text-muted'>Author</h5>
				<h5 className='text-muted'>created time</h5>
				<Image src='' className={`${Style.blogThumbnail}`}></Image>
			</div>
			<div className={`${Style.blogBody}`}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
					expedita voluptatibus ex repudiandae, cum necessitatibus voluptatem
					velit veritatis eum magnam corporis cumque tempora itaque doloremque
					reiciendis eaque perspiciatis unde tenetur corrupti ea impedit.
					mollitia saepe velit ipsa voluptas aliquam quaerat est repudiandae,
					quidem voluptate beatae similique odio placeat voluptatibus cupiditate
					provident vero quae eaque pariatur minima id. <br></br>
					<br></br> Labore provident asperiores similique veritatis totam,
					laboriosam ex enim odit dolorum, mollitia itaque natus quisquam porro
					nulla non veniam consequatur aliquam quo error. Adipisci dignissimos
					iure enim nam unde quo a corrupti soluta veniam rem.
				</p>
			</div>
			<div className={`${Style.blogBottom}`}>
				<div className={`${Style.relatedBlogsContainer} d-flex flex-column`}>
					<h1>Related Blogs</h1>
					<BlogList type='related' />
				</div>
				<div className={`${Style.commentsContainer}`}>
					<h1>Comments</h1>
				</div>
			</div>
		</Container>
	);
};

export default BlogDetail;
