import React, { useEffect, useState } from 'react'
import Searchbar from './components/Searchbar'
import { VideoDetail } from './components/VideoDetail'
import VideoList from './components/VideoList'
import youtube from './apis/youtube'

// 	state = {
// 		videos: [],
// 		selectedVideo: null,
// 	};

// 	componentDidMount(){
// 		this.onTermSubmit('Reactjs')
// 	}

// 	onTermSubmit = async term => {
// 		console.log(term);
// 		const res = await youtube.get('/search', {
// 			params: {
// 				q: term,
// 			},
// 		});
// 		console.log(res.data.items);
// 		this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
// 	};

// 	onVideoSelect = video => {
// 		this.setState({ selectedVideo: video });
// 	};

const App = () => {
	const [videoState, setVideoState] = useState({
		videos: [],
		selectedVideo: null,
	})

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
		console.log(res.data.items)
		setVideoState({ videos: res.data.items, selectedVideo: res.data.items[0] })
	}

	const onVideoSelect = video => {
		setVideoState({ videos: videoState.videos, selectedVideo: video })
	}
	return (
		<div className='ui container'>
			<Searchbar onFormSubmit={onTermSubmit} />
			<div className='ui grid'>
				<div className='ui row'>
					<div className='eleven wide column'>
						<VideoDetail video={videoState.selectedVideo} />
					</div>

					<div className='five wide column'>
						<VideoList
							videos={videoState.videos}
							onVideoSelect={onVideoSelect}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
