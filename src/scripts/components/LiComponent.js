
class LiComponent extends React.Component{
	render(){
		return (
			<div>
				<li className="com-li">
	    			<span>{this.props.item.name}</span>
	    		</li>
    		</div>
		)
	}
}

export default LiComponent