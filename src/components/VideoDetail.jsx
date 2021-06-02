import React from 'react';

export const VideoDetail = ({ video }) => {
	if (!video)
		return (
			<>
				<h1>L0AD!NG</h1>
			</>
		);

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<>
			<div className='ui embed'>
				<iframe src={videoSrc} frameBorder='0' title='videoPlayer' />
			</div>
			<div className='ui segment'>
				<h4 className='ui header'>{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</>
	);
};
