import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';

import { fetchProducts } from "../../actions/productActions";
import { addToCart } from "../../actions/cartActions";

import { getCookie } from "../../utils/cookieHelper";

class ExploreTheImpossibility extends Component {
	constructor(props) {
		super(props);
		this.renderList = this.renderList.bind(this);
		this.decrementQuantity = this.decrementQuantity.bind(this);
		this.incrementQuantity = this.incrementQuantity.bind(this);
		this.handleAddToCart = this.handleAddToCart.bind(this);
	}

	componentDidMount() {
		this.props.fetchProducts();
	}

	handleAddToCart(id) {
		let data = {
  			"product_id": id,
  			"quantity": document.getElementById("quantity" + id).value
		};
		this.props.addToCart(data, getCookie("apiKey"));
	}

	incrementQuantity(id) {
		let quantity = document.getElementById("quantity" + id).value;

		document.getElementById("quantity" + id).value = Number(quantity) + 1;
	}

	decrementQuantity(id) {
		let quantity = document.getElementById("quantity" + id).value;

		if (quantity > 1) {
			document.getElementById("quantity" + id).value = Number(quantity) - 1;
		}
	}

	renderList() {
		return (
			<div className="row">
				{
					this.props.products.productList.map((product) => {
						return (
							<div key={product.id} className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">
								<div className="link-block">
									<figure><img style={{ "height": "200px", "weight": "200px" }} src={"http://api.fruitboxhyd.com/images/" + product.image} alt={product.name} className="img-responsive img-rounded" /></figure>
									<h3>{product.name}</h3>
									<h4>₹ {product.price}</h4>
									<p>{product.description}.</p>
									<a onClick={ () => { this.handleAddToCart(product.id) } } className="btn btn-primary btn-sm">Add to Cart</a>
									<div className="input-group" style={{"width": "200px"}}>
		                                <span className="input-group-btn">
		                                    <button onClick={ () => { this.decrementQuantity(product.id) } } type="button" className="quantity-left-minus btn btn-default btn-number btn-sm"  data-type="minus" data-field="">
		                                        <span className="glyphicon glyphicon-minus"></span>
		                                    </button>
		                                </span>
		                                <input type="text" id={"quantity" + product.id} value="1" name="quantity" className="form-control input-number" min="1" />
		                                <span className="input-group-btn">
		                                    <button onClick={ () => { this.incrementQuantity(product.id) } } type="button" className="quantity-right-plus btn btn-default btn-number btn-sm" data-type="plus" data-field="">
		                                        <span className="glyphicon glyphicon-plus"></span>
		                                    </button>
		                                </span>
		                            </div>
								</div>
							</div>
						);
					})
				}
			</div>
		);
	}

	render() {
		return (
			<div className="fh5co-content-style-6">
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
			            	<h1 className="text-success">Successfully Added to Cart!</h1>
			          	</ModalDialog>
			        </ModalContainer>
			    }
				<div className="container">
					<div className="row p-b text-center">
						<div className="col-md-6 col-md-offset-3">
							<h2 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">Explore the impossibility.</h2>
							<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
						</div>
					</div>
					{
						this.renderList()
					}
				</div>
			</div>			
		);
	}
}

function mapStateToProps(state) {
	return {
		products: state.products,
		cart: state.cart
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchProducts: fetchProducts,
		addToCart: addToCart
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreTheImpossibility);