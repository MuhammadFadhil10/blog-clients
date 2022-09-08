import axios from 'axios';

const useFetch = ({ method, endpoint, data }) => {
	method === 'post' &&
		axios
			.post(`${process.env.REACT_APP_API_ENDPOINT}/${endpoint}`, data)
			.then((result) => {
				console.log(result);
			});
};

export default useFetch;
