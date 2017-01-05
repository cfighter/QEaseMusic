import React from 'react';
import './LeftBarItem.css';
const LeftBarItem=(props)=>(
	<div className="leftbar-item">	
		<a href={props.to}>
			<span className={'icon am-icon-'+props.icon}></span>
			<span className="title">{props.title}</span>	
		</a>			
	</div>
)

	

export default LeftBarItem;