import ImageComponent from "./ImageComponent"
class FoodComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state={
			questions:[]
		}
	}
	render(){
		return (
			<div>
				<dt className="wrapper-dt">
					<b>{this.props.value.name}</b>
					<div className="dttt">
						<span>{this.props.value.description}</span>
					</div>					
				</dt>
				<dd className="wrapper-dd">
					<span className="dd-img">
						<ImageComponent  imgHash={this.props.value.foods[0].image_path}/>
					</span>
					<div className="dd-info">
						<div classname="dd-info-c">{this.props.value.foods[0].name}</div>
						<p className="dd-info-pp">{this.props.value.foods[0].description}</p>
						<p>
							<span className="info-math">{"月售"+this.props.value.foods[0].month_sales+"份"}</span>
							<span className="info-Praise">{"好评率"+this.props.value.foods[0].satisfy_rate+"%"}</span>	
						</p>
						<div className="info-Price">
							<span className="info-new">{"¥"+this.props.value.foods[0].specfoods[0].price}</span>
							<span className="iconfont icon-iconfontxinzeng"></span>						
						</div>
					</div>
				</dd>
			</div>
		)
	}
}

export default FoodComponent