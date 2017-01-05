import React from 'react';
import './MusicNews.scss'
const MusicNews=(props)=>(
	<div className="music-news-item">
		
			<div className="icon am-icon-book"></div>
			<img src={'http://img6.bdstatic.com/img/image/smallpic/fengjing105.jpg'} alt=""/>
			<p className='news-name'>{props.name}翩迁四季‖诗与酒的民谣</p>
		
	</div>

)

export default MusicNews;