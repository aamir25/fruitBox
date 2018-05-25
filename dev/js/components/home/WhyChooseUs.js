import React, { Component } from 'react';

export default class WhyChooseUs extends Component {
	render() {
		return (
			<div className="fh5co-features-style-2">
				<div className="container">
					<div className="row p-b">
						<div className="col-md-6 col-md-offset-3 text-center">
							<h2 className="fh5co-heading wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">Why Choose Us</h2>
							<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 fh5co-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">
							<div className="fh5co-icon"><i className="icon-command"></i></div>
							<div className="fh5co-desc">
								<h3>100% Organic</h3>
								<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
							</div>
						</div>	
						<div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 fh5co-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.4s">
							<div className="fh5co-icon"><i className="icon-eye22"></i></div>
							<div className="fh5co-desc">
								<h3>Door to Door del</h3>
								<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
							</div>
						</div>
						<div className="clearfix visible-sm-block visible-xs-block"></div>
						<div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 fh5co-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.7s">
							<div className="fh5co-icon"><i className="icon-toggle"></i></div>
							<div className="fh5co-desc">
								<h3>XYZ text.</h3>
								<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
							</div>
							<div className="clearfix visible-sm-block visible-xs-block"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}