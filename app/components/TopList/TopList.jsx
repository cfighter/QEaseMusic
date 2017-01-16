import React from 'react';
import './TopList.scss'
class TopList extends React.Component {
    render() {
        const list = this.props.list.slice(0, 3).map((item, index) => (
            <li key={index}><a href="">{index+1+". "+item} </a></li>
        ));
        return (
            <div className="toplist">
			<div className="name">
				<div className="update-time">{this.props.update}更新</div>
				<div className="list-name">{this.props.name}</div>
			</div>
			<ul className="list">
				{list}
			</ul>
			</div>
        )

    }


}
TopList.defaultProps={
	 list: ['遇见', '暖暖', '习惯'],
     name: '排行榜',
     update:'周四'
}
export default TopList;
