import React from 'react';
import { SplitButton, MenuItem, Button, InputGroup, FormControl, FormGroup  } from 'react-bootstrap';
import axios from 'axios';

export default class Input extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentWillMount() {
		axios.get('http://localhost:3000')
		.then( response => {
			this.setState({customerParams: response.data.data})
		})
	}
	render() {
			return (

					<div className="Input">
						<h2>Input</h2>
						<div className="container">
								<div className="row">
												<div className="col-xs-2">
														<SplitButton title="Dropdown right" pullRight id="split-button-pull-right">
																<MenuItem eventKey="1">Customers</MenuItem>
																<MenuItem eventKey="2">Products</MenuItem>
																<MenuItem eventKey="3">Orders</MenuItem>
																<MenuItem eventKey="4">Order Line Items</MenuItem>
														</SplitButton>
													</div>
													<div className="col-xs-2">
														<SplitButton title="Dropdown right" pullRight id="split-button-pull-right">
																<MenuItem eventKey="1">Customers</MenuItem>
																<MenuItem eventKey="2">Products</MenuItem>
																<MenuItem eventKey="3">Orders</MenuItem>
																<MenuItem eventKey="4">Order Line Items</MenuItem>
														</SplitButton>
													</div>
													<div className="col-xs-2">
														    <FormGroup>
														      <InputGroup>
														        <FormControl value={this.state.} type="text" />
														      </InputGroup>
														    </FormGroup>
													</div>
													<div className="col-xs-2">
															<SplitButton title="Dropdown right" pullRight id="split-button-pull-right">
																	<MenuItem eventKey="1">Customers</MenuItem>
																	<MenuItem eventKey="2">Products</MenuItem>
																	<MenuItem eventKey="3">Orders</MenuItem>
																	<MenuItem eventKey="4">Order Line Items</MenuItem>
															</SplitButton>
													</div>
													<div className="col-xs-2">
															<Button bsStyle="primary">+</Button>
													</div>
											</div>
									</div>
							</div>

		);
	}
}
