import DetailHeaderComponent from './DetailHeaderComponent'
import LiComponent from './LiComponent'
import FoodComponent from './FoodComponent'
class CommodityComponent extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state={
			questions:[]
		}
	}
	componentWillMount(){
		//console.log(this.props.rt)
		var that= this;
		var src="https://mainsite-restapi.ele.me/shopping/v2/menu?restaurant_id=";
		  src+=this.props.params.id;
		$.ajax({
			url:src,
			dataType:"json",	
			success:function(result){			
				that.setState({
					questions:result
				})				
			}			
		});
	}
	setNewsItem(){
		var arr=[];
		var news=this.state.questions
		var that=this;
		if(news.length){
			news.forEach(function(item,index){
				arr.push(<LiComponent item={item} />)
			})
		}
		return arr;
	}
	setFootItem(){
		var arr1=[];
		var news1=this.state.questions
		var that=this;
		if(news1.length){
			news1.forEach(function(value,index){
				arr1.push(<FoodComponent value={value} />)
			})
		}
		return arr1;
	}
	render(){
		return (
			<div className="comm">
			    <div id="wrapper" className="comm-wrapper">
			    	<ul id="scroller" className="scroller">
			    		{this.setNewsItem()}	
			    	</ul>
			    	<section className="comm-wrapper-R">
			    		<div className="wrapper-R-con">
			    			<dl className="wrapper-dl">
			    				
			    				{this.setFootItem()}
			    			</dl>
			    		</div>
			    	</section>
			    </div>

          </div>
		)
	}
	
}

export default CommodityComponent