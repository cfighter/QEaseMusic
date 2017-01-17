import React from 'react';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer.jsx';

class MusicPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
              
    }    
    render() {
        return (
            <MusicPlayer/>
        );

    }
}
export default MusicPage;
