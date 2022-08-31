import Class from './App.module.css';
import { Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import BlogList from './components/BlogList';

function App() {
	document.title = 'Read my blog!';
	return (
		<>
			<Container className='d-flex flex-column justify-content-center'>
				<div className='banner d-flex justify-content-center'>
					<Image
						src='#'
						style={{
							backgroundColor: 'salmon',
							width: '100vw',
							height: '12rem',
						}}
					></Image>
				</div>
				<main
					className={`${Class.mainContainer} d-flex flex-column align-items-start `}
				>
					<section className={`${Class.section}  `}>
						<h1>Your favourite topics</h1>
						<div className={`${Class.sectionContentContainer} `}>
							<BlogList />
						</div>
					</section>
					<section className={`${Class.section}  `}>
						<h1>Your favourite topics</h1>
						<div className={`${Class.sectionContentContainer} `}></div>
					</section>
					<section className={`${Class.section}  `}>
						<h1>Your favourite topics</h1>
						<div className={`${Class.sectionContentContainer} `}></div>
					</section>
				</main>
			</Container>
		</>
	);
}

export default App;
