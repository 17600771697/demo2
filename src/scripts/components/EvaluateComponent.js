import DetailHeaderComponent from './DetailHeaderComponent'
import EvaBodyCompinent from './EvaBodyCompinent'
class EvaluateComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state={
			questions:[],info:{}
		}
	}
	componentWillMount(){
		var that= this;
		var Src="https://mainsite-restapi.ele.me/ugc/v2/restaurants/";
			Src+=this.props.params.id;
			Src+="/ratings/scores"
		var src="https://mainsite-restapi.ele.me/ugc/v2/restaurants/";
		  src+=this.props.params.id;
		  src+="/ratings?has_content=true&offset=0&limit=10"
		$.ajax({
			url:src,
			dataType:"json",	
			success:function(result){
				
				that.setState({
					questions:result
				})				
			}			
		});
		$.ajax({
			url:Src,
			dataType:"json",	
			success:function(res){
				console.log(res)
				that.setState({
					info:{
						a1:res.service_score,
						a2:res.overall_score,
						a3:res.food_score,
						a4:res.deliver_time,
						a5:res.compare_rating
					}
				})				
			}			
		});
	}
	setFootItem(){
		var arr1=[];
		var news1=this.state.questions
		var that=this;
		if(news1.length){
			news1.forEach(function(value,index){
				//console.log(value)
				arr1.push(<EvaBodyCompinent value={value} />)
			})
		}
		return arr1;
	}
	render(){
		return (
			<div className="eva-commm">			
				<section className="eva-T">
					<div className="eva-T-L">
						<b>{Number(this.state.info.a1).toFixed(1)}</b>
						<div>综合评价</div>
						<p>高于周边商家<span>{Number(this.state.info.a5).toFixed(3)*100}</span>%</p>
					</div>
					<div className="eva-T-R">
						<div className="overview">
							<span>服务态度</span>
							<span className="svg">
								<i className="glyphicon glyphicon-star"></i>
								<i className="glyphicon glyphicon-star"></i>
								<i className="glyphicon glyphicon-star"></i>
								<i className="glyphicon glyphicon-star"></i>
								<i className="glyphicon glyphicon-star"></i>
							</span>
							<span>{Number(this.state.info.a3).toFixed(1)}</span>
							
						</div>
						<div className="overview">
							<span>菜品评价</span>
							<span className="svg">
								<i className="glyphicon glyphicon-star"></i>
								<i className="glyphicon glyphicon-star"></i>
								<i className="glyphicon glyphicon-star"></i>
								<i className="glyphicon glyphicon-star"></i>
								<i className="glyphicon glyphicon-star"></i>
							</span>
							<span>{Number(this.state.info.a2).toFixed(1)}</span>
							
						</div>
						<div className="overview">
							<span>送达时间</span>
							<span className="svg last_svg">
								{this.state.info.a4+"分钟"}
							</span>							
						</div>
					</div>
				</section>
				<section className="eva-R">
					<div className="eva-R-T">
						<ul className="R-T-ul">
							<li className="R-T-li">全部(412)</li>
							<li className="R-T-li">全部(412)</li>
							<li className="R-T-li">全部(412)</li>
							<li className="R-T-li">全部(412)</li>
							<li className="R-T-li">全部(412)</li>
							<li className="R-T-li">全部(412)</li>
							<li className="R-T-li">全部(412)</li>
						</ul>
					</div>
					{this.setFootItem()}
				</section>
			</div>
		)	
	}
}

export default EvaluateComponent