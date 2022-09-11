import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FolderList from '../components/FolderList';
import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const Folders = () => {
	const folders = useFetch(
		'get',
		'/api/folder/my-folders/630b6efaf81c3d7a250fe6a7',
		{},
		null
	);
	useEffect(() => {
		// if (folders) {
		console.log(folders);
		// }
	}, [folders]);
	return (
		<>
			<Container>
				<h1>Your folders</h1>
				<FolderList folders={folders && folders.data.folders}/>
			</Container>
		</>
	);
};

export default Folders;
