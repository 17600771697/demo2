import ImageComponent from './ImageComponent'


class ListComponent extends React.Component {
	render(){
		return (
			<div className="card_content">
			    <div className="card-content">
			        <div className="card-content-inner">
				        <a href={"#/detail/"+this.props.item.id}>
				      		<section className="index-container">
				      			<div className="logo-container">
				      				<ImageComponent imgHash={this.props.item.image_path} />
				      			</div>
				      			<div className="index-main">
				      				<section className='index-line_1Zyr1'>
				      					<h3>{this.props.item.name}</h3>
				      				</section>
				      				<section className='index-line_1Zyr1 line'>
				      					<div>
				      						<i className="glyphicon glyphicon-star"></i>
				      						<i className="glyphicon glyphicon-star"></i>
				      						<i className="glyphicon glyphicon-star"></i>
				      						<i className="glyphicon glyphicon-star"></i>
				      						<i className="glyphicon glyphicon-star"></i>
				      						<span className="sales sal">{this.props.item.rating}</span>
				      						<span className="sales">{"月售"+this.props.item.recent_order_num+"单"}</span>	
				      					</div>
				      					<div className="delivery">
				      						<span className="iconDelivery">准时达</span>
				      						<span className="index-hollow">蜂鸟专送</span>
				      					</div>
				      				</section>
				      				<section className='index-line_1Zyr1  line'>
				      					<div className="moneylimit">
				      						<span>{"¥"+this.props.item.float_minimum_order_amount+"起送"}</span>/
				      						<span>{this.props.item.piecewise_agent_fee.description}</span>/
				      						<span>{this.props.item.average_cost}</span>
				      					</div>
				      					<div className="timedistance">
				      						<span>1.24km</span>
				      						<span>54分钟</span>
				      					</div>
				      				</section>
				      				<section className='index-line_1Zyr1'></section>
				      			</div>
				      		</section>	
				      	</a>
			        </div>
			    </div>
		    </div>
		)
	}
}


export default ListComponent