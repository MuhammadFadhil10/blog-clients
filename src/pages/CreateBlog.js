import { Container, Form, Image, FloatingLabel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useRef } from 'react';
import Style from './CreateBlog.module.css';
import useFetch from '../hooks/useFetch';

const CreateBlog = () => {
	const mount = useRef();

	const [titleValue, setTitleValue] = useState('');
	const [thumbnailValue, setThumbnailValue] = useState('');
	const [thumbnailPreview, setThumbnailPreview] = useState('');
	const [contentValue, setContentValue] = useState('');
	const [tagValue, setTagValue] = useState('');
	const [tagArray, setTagArray] = useState([]);
	const [saveToFolder, setSaveToFolder] = useState(false);
	const [isAnonymous, setIsAnonymous] = useState(false);

	const [createBlogTrigger, setCreateBlogTrigger] = useState(false);

	const createBlogResult = useFetch(
		'post',
		'/api/create-blog',
		{
			title: titleValue,
			thumbnail: thumbnailValue,
			content: contentValue,
			isAnonymous: isAnonymous,
			tag: tagArray,
			userId: '630b6efaf81c3d7a250fe6a7',
		},
		createBlogTrigger
	);

	const createBlogHandler = () => {
		createBlogTrigger
			? setCreateBlogTrigger(false)
			: setCreateBlogTrigger(true);
	};
	const TagVisualize = ({ tag }) => {
		return (
			<Container className={`${Style.tagVisualizeContainer} d-flex flex-wrap`}>
				{tag.map((t) => {
					return (
						<div className={`${Style.tagVisualize}`}>
							<p>{t}</p>
						</div>
					);
				})}
			</Container>
		);
	};
	return (
		<>
			<Container>
				<Form className={`${Style.form} d-flex flex-column align-items-start`}>
					<Form.Group className={`${Style.formGroup} `}>
						<Form.Label>Title</Form.Label>
						<Form.Control
							className={`${Style.formInput} `}
							type='text'
							value={titleValue}
							onChange={(e) => {
								setTitleValue((prev) => e.target.value);
							}}
							autoComplete='off'
							placeholder='How to center a div'
						></Form.Control>
					</Form.Group>
					<Form.Group className={`${Style.formGroup}`}>
						<Form.Label>Thumbnail</Form.Label>
						<div className={` d-flex flex-column`}>
							<Image
								src={thumbnailPreview}
								alt='thumbnail-preview'
								className={`${Style.thumbnail}`}
							></Image>
							<Form.Control
								className={`${Style.formFile} `}
								type='file'
								name='image'
								placeholder='How to center a div'
								onChange={(e) => {
									setThumbnailValue(e.target.files[0]);
									setThumbnailPreview(URL.createObjectURL(e.target.files[0]));
								}}
							></Form.Control>
						</div>
						<Form.Group>
							<FloatingLabel
								controlId='floatingTextarea'
								label='Content'
								className='mb-3'
							>
								<Form.Control
									className={`${Style.textArea} `}
									as='textarea'
									name='content'
									value={contentValue}
									onChange={(e) => {
										setContentValue(e.target.value);
									}}
									autoComplete='off'
									placeholder='How to center a div'
								></Form.Control>
							</FloatingLabel>
						</Form.Group>
					</Form.Group>
					<Form.Group className={`${Style.formGroup} `}>
						<Form.Label>Tag</Form.Label>
						<Form.Control
							className={`${Style.formInput} `}
							type='text'
							name='tag'
							value={tagValue}
							onChange={(e) => {
								setTagValue(e.target.value === ',' ? '' : e.target.value);
							}}
							onKeyDown={(e) => {
								if (e.key === ',') {
									setTagArray((prev) => [tagValue, ...prev]);
									setTagValue('');
								}
							}}
							autoComplete='off'
							placeholder='Sports, Health, etc...'
						></Form.Control>
						{tagArray.length > 0 && <TagVisualize tag={tagArray} />}
					</Form.Group>
					<Form.Group>
						<Form.Label>Save to folder</Form.Label>
						<Form.Select
							size='sm'
							onChange={(e) => {
								setSaveToFolder(e.target.value);
							}}
						>
							<option value='none'>None</option>
							<option value='satu'>One</option>
							<option value='dua'>Two</option>
							<option value='tiga'>Three</option>
						</Form.Select>
					</Form.Group>
					<Form.Group>
						<Form.Check
							type='checkbox'
							label='Upload as Anonymous'
							value={isAnonymous}
							onChange={(e) => {
								setIsAnonymous(e.target.checked);
							}}
						/>
					</Form.Group>

					<Button
						type='button'
						variant='dark'
						onClick={() =>
							createBlogHandler(
								titleValue,
								thumbnailValue,
								contentValue,
								tagValue,
								saveToFolder,
								isAnonymous
							)
						}
					>
						Upload
					</Button>
				</Form>
			</Container>
		</>
	);
};

export default CreateBlog;
