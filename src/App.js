import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';
import { VideoDetail } from './components/VideoDetail';

export default class App extends Component {
	state = {
		videos: [],
		selectedVideo: null,
	};

	componentDidMount(){
		this.onTermSubmit('Reactjs')
	}

	onTermSubmit = async term => {
		console.log(term);
		const res = await youtube.get('/search', {
			params: {
				q: term,
			},
		});
		console.log(res.data.items);
		this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
	};

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className='ui container'>
				<Searchbar onFormSubmit={this.onTermSubmit} />
				<div className='ui grid'>
					<div className='ui row'>
						<div className='eleven wide column'>
							<VideoDetail video={this.state.selectedVideo} />
						</div>

						<div className='five wide column'>
							<VideoList
								videos={this.state.videos}
								onVideoSelect={this.onVideoSelect}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
