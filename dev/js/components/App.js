import React, { Component } from 'react';

import Navbar from './common/Navbar';
import Footer from './common/Footer';

export default class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				{ this.props.children }
				<Footer />
			</div>
		)
	}
}