import { Button, Container, FloatingLabel, Form, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './GlobalForm.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const GlobalForm = ({ type, handler }) => {
	const [titleValue, setTitleValue] = useState('');
	const [thumbnailValue, setThumbnailValue] = useState('');
	const [thumbnailPreview, setThumbnailPreview] = useState('');
	const [contentValue, setContentValue] = useState('');
	const [tagValue, setTagValue] = useState('');
	const [saveToFolder, setSaveToFolder] = useState(false);
	const [isAnonymous, setIsAnonymous] = useState(false);

	return (
		<>
			<Container>
				<h1>{type === 'register' && 'Create account'}</h1>
				<h1>{type === 'login' && 'Login'}</h1>
				<h1>{type === 'createBlog' && 'Create blog'}</h1>

				<Form className={`${Style.form} d-flex flex-column align-items-start`}>
					{/* LOGIN */}
					{type === 'login' && (
						<>
							<Form.Group className={`${Style.formGroup} `}>
								<Form.Label>Email</Form.Label>
								<Form.Control
									className={`${Style.formInput} `}
									type='email'
									autoComplete='off'
								></Form.Control>
							</Form.Group>
							<Form.Group className={`${Style.formGroup} `}>
								<Form.Label>Password</Form.Label>
								<Form.Control
									className={`${Style.formInput} `}
									type='password'
									autoComplete='off'
								></Form.Control>
							</Form.Group>
							<Button type='button' variant='dark'>
								Login
							</Button>
							<p>
								have no account? <Link to='/register'>Register</Link>
							</p>
						</>
					)}
					{/* REGISTER */}
					{type === 'register' && (
						<>
							<Form.Group className={`${Style.formGroup} `}>
								<Form.Label>Email</Form.Label>
								<Form.Control
									className={`${Style.formInput} `}
									type='email'
									autoComplete='off'
								></Form.Control>
							</Form.Group>
							<Form.Group className={`${Style.formGroup} `}>
								<Form.Label>Username</Form.Label>
								<Form.Control
									className={`${Style.formInput} `}
									type='text'
									autoComplete='off'
								></Form.Control>
							</Form.Group>
							<Form.Group className={`${Style.formGroup} `}>
								<Form.Label>Name</Form.Label>
								<Form.Control
									className={`${Style.formInput} `}
									type='text'
									autoComplete='off'
								></Form.Control>
							</Form.Group>
							<Form.Group className={`${Style.formGroup} `}>
								<Form.Label>Password</Form.Label>
								<Form.Control
									className={`${Style.formInput} `}
									type='password'
									autoComplete='off'
								></Form.Control>
							</Form.Group>
							<Form.Group className={`${Style.formGroup} `}>
								<Form.Label>Confirm Password</Form.Label>
								<Form.Control
									className={`${Style.formInput} `}
									type='password'
									autoComplete='off'
								></Form.Control>
							</Form.Group>
							<Button type='button' variant='dark'>
								register
							</Button>
							<p>
								Already have account? <Link to='/login'>Login</Link>
							</p>
						</>
					)}
					{/* SEARCH */}
					{type === 'search' && (
						<>
							<Form.Group className={`${Style.formGroup} `}>
								{/* <Form.Label>Search</Form.Label> */}
								<Form.Control
									className={`${Style.formInput} `}
									type='text'
									autoComplete='off'
									placeholder='how to cook fish'
								></Form.Control>
							</Form.Group>
							<Button type='button' variant='dark'>
								Search
							</Button>
						</>
					)}
					{/* CREATE BLOG */}
					{type === 'createBlog' && (
						<>
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
											setThumbnailPreview(
												URL.createObjectURL(e.target.files[0])
											);
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
										setTagValue(e.target.value);
									}}
									autoComplete='off'
									placeholder='Sports, Health, etc...'
								></Form.Control>
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
									handler(
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
						</>
					)}
				</Form>
			</Container>
		</>
	);
};

export default GlobalForm;
