import React, { Component } from 'react';

export default class Creations extends Component {
	render() {
		return (
			<div className="fh5co-blog-style-1">
				<div className="container">
					<div className="row p-b">
						<div className="col-md-6 col-md-offset-3 text-center">
							<h2 className="fh5co-heading wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">The Fruit Store Creations</h2>
							<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						</div>
					</div>
					<div className="row p-b">
						<div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12">
							<div className="fh5co-post wow fadeInLeft"  data-wow-duration="1s" data-wow-delay="1.1s">
								<div className="fh5co-post-image">
									<div className="fh5co-overlay"></div>	
									<img src="images/img_same_dimension_2.jpg" alt="Image" className="img-responsive" />
								</div>
								<div className="fh5co-post-text">
									<h3><a href="#">Fresh Cut & Peeled Fruits</a></h3>
									<p>It is indeed a luxury to relish farm fresh fruits without having to devote time and effort in cleaning, peeling and cutting them into  sizes.</p>
								</div>
								<div className="fh5co-post-meta">
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12">
							<div className="fh5co-post wow fadeInLeft"  data-wow-duration="1s" data-wow-delay="1.4s">
								<div className="fh5co-post-image">
									<div className="fh5co-overlay"></div>	
									<img src="images/img_same_dimension_3.jpg" alt="Image" className="img-responsive" />
								</div>
								<div className="fh5co-post-text">
									<h3><a href="#">Premium Cakes</a></h3>
									<p>Experience this delicious and nutritious cake laden with the taste of great fruits. Perfect choice for fruit lovers with a sweet-tooth</p>
								</div>
								<div className="fh5co-post-meta">
								</div>
							</div>
						</div>
						<div className="clearfix visible-sm-block"></div>
						<div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12">
							<div className="fh5co-post wow fadeInLeft"  data-wow-duration="1s" data-wow-delay="1.7s">
								<div className="fh5co-post-image">
									<div className="fh5co-overlay"></div>	
									<img src="images/img_same_dimension_4.jpg" alt="Image" className="img-responsive" />
								</div>
								<div className="fh5co-post-text">
									<h3><a href="#">Pies</a></h3>
									<p>We are proud to offer our delicious, homemade pies for shipment anywhere in the city, made out of our organic fruits</p>
								</div>
								<div className="fh5co-post-meta">
								</div>
							</div>
						</div>
						<div className="clearfix visible-sm-block"></div>
					</div>
					<div className="row">
						<div className="col-md-4 col-md-offset-4 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="2s">
							<a href="#" className="btn btn-primary btn-lg">View All Post</a>
						</div>
					</div>
				</div>
			</div>			
		);
	}
}