import React, { useEffect, useState } from 'react'
import Searchbar from './components/Searchbar'
import { VideoDetail } from './components/VideoDetail'
import VideoList from './components/VideoList'
import useVideos from './hooks/useVideos'

const defaultTerm = 'React JS'

const App = () => {
	const [videos, search] = useVideos(defaultTerm)
	const [selectedVideo, setSelectedVideo] = useState(null)

	useEffect(() => {
		setSelectedVideo(videos[0])
	}, [videos])

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
			<Searchbar defaultTerm={defaultTerm} onFormSubmit={search} />
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
