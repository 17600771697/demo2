
import FooterTabComponent from'./FooterTabComponent'
class FooterComponent extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state={
			navs:[
				{icon:'clock',text:'外卖',isActive:true,href:'#/takefood'},
				{icon:'browser',text:'发现',isActive:false,href:'#/find'},
				{icon:'menu',text:'订单',isActive:false,href:'#/order'},
				{icon:'me',text:'我的',isActive:false,href:'#/min'}				
			]
		}
	}
	changeActiveTab(icon){
		this.state.navs.forEach(function(tab,index){
			if(tab.icon==icon){
				tab.isActive=true;
			}else{
				tab.isActive=false;
			}
		})
		this.setState({
			navs:this.state.navs
		})
	}
	setNavs(){		
		var navs=this.state.navs;
		var arr=[];
		for(var i=0;i<navs.length;i++){
			arr.push(<FooterTabComponent changeActiveTab={this.changeActiveTab.bind(this)} info={navs[i]} />)
		}
		return arr;
	}
	render(){
		return (
			 <nav className="bar bar-tab">
                 	{this.setNavs()}
            </nav>
		)
	}
}


export default FooterComponent