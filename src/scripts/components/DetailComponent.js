import DetailHeaderComponent from './DetailHeaderComponent'
import EvaluateComponent from './EvaluateComponent'

class DetailComponent extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state={
			questions:[]
		}
	}
	render(){
		return (
			<div className="detail-content"> 
               <DetailHeaderComponent rt={this.props.params.id} />
                <div className="main">
				  <div className="buttons-tab">
				    <a href={"#/detail/"+this.props.params.id+"/tab1"} className="tab-link active button">商品</a>
				    <a href={"#/detail/"+this.props.params.id+"/tab2"} className="tab-link button">评价</a>
				  </div>
				</div>
               	{this.props.children}
            </div>
		)
	}
}

export default DetailComponent