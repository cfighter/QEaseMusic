import React from 'react';
import './RadioItem.scss'

const RadioItem=(props)=>(
	<div className="radio-item" onClick={props.onPlay}>
		<div className="play-times"><span className="icon am-icon-headphones"></span>&nbsp;{props.playtimes}</div>
		<img src={props.face} alt=""/>
		<p className='radio-name'>{props.name}</p>
	</div>

)
export default RadioItem;