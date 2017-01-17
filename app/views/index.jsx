import React from 'react';
import TopBar from '../components/TopBar/TopBar.jsx';
import TabBar from '../components/TabBar/TabBar.jsx';
import MusicItem from '../components/MusicItem/MusicItem.jsx';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer.jsx';
import TopList from '../components/TopList/TopList.jsx';
import './index.scss'
import axios from 'axios';
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            music: '',
            play: false,
            data: []
        }

    }
    componentDidMount() {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        axios.get('/api/playlist/detail?id=37880978&updateTime=-1')
            .then(res => {
                this.setState({
                    data: res.data.result.tracks
                });
            });
        /* axios.get('/eapi/playlist/v4/detail?cache_key=A2o%2BlvkEda2wn30sSajnXY9k0Wwi1Kpd1%2BG6PDTFRfM%3D')
             .then(res => {
               
             });*/
    }
    handlePlay(url, img, name) {
        console.log("music");
        this.setState({
            name: name,
            url: url,
            play: true,
            img: img
        })

    }
    handleGoBack() {
        this.setState({
            play: false
        })
    }
    render() {
        const items = [{
            title: "歌单"

        }, {
            title: "主播电台"
        }, {
            title: "排行榜"
        }];
        const musicItem = this.state.data.map((track, index) => (
            <MusicItem
            key={index} 
            face={track.album.picUrl} 
            name={track.name} 
            playtimes={track.popularity} 
            onPlay={this.handlePlay.bind(this,track.mp3Url,track.album.picUrl,track.name)}/>
        ));

        if (this.state.play) {
            return (
                <MusicPlayer src={this.state.url} img={this.state.img} name={this.state.name} goBack={this.handleGoBack.bind(this)}/>
            );
        } else {
            return (
                <div className="music-list-board">
                    <div className="top-menu">
                        <TopBar/>               
                        <TabBar items={items}/>
                    </div>
                    {musicItem}
                </div>
            );

        }
    }
}
export default Index;
