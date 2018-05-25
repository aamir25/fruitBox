import React, { Component } from 'react';

import Navbar from './common/Navbar';
import Footer from './common/Footer';
import HappyCustomer from './common/HappyCustomer';
import Counter from './common/Counter';
import ExploreTheImpossibility from './common/ExploreTheImpossibility';

export default class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				{ this.props.children }
				<ExploreTheImpossibility />
				<Counter />
				<HappyCustomer />
				<Footer />
			</div>
		)
	}
}