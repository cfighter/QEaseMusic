import React from 'react';
import TopList from '../components/TopList/TopList.jsx';
import axios from 'axios';
import qs from 'qs';
class TopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {       
            toplists: []
        }

    }
    componentDidMount() {
        const url = '/eapi/toplist';
        const data = {
            "params": "21198D2616ECB14FEB4410B511166D7D06EC7397CB8529217FF9AB0A36F101B0FAD91BD3C779B80EF1479C99833E254153A761AD72F1160BC9EE9E3F3F9056CC091BEC4425DA6891C60DAA60F511109BA7A839875AEE6D795597A15D730F9FACDF1637F90F782885DDA458AE75354A026114A6F66257D79F87E5F6B221C75742739ACC9B2B8025A47B623E3038FC5C44EA17628867C53E2D85A764367CC06E314672EDFBC1C172BAB2C414E97D821633F825BD1E4A1B628C251A3C215C33D9F187D902F8B390402E7718A5000372A429F8634289ED758C8663FC6E9F01D74166DDE73234F338F1095DC3AC28E3326D21C7110E638FC9B63BD1EA8738C99EE9DE321838616D21E0C0FD6CAFD81DE3F69CEAF5C6289ABB444DC535229665EBAED9D2B502FF3EC70D8066AA9A72C79EA379EDF978C4732ADE4DB9465C475FAB07B15EC8FAD86721CC4F9AD5FE14D4BA189475DCAF7DDB0185B51E10605AADD3214D"
        }
        axios.post(url, qs.stringify(data))
            .then(res => {
                console.log(res)
                this.setState({
                    toplists: res.data.list
                });
            });
    }
    render() {   
    const toplists=this.state.toplists.map((item,index)=>{
        return(
            <TopList key={index} name={item.name} update={item.updateFrequency}/>
        )
    })         
        return (
            <div className="top-list-board">
                {toplists}
            </div>
        );       
    }
}
export default TopPage;
