import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';

import { displayCart, removeProductFromCart } from "../../actions/cartActions";

import { getCookie } from "../../utils/cookieHelper";

class Cart extends Component {
	constructor(props) {
		super(props);
		this.renderList = this.renderList.bind(this);
		this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
	}

	componentDidMount() {
		this.props.displayCart(getCookie("apiKey"));
	}

	handleRemoveProduct(id) {
		let data = {
			"cart_id": id
		};
		this.props.removeProductFromCart(data, getCookie("apiKey"));
	}

	renderList() {
		return (
			<div>
				{
					this.props.cart.cartProducts.map((product) => {
						return (
							<div key={product.cart_id} className="product">
							    <div className="product-image">
							      	<img src={product.image} alt={product.name} />
							    </div>
							    <div className="product-details">
							      	<div className="product-title">{product.name}</div>
							      	<p className="product-description">The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.</p>
							    </div>
							    <div className="product-price">{product.price}</div>
							    <div className="product-quantity">{product.quantity}</div>
							    <div className="product-removal">
							      	<button onClick={() => { this.handleRemoveProduct(product.cart_id) } } className="remove-product">
							        	Remove
							      	</button>
							    </div>
							    <div className="product-line-price">{product.price * product.quantity}</div>
							</div>
						);
					})
				}
			</div>
		);
	}

	render() {
		return (
			<div>
				{
					this.props.cart.showSuccessModal &&
					<ModalContainer onClose={this.handleClose}>
			          	<ModalDialog onClose={this.handleClose}>
			          		<div className="check_mark">
							  	<div className="sa-icon sa-success animate">
							    	<span className="sa-line sa-tip animateSuccessTip"></span>
							    	<span className="sa-line sa-long animateSuccessLong"></span>
							    	<div className="sa-placeholder"></div>
							    	<div className="sa-fix"></div>
							  	</div>
							</div>
			            	<h1 className="text-success">Product Removed from Cart Successfully!</h1>
			          	</ModalDialog>
			        </ModalContainer>
			    }
				<h1>Shopping Cart</h1>
				<div className="shopping-cart">
					<div className="column-labels">
					    <label className="product-image">Image</label>
					    <label className="product-details">Product</label>
					    <label className="product-price">Price</label>
					    <label className="product-quantity">Quantity</label>
					    <label className="product-removal">Remove</label>
					    <label className="product-line-price">Total</label>
					</div>
					{ this.renderList() }
					<button className="checkout">Checkout</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		cart: state.cart
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		displayCart: displayCart,
		removeProductFromCart: removeProductFromCart
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);