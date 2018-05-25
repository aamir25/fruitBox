import React, { Component } from 'react';

export default class Intro extends Component {
	render() {
		return (
			<div className="fh5co-cover fh5co-cover-style-2 js-full-height img-22-background" data-stellar-background-ratio="0.5" data-next="yes">
			  	<span className="scroll-btn wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.4s">
					<a href="#">
						<span className="mouse"><span></span></span>
					</a>
				</span>
				<div className="fh5co-overlay"></div>
				<div className="fh5co-cover-text">
					<div className="container">
						<div className="row">
							<div className="col-md-push-6 col-md-6 full-height js-full-height">
								<div className="fh5co-cover-intro">
									<h1 className="cover-text-lead wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">Your Organic Store</h1>
									<h2 className="cover-text-sublead wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">With three Certified Gluten-Free Menus (Fruits, Cakes, and Gluten-Free), Fruit Basket is now the first meal kit company to deliver organic fruits, cakes and pies right at your Doorstep!</h2>
									<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s"><a href="http://freehtml5.co/" className="btn btn-primary btn-outline btn-lg">See Our Store</a></p>
								</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
		);
	}
}