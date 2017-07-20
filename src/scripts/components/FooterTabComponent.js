

class FooterTabComponent extends React.Component{
	setActiveStyle(){
		if(this.props.info.isActive){
			return "tab-item external active"
		}else{
			return "tab-item external"
		}
	}
	render(){
		return (
			 <a id="a1" onClick={this.props.changeActiveTab.bind(null,this.props.info.icon)} className={this.setActiveStyle()} href={this.props.info.href}>
                <span className={"icon icon-"+this.props.info.icon}></span>
                <span className="tab-label">{this.props.info.text}</span>
            </a>
		)
	}
}


export  default FooterTabComponent
