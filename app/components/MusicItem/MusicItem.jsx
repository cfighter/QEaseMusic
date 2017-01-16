import React from 'react';
import './MusicItem.scss'

const MusicItem=(props)=>(
	<div className="music-item" onClick={props.onPlay}>
		<div className="play-times"><span className="icon am-icon-headphones"></span>&nbsp;{props.playtimes}</div>
		<img src={props.face} alt=""/>
		<p className='music-name'>{props.name}</p>
	</div>

)
export default MusicItem;