
import HeaderComponent	from './HeaderComponent'
import ItemComponent	from './ItemComponent'
import CardComponent	from './CardComponent'



class TakeFoodComponent extends React.Component {
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
				arr.push(<ItemComponent item={item} />)
			})
		}
		return arr;
	}
	render(){
		return (
			<div>
				<HeaderComponent/>	
				<div className="content">
					 <div className="swiper-container">
				        <div className="swiper-wrapper">
							{this.setNewsItem()}		            
				        </div>
				        <div id="swiper-pagination" className="swiper-pagination"></div>
				    </div>
				    
				    <CardComponent/>				    
				</div>
			</div>
		)
	}	
	componentDidUpdate(){
		new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        slidesPerGroup: 8, //定义多少为一组
	        slidesPerView: 4,
	        slidesPerColumn: 2,
	        paginationClickable: true
	    })
	}	
}
TakeFoodComponent.defaultProps={
	url:"./json/banner.json"
}
export default TakeFoodComponent
