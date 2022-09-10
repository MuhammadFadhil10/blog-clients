import { Button, Container, FloatingLabel, Form, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './GlobalForm.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const GlobalForm = ({ type }) => {
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
				</Form>
			</Container>
		</>
	);
};

export default GlobalForm;
