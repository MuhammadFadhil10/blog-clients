import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Style from './FolderList.module.css';

const FolderList = () => {
	return (
		<>
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
