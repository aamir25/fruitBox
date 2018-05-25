import React, { Component } from 'react';

// Sub Components
import Intro from './Intro';
import StoreDescription from '../common/StoreDescription';
import Creations from './Creations';
import Extra from './Extra';
import WhyChooseUs from './WhyChooseUs';
import PricingPlan from './PricingPlan';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Intro />
				<StoreDescription />
				<Creations />
				<Extra />
				<WhyChooseUs />
				<PricingPlan />
			</div>
		);
	}
}