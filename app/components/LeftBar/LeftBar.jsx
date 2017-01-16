import React from 'react';
import LeftBarItem from './LeftBarItem.jsx';
import './LeftBar.css'
import user from './user.jpeg'
class LeftBar extends React.Component{
	render(){
		return(
			<div className="leftbar">
				<div className="leftbar-header">
						<div className="user">
							<img src={user} alt="user"/><br/>
							<span className="username">用户名</span>
						</div>
						<div className="sign">						
							<i className="pencile"></i>签到
						</div>
				</div>				
				<div className="leftbar-nav">					
					<LeftBarItem to='/index' icon='envelope-o' title='我的消息'/>
					<LeftBarItem to='/index' icon='diamond' title='会员中心'/>
					<LeftBarItem to='/index' icon='shopping-cart' title='商城'/>
					<LeftBarItem to='/index' icon='bookmark' title='主题换肤'/>				
					<LeftBarItem to='/index' icon='cloud' title='我的音乐云盘'/>	
				</div>
				<div className="leftbar-bottom">
					<a href="/settings">设置</a>
					<a href="./logout">退出应用</a>
				</div>
			</div>
		)
	}
}
export default LeftBar;