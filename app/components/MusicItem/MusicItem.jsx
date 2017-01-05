import React from 'react';
import './MusicItem.scss'
const MusicItem=(props)=>(
	<div className="music-item">
		<p className="play-times"><span className="am-icon-headphones"></span>&nbsp;{props.playtimes}123</p>
		<img src={'http://img6.bdstatic.com/img/image/smallpic/fengjing105.jpg'} alt=""/>
		<p className='music-name'>{props.name}翩迁四季‖诗与酒的民谣</p>
	</div>

)
const MusicItem2=(props)=>(
	<div className="music-item">
		<div className="play-times">{props.playtimes}</div>
		<img src={props.face} alt=""/>
		<p>{props.name}</p>
	</div>

)
export default MusicItem;