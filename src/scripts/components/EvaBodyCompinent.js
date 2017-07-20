
import ImageComponent from './ImageComponent'


class EvaBodyCompinent extends React.Component{
	render(){
		return (
			<div>
				<ul className="eva-R-B">
					<li className="R-B-li">
						<div className="R-B-div">
							<img src="./img/rt.jpeg"/>
							<div className="R-B-com">
								<h3>
									<span className="sp1">匿名用户</span>
									<span className="sp1">{this.props.value.rated_at}</span>
								</h3>
								<span className="svg1">
									<i className="glyphicon glyphicon-star"></i>
									<i className="glyphicon glyphicon-star"></i>
									<i className="glyphicon glyphicon-star"></i>
									<i className="glyphicon glyphicon-star"></i>
									<i className="glyphicon glyphicon-star"></i>
								</span>
								<ul className="R-B-com-ul">
									{this.props.value.rating_text ? <b>{this.props.value.rating_text}</b>:""}	
								</ul>
								<ul className="R-B-com-ul">
									<span>商家回复:<em>{this.props.value.reply_text}</em></span>
								</ul>
								<ul className="R-B-com-ul">
									{this.props.value.item_ratings.length ? <li>{this.props.value.item_ratings[0].food_name}</li>:""}	
								</ul>
								<ul className="R-B-com-ul">
									{this.props.value.item_ratings.length?<ImageComponent imgHash={this.props.value.item_ratings[0].image_hash}/>:""}									
								</ul>
								
							</div>
						</div>
					</li>
				</ul>	
			</div>
		)
	}
}

export default EvaBodyCompinent