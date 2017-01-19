import React from 'react';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer.jsx';

class PlayerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }    
    render() {
        return (
            <MusicPlayer/>
        );

    }
}
export default PlayerPage;
