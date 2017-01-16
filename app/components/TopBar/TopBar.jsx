import React from 'react';
import './TopBar.scss'

class TopBar extends React.Component{
	render(){
		return(
			<div className="topbar">
				<div className="topbar-item"><span className="icon am-icon-navicon"></span></div>
				<div className="topbar-item"><span></span></div>
				<div className="topbar-item"><span className="icon am-icon-lastfm"></span></div>
				<div className="topbar-item"><span className="icon am-icon-music"></span></div>
				<div className="topbar-item"><span></span></div>
				<div className="topbar-item"><span className="icon am-icon-search"></span></div>				
			</div>
		)
	}
}
export default TopBar;