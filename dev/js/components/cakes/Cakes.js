import React, { Component } from 'react';

// Sub Components
import Intro from './Intro';
import ExploreTheImpossibility from "../common/ExploreTheImpossibility";

export default class Cakes extends Component {
	render() {
		return (
			<div>
				<Intro />				
				<ExploreTheImpossibility />
			</div>
		);
	}
}