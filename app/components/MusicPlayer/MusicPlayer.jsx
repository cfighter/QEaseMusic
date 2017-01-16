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

export default MusicPlayer;