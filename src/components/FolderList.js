import { Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Style from './FolderList.module.css';

const FolderList = () => {
	return (
		<>
			<Form>
				<Form.Group
					className={`${Style.sortInput} d-flex justify-content-between`}
				>
					<Form.Label>Sort:</Form.Label>
					<Form.Select size='sm'>
						<option value='none'>None</option>
						<option value='oldest'>Oldest</option>
						<option value='newer'>newer</option>
					</Form.Select>
				</Form.Group>
			</Form>
			<Container
				className={`${Style.container} d-flex flex-wrap justify-content-between`}
			>
				<div className={`d-flex flex-column`}>
					<div className={`${Style.folder} bg-dark`}></div>
					<h3>folder one</h3>
				</div>
				<div className={`d-flex flex-column`}>
					<div className={`${Style.folder} bg-dark`}></div>
					<h3>folder one</h3>
				</div>
				<div className={`d-flex flex-column`}>
					<div className={`${Style.folder} bg-dark`}></div>
					<h3>folder one</h3>
				</div>
				<div className={`d-flex flex-column`}>
					<div className={`${Style.folder} bg-dark`}></div>
					<h3>folder one</h3>
				</div>
			</Container>
		</>
	);
};

export default FolderList;
