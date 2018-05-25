import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<div className="fh5co-footer-style-3">
				<div className="container">
					<div className="row p-b">
						<div className="col-md-3 col-sm-6 fh5co-footer-widget wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
							<div className="fh5co-logo"><span className="logo">V</span> Licos Inc.</div>
							<p className="fh5co-copyright">&copy; 2017 Licos Inc.. <br />All Rights Reserved.</p> <br /> <br /> 
						</div>
						<div className="col-md-3 col-sm-6 fh5co-footer-widget wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">
							<h3>Company</h3>
							<ul className="fh5co-links">
								<li><a href="#">How it Works</a></li>
								<li><a href="#">Services</a></li>
								<li><a href="#">Products</a></li>
								<li><a href="#">Careers</a></li>
								<li><a href="#">Blog</a></li>
								<li><a href="#">Contact</a></li>
							</ul>
						</div>
						<div className="clearfix visible-sm-block"></div>
						<div className="col-md-3 col-sm-6 fh5co-footer-widget wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">
							<h3>Connect</h3>
							<ul className="fh5co-links fh5co-social">
								<li><a href="#"><i className="icon icon-facebook2"></i> Facebook</a></li>
								<li><a href="#"><i className="icon icon-twitter"></i> Twitter</a></li>
								<li><a href="#"><i className="icon icon-dribbble"></i> Dribbble</a></li>
								<li><a href="#"><i className="icon icon-instagram"></i> Instagram</a></li>
							</ul>
						</div>
						<div className="col-md-3 col-sm-6 fh5co-footer-widget wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.4s">
							<h3>About</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
							<p><a href="#" className="btn btn-success btn-sm btn-outline">I'm a button</a></p>
						</div>
						<div className="clearfix visible-sm-block"></div>
					</div>
					<div className="row fh5co-made">
						<div className="col-md-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
						</div>
					</div>
				</div>
			</div>
		);
	}
}