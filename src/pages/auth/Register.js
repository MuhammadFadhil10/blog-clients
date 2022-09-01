import { Button, Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './Register.module.css';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<>
			<Container>
				<h1>Create account</h1>
				<Form className={`${Style.form} d-flex flex-column align-items-start`}>
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
						<Form.Control type='text' autoComplete='off'></Form.Control>
					</Form.Group>
					<Form.Group className={`${Style.formGroup} `}>
						<Form.Label>Name</Form.Label>
						<Form.Control type='text' autoComplete='off'></Form.Control>
					</Form.Group>
					<Form.Group className={`${Style.formGroup} `}>
						<Form.Label>Password</Form.Label>
						<Form.Control type='password' autoComplete='off'></Form.Control>
					</Form.Group>
					<Form.Group className={`${Style.formGroup} `}>
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control type='password' autoComplete='off'></Form.Control>
					</Form.Group>
					<Button type='button' variant='dark'>
						Register
					</Button>
					<p>
						Already have account? <Link to='/login'>Login</Link>
					</p>
				</Form>
			</Container>
		</>
	);
};

export default Register;
