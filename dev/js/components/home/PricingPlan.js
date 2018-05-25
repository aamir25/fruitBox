import React, { Component } from 'react';

export default class PricingPlan extends Component {
	render() {
		return (
			<div className="fh5co-pricing-style-2">
				<div className="container">
					<div className="row">
						<div className="row p-b">
							<div className="col-md-6 col-md-offset-3 text-center">
								<h2 className="fh5co-heading wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">Pricing Plans</h2>
								<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="pricing">
			            <div className="pricing-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">
			                 <h3 className="pricing-title">Basic</h3>
			                 <p className="pricing-sentence">Little description here</p>
			                 <div className="pricing-price"><span className="pricing-currency">$</span>19<span className="pricing-period">/ month</span></div>
			                 <ul className="pricing-feature-list">
			                     <li className="pricing-feature">10 presentations/month</li>
			                     <li className="pricing-feature">Support at $25/hour</li>
			                     <li className="pricing-feature">1 campaign/month</li>
			                 </ul>
			                 <button className="btn btn-success btn-outline">Choose plan</button>
			             </div>
			             <div className="pricing-item pricing-item--featured wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.4s">
			                 <h3 className="pricing-title">Standard</h3>
			                 <p className="pricing-sentence">Little description here</p>
			                 <div className="pricing-price"><span className="pricing-currency">$</span>29<span className="pricing-period">/ month</span></div>
			                 <ul className="pricing-feature-list">
			                     <li className="pricing-feature">50 presentations/month</li>
			                     <li className="pricing-feature">5 hours of free support</li>
			                     <li className="pricing-feature">10 campaigns/month</li>
			                 </ul>
			                 <button className="btn btn-success btn-lg">Choose plan</button>
			             </div>
			             <div className="pricing-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.7s">
			                 <h3 className="pricing-title">Enterprise</h3>
			                 <p className="pricing-sentence">Little description here</p>
			                 <div className="pricing-price"><span className="pricing-currency">$</span>79<span className="pricing-period">/ month</span></div>
			                 <ul className="pricing-feature-list">
			                     <li className="pricing-feature">Unlimited presentations</li>
			                     <li className="pricing-feature">Unlimited support</li>
			                     <li className="pricing-feature">Unlimited campaigns</li>
			                 </ul>
			                 <button className="btn btn-success btn-outline">Choose plan</button>
			             </div>
			         </div>
			      </div>
				</div>
			</div>
		);
	}
}