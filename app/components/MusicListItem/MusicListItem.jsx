import React from 'react';
import { Link } from 'react-router';
import './MusicListItem.scss'
const MusicListItem=(props)=>(
	<div className="music-list-item">	
		<Link to={props.to}>
			<span className={'icon am-icon-'+props.icon}></span>
			<span className="title">{props.title}</span>	
		</Link>			
	</div>

)

export default MusicListItem;