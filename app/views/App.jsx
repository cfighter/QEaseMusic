import React from 'react';
import Leftbar from '../components/LeftBar/LeftBar.jsx'
import TopBar from '../components/TopBar/TopBar.jsx';
import './App.scss';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            navshow:false 
        }
    }
    handleLeftBar(isTrue,ev){
        ev.stopPropagation();
        this.setState({
            navshow:isTrue
        })
    }
    render() {
        return (
            <div className="app" onClick={this.handleLeftBar.bind(this,false)}>
                <div className={this.state.navshow ? "left-nav show":"left-nav"}>
                    <Leftbar/>
                </div>
                <div className="top-nav">
                    <TopBar handleClick={this.handleLeftBar.bind(this,true)}/>
                </div>
                {this.props.children}
            </div>
            
        );

    }
}
export default App;
