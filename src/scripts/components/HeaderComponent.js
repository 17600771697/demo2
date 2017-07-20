
class HeaderComponent extends React.Component {
	render(){
		return (
			<header className="bar bar-nav">
				<div className="bar-T">
					<div className='bar-nav-L' >
						<div className="index-location">
			                <a className="glyphicon glyphicon-map-marker"></a>
			                <span className="location-target">北京科技职业技术学院...</span>
			                <a className="glyphicon glyphicon-chevron-down"></a>
			            </div>
			        </div>
			        <div className="bar-nav-R">
			        	<div>
			        		<h2>32°</h2>
			        		<p>晴天</p>
			        	</div>
			        	<img src="./img/tq.png"/>
			        </div>
		        </div>
		        <div className="bar-M">
		        	<input type="text" placeholder="搜索商家,商品"/>
		        </div>
		        <div id="wrapper"className="wrapper">
		        	<ul id="scroller">
			        	<a>米粉</a>
			        	<a>黄焖鸡</a>
			        	<a>汉堡</a>
			        	<a>鲜果49-20</a>
			        	<a>我的菜</a>
			        	<a>点心</a>
			        	<a>甜品</a>
			        	<a>全家桶</a>
			        	<a>奶茶</a>
			        	<a>东坡肉</a>
		        	</ul>
		        </div>
            </header>
		)
	}
	componentDidMount(){
		var myscroll= new iScroll("wrapper",{hScrollbar:false,vScroll:false})
	}
	
}

export default HeaderComponent