import React from 'react';
import MusicListItem from '../components/MusicListItem/MusicListItem.jsx';

class MusicListPage extends React.Component {
    render() {
        const list = [{
            title: '本地音乐',
            icon: 'folder-o'
        },{
        	title: '喜欢的音乐',
            icon: 'heart-o'
        }]
        const musiclist=list.map((item,index)=>(
        	<MusicListItem title={item.title} icon={item.icon}/>
        ))
        return (
            <div className="music-list">
				{musiclist}
			</div>
        )
    }
}
export default MusicListPage;