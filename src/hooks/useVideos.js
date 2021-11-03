import { useEffect, useState } from 'react'
import youtube from '../apis/youtube'

const useVideos = defaultSearchTerm => {
	const [videos, setVideos] = useState([])

	const search = async term => {
		console.log(term)
		const res = await youtube.get('/search', {
			params: {
				q: term,
			},
		})
		console.log(res)
		setVideos(res.data.items)
	}

	useEffect(() => {
		search(defaultSearchTerm)
	}, [defaultSearchTerm])

	return [videos, search]
	// return { videos, onTermSubmit } // both are ok
}

export default useVideos

/*
      any time you have a data fetching code, it's a great opporunnity to create a custom hook
 */
