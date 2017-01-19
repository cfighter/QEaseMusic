import React from 'react';
import './TopBar.scss'
import { Link } from 'react-router';
class TopBar extends React.Component{
	render(){
		return(
			<div className="topbar">
				<div className="topbar-item" onClick={this.props.handleClick}><span className="icon am-icon-navicon"></span></div>
				<div className="topbar-item"><span></span></div>
				<div className="topbar-item"><Link to='/main'><span className="icon am-icon-lastfm"></span></Link></div>
				<div className="topbar-item"><Link to='/mylist'><span className="icon am-icon-music"></span></Link></div>
				<div className="topbar-item"><span></span></div>
				<div className="topbar-item"><span className="icon am-icon-search"></span></div>				
			</div>
		)
	}
}
export default TopBar;