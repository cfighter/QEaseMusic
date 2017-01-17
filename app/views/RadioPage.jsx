import React from 'react';
import MusicItem from '../components/MusicItem/MusicItem.jsx';

import axios from 'axios';
import qs from 'qs';
class RadioPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radiolists: []
        }
    }
    componentDidMount() {
        const url='/eapi/djradio/hot/v1';
        const data={
            "params":"29A88293C68441D48396A9D9B152F4C6BF71A46E21ABBECFCBD76C5C46748E9966443B86502DEEC66AB36DF498019F5761B8DF3AFD8D714F240C05CC0C9DFB9F7DC8C260348ADD5D0729A85995E81241FAD91BD3C779B80EF1479C99833E254153A761AD72F1160BC9EE9E3F3F9056CC091BEC4425DA6891C60DAA60F511109BA7A839875AEE6D795597A15D730F9FACDF1637F90F782885DDA458AE75354A026114A6F66257D79F87E5F6B221C75742739ACC9B2B8025A47B623E3038FC5C44EA17628867C53E2D85A764367CC06E31016A9828C05D2440150AE33C2E7BE436F825BD1E4A1B628C251A3C215C33D9F187D902F8B390402E7718A5000372A429F8634289ED758C8663FC6E9F01D74166DDE73234F338F1095DC3AC28E3326D21C7110E638FC9B63BD1EA8738C99EE9DE321838616D21E0C0FD6CAFD81DE3F69CEAF5C6289ABB444DC535229665EBAED9D2B502FF3EC70D8066AA9A72C79EA3790B079DE498569119145B79521048A6627426B1DC765833A8821B02A12352D340718B1EF5BC43172974B313F1B54B6E9B"
        };
        axios.post(url, qs.stringify(data))
            .then(res => {
                console.log(res)
                this.setState({
                    radiolists: res.data.djRadios
                });
            });
    }
    render() {
        const musicItems = this.state.radiolists.map((item, index) => (
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
export default RadioPage;
