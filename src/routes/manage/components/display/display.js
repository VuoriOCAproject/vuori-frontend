import React from 'react';
import Table from './components/table.js';
import { Button } from 'react-bootstrap';

class Display extends React.Component {

	render() {
			return (
				<div className="Display">
						<Table results={this.props.results} />
						<button className="huge ui inverted red button" onClick={this.props.onDownload}>Download as CSV</button>
				</div>
		);
	}
}
 export default Display
