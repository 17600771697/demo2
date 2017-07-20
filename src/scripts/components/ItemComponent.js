

class ItemComponent extends React.Component {
	render(){
		return (
			<div className="swiper-slide">
	        		<img src={this.props.item.img}/>
	        		<span>{this.props.item.title}</span>
	        </div>
		)
	}
}
export default ItemComponent