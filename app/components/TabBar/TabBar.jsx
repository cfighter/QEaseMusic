import React from 'react';
import './TabBar.scss'

class TopBar extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			index:0
		}
	}
	componentDidMount() {
		
	}
	tabClick(index){
		this.setState({
			index:index
		})
	}
	render(){
		const items=this.props.items.map((item,index)=>{
			return(
				<div key={index} className={this.state.index==index?"tab-item active":"tab-item"} onClick={this.tabClick.bind(this,index)}>
					{item.title} 
				</div>
			)
		})
		return(
			<div className="tabbar">				
				{items}
			</div>
		)
	}
}
export default TopBar;