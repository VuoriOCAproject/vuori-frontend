import React from 'react';
import Search from './components/search.js';
import Display from './components/display.js';

class Manage extends React.Component {
	render() {
		return (
			<div className="Manage">
				<Search />
				<Display />
			</div>
		);
	}
}
export default Manage