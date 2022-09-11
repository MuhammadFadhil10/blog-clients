import {
	Container,
	Button,
	Modal,
	ModalBody,
	Form,
	FloatingLabel,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FolderList from '../components/FolderList';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

const Folders = () => {
	const folders = useFetch(
		'get',
		'/api/folder/my-folders/630b6efaf81c3d7a250fe6a7',
		{},
		null
	);

	// create folder
	const [folderName, setFolderName] = useState('');
	const [createFolderTrigger, setCreateFolderTrigger] = useState(false);

	const fetchCreateFolder = useFetch(
		'post',
		'/api/folder/create/630b6efaf81c3d7a250fe6a7',
		{ folderName: folderName },
		createFolderTrigger
	);

	useEffect(() => {
		console.log(fetchCreateFolder);
	}, [fetchCreateFolder]);

	const createFolderHandler = () => {
		!createFolderTrigger
			? setCreateFolderTrigger(true)
			: setCreateFolderTrigger(false);
	};
	// Modal create folder
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Container>
				<h1>Your folders</h1>
				<FolderList folders={folders && folders.data.folders} />
				<Button variant='dark' onClick={handleShow}>
					+ New folder
				</Button>
				{/* Modal */}
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Create a Folder</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group>
								<FloatingLabel
									controlId='floatingTextarea'
									label='Folder Name'
									className='mb-3'
								>
									<Form.Control
										type='text'
										placeHolder='ss'
										onChange={(e) => setFolderName((prev) => e.target.value)}
									></Form.Control>
								</FloatingLabel>
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant='primary'
							onClick={() => {
								folderName !== '' && createFolderHandler();
								handleClose();
							}}
						>
							Save Folder
						</Button>
					</Modal.Footer>
				</Modal>
			</Container>
		</>
	);
};

export default Folders;
