import React, { Component } from 'react';

export default class Counter extends Component {
	render() {
		return (
			<div className="fh5co-counter-style-2" style={{"backgroundImage": "url(../images/full_2.jpg)"}} data-stellar-background-ratio="0.5">
				<div className="fh5co-overlay"></div>
				<div className="container">
					<div className="fh5co-section-content-wrap">
						<div className="fh5co-section-content">
							<div className="row">
								<div className="col-md-4 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
									<div className="icon">
										<i className="icon-command"></i>
									</div>
									<span className="fh5co-counter js-counter" data-from="0" data-to="28" data-speed="5000" data-refresh-interval="50"></span>
									<span className="fh5co-counter-label">Clients Worked With</span>
									
								</div>
								<div className="col-md-4 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">
									<div className="icon">
										<i className="icon-power"></i>
									</div>
									<span className="fh5co-counter js-counter" data-from="0" data-to="57" data-speed="5000" data-refresh-interval="50"></span>
									<span className="fh5co-counter-label">Completed Projects</span>
								</div>
								<div className="col-md-4 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">
									<div className="icon">
										<i className="icon-code2"></i>
									</div>
									<span className="fh5co-counter js-counter" data-from="0" data-to="34023" data-speed="5000" data-refresh-interval="50"></span>
									<span className="fh5co-counter-label">Line of Codes</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}