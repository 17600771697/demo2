class FindComponent extends React.Component {
	render(){
		return (
			<div className="find clearfix">
	            <h1 className="find-title">发现</h1> 
				<div className="find-content">
					<div className="con-T">
						<section className="integral-L">				
								<p className="a-T-one">积分商城</p>
								<p className="a-T-two">0元好物在这里!</p>
								<img className="t-img" src="./img/j-1.jpeg"/>	
						</section>
						<section className="integral-R">
								<p className="a-t-one">美味爆料</p>
								<p className="a-t-two">冰爽美食吃吃吃!</p>								
								<img className="a-t-img" src="./img/j-2.jpeg"/>
								<div>
									<p className="a-t-one">推荐有奖</p>
									<p className="a-t-two">五元现金拿不停!</p>
									<img className="a-t-img" src="./img/j-3.jpeg"/>
								</div>
						</section>						
					</div>
					<section className="integral-C">
							<img src="./img/hb.jpeg"/>
					</section>
					<section className="integral-B">
						<div className="activity-header">
							<span className="find-line left"></span>
							<i className="iconfont icon-icon-test"></i>
							限时好礼
							<span className="find-line right"></span>
						</div>
						<p className="trade">小积分换豪礼</p>
						<div className="activity-body">
							<a href="" className="discover-food">
								<img src="./img/r1.jpeg"/>
								<div className="food-info">
									<p className="food-info">iPhone 7 32G</p>
									<p className="food-info">
										<i className="food-new">399积分</i>
										<i className="food-old">4499</i>
									</p>
									<span className="sp1">抽奖活动</span>
								</div>
							</a>
							<a href="" className="discover-food">
								<img src="./img/r1.jpeg"/>
								<div className="food-info">
									<p className="food-info">玩转盘送iPad pro</p>
									<p className="food-info">
										<i className="food-new">399积分</i>
									</p>
									<span className="sp1">0元抽奖</span>
								</div>
							</a>
							<a href="" className="discover-food">
								<img src="./img/r1.jpeg"/>
								<div className="food-info">
									<p className="food-info">iPhone 7 32G</p>
									<p className="food-info">
										<i className="food-new">3500积分</i>
										<i className="food-old">¥7</i>
									</p>
									<span className="sp1">0元兑换</span>
								</div>
							</a>
							<p className="find-more">
								查看更多
								<i className="iconfont icon-more"></i>
							</p>
						</div>
					</section>
				</div>
			</div>
		)
	}
}

export default FindComponent