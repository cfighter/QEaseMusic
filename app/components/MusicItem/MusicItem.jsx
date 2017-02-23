import React from 'react';
import './MusicItem.scss'
const MusicItem=(props)=>(
	<div className="music-item" onClick={props.onPlay}>
		<div className="play-times"><span className="icon am-icon-headphones"></span>&nbsp;{props.playtimes}</div>
		<img src={props.face} alt=""/>
		<p className='music-name'>{props.name}</p>
	</div>

)

MusicItem.defaultProps={
	onPlay:()=>{},
	playtimes:1000,
	face: 'http://p3.music.126.net/QLEAoyfB5Q2K1mr0otciGA==/4434330394830260.jpg?param=210y210',
	name:'听音'
}
export default MusicItem;