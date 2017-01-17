import React from 'react';
import MusicItem from '../components/MusicItem/MusicItem.jsx';
import axios from 'axios';
import qs from 'qs';
class MusicPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: []
        }
    }
    componentDidMount() {
        const url = '/eapi/playlist/category/list';
        const data = {
            "params": "1BEF31B5181E2C1211EC410B3FD6002BC576DACC377A1DBEFD8E78663F667549EAD62A571F2CFD93D3AF2B490671F68B5FCD74EA5B2035FFDBC118C3B53C4AE3B819C1C4F572F1AB67EC9B4FCA78D4A9C9714FF121EF6B55519154656FB2A4C3191A775A0547112B63283E72116D78D7A900A46A3C76486A2B638A780DB3F4B196D195408EFD19134F161EE6760B5700E2DBB55B9F42741C0C26FE4F82739ADF05C2FEF1E0ACE38FE26DC3682621015B0DA5A7AA9FC84BE3A0EE922EDEE22BE46E886815B4E328845E1E1F778195E0B678106B275B8E2D9BED2C585DB75FC31B1613FF6AE7B2A313E985B01B3E5F52E36330E2ACF72437B7E4E2DB262B450036D9923D295FB229D157A0CD312242B81AF401F7D094BE532F44F11D53DE185F0CF5ACE726FDB8E7EE07F9A33CEA2635E5EEA6066378F92AB424D823344C2FAFB37AB40186C37633D646E41DA43FC390578F1CDEC76CA5CAAA4E1F34A1E33AB5D9A81FE04B26B0C0A5C9AEA7524D704B5C5717B998F31E3BA7329331D46FDB6AC1CD2A58E9A0D175B86592E39101EC414B5FC0CD18CC286EC752B1D073A91C5E9B398AD1663B391301412DBD3E47965249E074FD2078C6FBB590775A7D187EF98297B7285E3CE9B536A5FEFFFC903D7220"
        }
        axios.post(url, qs.stringify(data))
            .then(res => {
                console.log(res)
                this.setState({
                    playlists: res.data.playlists
                });
            });
    }
    render() {
        const musicItems = this.state.playlists.map((item, index) => (
            <MusicItem
            key={index} 
            face={item.coverImgUrl} 
            name={item.name} 
            playtimes={item.playCount} 
           />
        ));

        return (
            <div className="music-list-board">  
             { musicItems}               
            </div>
        );

    }
}
export default MusicPage;
