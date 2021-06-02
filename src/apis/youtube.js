import axios from 'axios';

const KEY = 'AIzaSyDKrUM3Wgty8PXgBgDtw1NDZcQRsv8vpl4';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		type: 'video', //search for videos not playlist 
		key: KEY,
	},
});
