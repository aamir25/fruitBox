import React, { Component } from 'react';

// Sub Components
import Intro from './Intro';
import StoreDescription from '../common/StoreDescription';
import ExploreTheImpossibility from '../common/ExploreTheImpossibility';
import Creations from './Creations';
import WhyChooseUs from './WhyChooseUs';
import PricingPlan from './PricingPlan';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Intro />
				<StoreDescription />
				<Creations />
				<WhyChooseUs />
				<PricingPlan />
				<ExploreTheImpossibility />
			</div>
		);
	}
}