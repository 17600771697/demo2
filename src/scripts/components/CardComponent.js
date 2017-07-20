
import ListComponent    from './ListComponent'

class CardComponent extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state={
			questions:[]
		}
	}
	componentWillMount(){
		var that=this;
		$.ajax({
			url:this.props.url,
			dataType:'json',
			success:function(result){
				//console.log(result)
				that.setState({
					questions:result,
				})
			}
		})
	}
	setNewsItem(){
		var arr=[];
		var news=this.state.questions
		var that=this;
		if(news.length){
			news.forEach(function(item,index){
				arr.push(<ListComponent item={item} />)
			})
		}
		return arr;
	}
	render(){
		return (
			<div className="card">
			    <div className="card-header">推荐商家</div>
			    {this.setNewsItem()}		
			</div>
			
		)
	}
}
CardComponent.defaultProps={
	url:"https://mainsite-restapi.ele.me/shopping/restaurants?latitude=40.11722&longitude=116.25003&offset=40&limit=20&extras[]=activities&terminal=h5"
}

export default CardComponent