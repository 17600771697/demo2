

class ImageComponent extends React.Component {
	getImgUrl(){
		if(this.props.imgHash){
			var imgUrl = "//fuss10.elemecdn.com/";
   			imgUrl += this.props.imgHash.substring(0,1);
   			imgUrl += "/" + this.props.imgHash.substring(1,3) + "/" + this.props.imgHash.substring(3);
   			if(this.props.imgHash.indexOf("jpg") != -1){
   				imgUrl += ".jpg";
   			}else if(this.props.imgHash.indexOf("jpeg") != -1){
   				imgUrl += ".jpeg";
   			}
   			else if(this.props.imgHash.indexOf("png") != -1){
   				imgUrl += ".png";
   			}
   			return imgUrl;
		}
	}
	render(){
		return (
			<img src={this.getImgUrl()}/>
		)
	}
}
ImageComponent.defaultProps = {
	imgHash:''
}
export default ImageComponent