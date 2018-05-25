import React, { Component } from 'react';

export default class StoreDescription extends Component {
	render() {
		return (
			<div className="fh5co-project-style-2">
				<div className="container">
					<div className="row p-b">
						<div className="col-md-6 col-md-offset-3 text-center">
							<h2 className="fh5co-heading wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">Our Store</h2>
							<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">Enjoy the fresh and refreshing fruits, cakes and pie's at The Fruit Store </p>
							<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s"><a href="#" className="btn btn-success btn-lg">Start your shopping</a></p>
						</div>
					</div>
				</div>
				<div className="fh5co-projects">
					<ul>
						<li className="wow fadeInUp" style={{"backgroundImage": "url(images/full_4.jpg)"}} data-wow-duration="1s" data-wow-delay="1.4s" data-stellar-background-ratio="0.5">
							<a href="#">
								<div className="fh5co-overlay"></div>
								<div className="container">
									<div className="fh5co-text">
										<div className="fh5co-text-inner">
											<div className="row">
												<div className="col-md-6"><h3>Fresh Fruits</h3></div>
												<div className="col-md-6"><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div>
											</div>
										</div>
									</div>
								</div>
							</a>
						</li>
						<li className="wow fadeInUp" style={{"backgroundImage": "url(images/full_2.jpg)"}} data-wow-duration="1s" data-wow-delay="1.7s" data-stellar-background-ratio="0.5">
							<a href="#">
								<div className="fh5co-overlay"></div>
								<div className="container">
									<div className="fh5co-text">
										<div className="fh5co-text-inner">
											<div className="row">
												<div className="col-md-6"><h3>Cakes</h3></div>
												<div className="col-md-6"><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div>
											</div>
										</div>
									</div>
								</div>
							</a>
						</li>
						<li className="wow fadeInUp" style={{"backgroundImage": "url(images/full_11.jpg)"}} data-wow-duration="1s" data-wow-delay="2s" data-stellar-background-ratio="0.5">
							<a href="#">
								<div className="fh5co-overlay"></div>
								<div className="container">
									<div className="fh5co-text">
										<div className="fh5co-text-inner">
											<div className="row">
												<div className="col-md-6"><h3>Pies</h3></div>
												<div className="col-md-6"><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div>
											</div>
										</div>
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>			
		);
	}
}