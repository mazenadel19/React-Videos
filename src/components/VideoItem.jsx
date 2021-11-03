import React from 'react'
import './VideoItem.css'

export default function VideoItem({ video, onVideoSelect }) {
	return (
		<div className='item video-item' onClick={() => onVideoSelect(video)}>
			<img
				className='ui image'
				id='image'
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			<div className='content'>
				<div className='header'>{video.snippet.title}</div>
			</div>
		</div>
	)
}
