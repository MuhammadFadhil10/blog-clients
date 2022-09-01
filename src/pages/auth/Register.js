import { Button, Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './Register.module.css';
import { Link } from 'react-router-dom';

import GlobalForm from '../../components/GlobalForm';

const Register = () => {
	return (
		<>
			<GlobalForm type='register' />
		</>
	);
};

export default Register;
