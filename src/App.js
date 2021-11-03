import React, { useEffect, useState } from 'react'
import youtube from './apis/youtube'
import Searchbar from './components/Searchbar'
import { VideoDetail } from './components/VideoDetail'
import VideoList from './components/VideoList'

const App = () => {
	const [videos, setVideos] = useState([])
	const [selectedVideo, setSelectedVideo] = useState(null)

	useEffect(() => {
		onTermSubmit('Reactjs')
	}, [])

	const onTermSubmit = async term => {
		console.log(term)
		const res = await youtube.get('/search', {
			params: {
				q: term,
			},
		})
		setVideos(res.data.items)
		setSelectedVideo(res.data.items[0])
	}

	// const onVideoSelect = video => {
	// 	setSelectedVideo(video)
	// }
	/*
	notice this pattern when u get an argument and pass that same argument to a function
	...
	 instead of  making a function to update state and passing it as a parameter,
	 we can pass the setstate(setSelectedVideo) function as a parameter to component and have it update the state from the child component
	*/
	return (
		<div className='ui container'>
			<Searchbar onFormSubmit={onTermSubmit} />
			<div className='ui grid'>
				<div className='ui row'>
					<div className='eleven wide column'>
						<VideoDetail video={selectedVideo} />
					</div>

					<div className='five wide column'>
						<VideoList videos={videos} onVideoSelect={setSelectedVideo} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
