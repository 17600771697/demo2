import ImageComponent from "./ImageComponent"


const bg={
	 backgroundImg: "url(img/bj.jpeg)",
	 backgroundRepeat:"no-repeat",
	 backgroundSize:"cover",
	 backgroundColor:"rgba(119,103,137,.43)"
}

class DetailHeaderComponent extends React.Component{	
	constructor(props,context){
		super(props,context)
		this.state={
			questions:[]
		}
	}
	componentWillMount(){
		var that= this;
		var src="https://mainsite-restapi.ele.me/shopping/restaurant/";
		  src+=this.props.rt;
		  src+="?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&latitude=40.11722&longitude=116.25003";
		$.ajax({
			url:src,
			dataType:"json",	
			success:function(result){
				//console.log(result)
				that.setState({
					questions:result
				})			
			}		
		});
	}
	render(){
		return (
			<div>
				<section className="detail-header" style={bg}>
	                 <a href="/" className="detail-title">
	                	<i className="iconfont icon-back"></i>
	                </a>
                	<div className="shop-header">
	                	<ImageComponent  imgHash={this.state.questions.image_path}/>
	                	<div className="header-T">
	                		<h2>{this.state.questions.name}</h2>
	                		<p className="shop-header-ys">
	                			<span className="Distribution">商家配送</span>/
	                			<span className="Arrive">55分钟到达</span>/
	                			<span className="fee">{"配送费"+this.state.questions.float_delivery_fee +"¥"}</span>
	                		</p>
	                		<p className="shop-header-gg">
	                			<span className="gg-p">{"公告:"+this.state.questions.promotion_info}</span>
	                			<span className="">欢迎光临，用餐高峰期请提前下单，谢谢。</span>
	                		</p>
	                		<i className="iconfont icon-more"></i>
	                	</div>                	
	                </div>
	                <div className="header-B">
                		<div>
                			<i className="iconfont icon-xin"></i>
                			<span>新用户下单立减17.0元(不与其它活动同享)</span>
                		</div>
                		<span >4个活动</span>
                	</div>
                </section>
			</div>
		)
	}
}
export default DetailHeaderComponent