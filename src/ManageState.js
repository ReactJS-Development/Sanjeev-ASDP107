import React, { Component } from 'react';

class ChangeState extends Component {

	constructor(props){
		super(props);
		this.state={product:'fruit',name:'Apple',imageurl:'https://i2.wp.com/thefarmersmarketgh.com/wp-content/uploads/2012/05/green-red-apple-fruit.jpg'}
	}

	render(){
		setTimeout(() => {this.setState({product:'fruit',name:'PineApple',imageurl:"https://www.organicfacts.net/wp-content/uploads/pineapplecalories.jpg"});
	},10000);
		return(<div>
				<p>Product :{this.state.product}</p>
				<p>Name :{this.state.name}</p>
				<img src={this.state.imageurl} />
			   </div>
		);}
}
export default ChangeState;