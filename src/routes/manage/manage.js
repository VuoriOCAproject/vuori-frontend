import React from 'react';
import Input from './components/input.js';
import Output from './components/output.js';
import { Button } from 'react-bootstrap';

export default class Manage extends React.Component {
	render() {
		return (
			<div className="Manage">
					<div className="row">
							<div>
									<Input/>
								<br/>
								<Button bsStyle="primary">Go</Button>
								

							</div>
							<div>
									<Output/>
							</div>
					</div>
			</div>
		);
	}
}
