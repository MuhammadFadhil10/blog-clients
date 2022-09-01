import { Button, Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './GlobalForm.module.css';
import { Link } from 'react-router-dom';

const GlobalForm = ({ type }) => {
	return (
		<>
			<Container>
				<h1>{type === 'register' && 'Create account'}</h1>
				<h1>{type === 'login' && 'Login'}</h1>

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
