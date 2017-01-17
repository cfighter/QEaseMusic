import React from 'react';
import TabBar from '../components/TabBar/TabBar.jsx';
class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
         const items = [{
            title: "歌单"
        }, {
            title: "主播电台"
        }, {
            title: "排行榜"
        }];
        return (
            <div className="main-page">
                <TabBar items={items}/> 
                {this.props.children}
            </div>            
        );

    }
}
export default MainPage;