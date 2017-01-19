import React from 'react';
import './MusicPlayer.scss'

class MusicPlayer extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			play:false
		}
	}
	handlePlay(){		
		this.setState({
			play:true
		})
	}
	handlePause(){		
		this.setState({
			play:false
		})
	}
	handleBack(){
		this.props.goBack();
	}
	handleShare(){

	}
	render(){
		return(
			<div className={this.state.play?"music-player play":"music-player"}>
				<div className="music-title">
					<span className="back icon am-icon-arrow-left" onClick={this.handleBack.bind(this)}></span>
					<span className="name">{this.props.name}</span>
					<span className="share icon am-icon-share-alt" onClick={this.handleShare.bind(this)}></span>
				</div>
				<div className="music-face">
					<img src={this.props.img} alt=""/>
				</div>
				<audio id="player" src={this.props.src} preload="metadata" controls onPlay={this.handlePlay.bind(this)} onPause={this.handlePause.bind(this)}></audio>
			</div>
		)
	}
}
MusicPlayer.defaultProps={	 
     name: '에코',
     img:'http://p3.music.126.net/QLEAoyfB5Q2K1mr0otciGA==/4434330394830260.jpg?param=210y210',
     src:'http://m9.music.126.net/20170118174042/355f61ab5c6ecfb0baf66440e548de50/ymusic/8243/1bc3/7d0f/3f0ac3c382caf383d86f6688176a356b.mp3'
 }
export default MusicPlayer;