import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

const useFetch = (method, endpoint, data, trigger) => {
	const [fetchResult, setFetchResult] = useState(null);
	const mount = useRef();
	useEffect(() => {
		if (method === 'post') {
			if (mount.current) {
				axios
					.post(`${process.env.REACT_APP_API_ENDPOINT}${endpoint}`, data)
					.then((result) => {
						setFetchResult(result);
					})
					.catch((err) => {
						setFetchResult(err);
					});
			} else {
				mount.current = true;
			}
		} else if (method === 'get') {
			axios
				.get(`${process.env.REACT_APP_API_ENDPOINT}${endpoint}`)
				.then((result) => {
					setFetchResult(result);
				})
				.catch((err) => {
					setFetchResult(err);
				});
		} else if (method === 'patch') {
			axios
				.patch(`${process.env.REACT_APP_API_ENDPOINT}${endpoint}`, data)
				.then((result) => {
					setFetchResult(result);
				})
				.catch((err) => {
					setFetchResult(err);
				});
		} else if (method === 'delete') {
			axios
				.delete(`${process.env.REACT_APP_API_ENDPOINT}${endpoint}`)
				.then((result) => {
					setFetchResult(result);
				})
				.catch((err) => {
					setFetchResult(err);
				});
		}
	}, [trigger ? trigger : '']);
	return fetchResult;
};

export default useFetch;
