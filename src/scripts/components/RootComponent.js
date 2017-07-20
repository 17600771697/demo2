
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
class RootComponent extends React.Component {
	
	render(){
		return (
			<div> 
				{this.props.children}
				
	           	<FooterComponent/>	
			</div>
		)
	}
}
export default RootComponent
