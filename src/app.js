//style
require('./styles/app.css')
require('./styles/app.scss')


import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'


import RootComponent from './scripts/components/RootComponent'
import TakeFoodComponent from './scripts/components/TakeFoodComponent'
import FindComponent from './scripts/components/FindComponent'
import OrderComponent from './scripts/components/OrderComponent'
import MinComponent from './scripts/components/minComponent'
import DetailComponent from './scripts/components/DetailComponent'
import CommodityComponent from './scripts/components/CommodityComponent'
import EvaluateComponent from './scripts/components/EvaluateComponent'
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={RootComponent}>
			<IndexRoute component={TakeFoodComponent}/>
			<Route path="takefood" component={TakeFoodComponent}></Route>
			<Route path="find" component={FindComponent}></Route>
			<Route path="order" component={OrderComponent}></Route>
			<Route path="min" component={MinComponent}></Route>
			<Route path='detail/:id' component={DetailComponent}>
				<IndexRoute component={CommodityComponent}/>
				<Route path="tab1" component={CommodityComponent}></Route>
				<Route path="tab2" component={EvaluateComponent}></Route>
			</Route>
			<Route path="*" component={TakeFoodComponent}></Route>	
		</Route>
	</Router>,document.getElementById("root"))
