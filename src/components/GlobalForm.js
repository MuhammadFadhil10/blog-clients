import { Button, Container, FloatingLabel, Form, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './GlobalForm.module.css';
import { Link } from 'react-router-dom';

const GlobalForm = ({ type }) => {
	return (
		<>
			<Container>
				<h1>{type === 'register' && 'Create account'}</h1>
				<h1>{type === 'login' && 'Login'}</h1>
				<h1>{type === 'createBlog' && 'Create blog'}</h1>

				<Form className={`${Style.form} d-flex flex-column align-items-start`}>
					{type === 'register' ||
						(type === 'login' && (
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
							</>
						))}
					{type === 'register' && (
						<>
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
						</>
					)}

					{type === 'register' && (
						<>
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
						</>
					)}
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
					{type === 'createBlog' && (
						<>
							<Form.Group className={`${Style.formGroup} `}>
								<Form.Label>Title</Form.Label>
								<Form.Control
									className={`${Style.formInput} `}
									type='text'
									autoComplete='off'
									placeholder='How to center a div'
								></Form.Control>
							</Form.Group>
							<Form.Group className={`${Style.formGroup}`}>
								<Form.Label>Thumbnail</Form.Label>
								<div className={` d-flex flex-column`}>
									<Image
										src=''
										alt='thumbnail-preview'
										className={`${Style.thumbnail}`}
									></Image>
									<Form.Control
										className={`${Style.formFile} `}
										type='file'
										placeholder='How to center a div'
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
									autoComplete='off'
									placeholder='Sports, Health, etc...'
								></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>Save to folder</Form.Label>
								<Form.Select size='sm'>
									<option value='none'>None</option>
									<option value='1'>One</option>
									<option value='2'>Two</option>
									<option value='3'>Three</option>
								</Form.Select>
							</Form.Group>
							<Form.Group>
								<Form.Check type='checkbox' label='Upload as Anonymous' />
							</Form.Group>

							<Button type='button' variant='dark'>
								Upload
							</Button>
						</>
					)}

					{type === 'register' && (
						<p>
							Already have account? <Link to='/login'>Login</Link>
						</p>
					)}
					{type === 'login' && (
						<p>
							have no account? <Link to='/register'>Register</Link>
						</p>
					)}
				</Form>
			</Container>
		</>
	);
};

export default GlobalForm;
