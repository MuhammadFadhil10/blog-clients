import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (method, endpoint, data, trigger) => {
	const [fetchResult, setFetchResult] = useState(null);
	useEffect(
		() => {
			if (method === 'post') {
				axios
					.post(`${process.env.REACT_APP_API_ENDPOINT}${endpoint}`, data)
					.then((result) => {
						setFetchResult(result);
					})
					.catch((err) => {
						setFetchResult(err);
					});
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
		},
		trigger ? [trigger] : []
	);
	return fetchResult;
};

export default useFetch;
