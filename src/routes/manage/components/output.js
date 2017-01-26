import React from 'react';
import { Table } from 'react-bootstrap';


export default class Output extends React.Component {
	render() {
			return (
				<div className="Output">
						<div className="container">
								<h2>Output</h2>
									<div>
									<Table striped bordered condensed hover>
											<thead>
												<tr>
													<th>#</th>
													<th>First Name</th>
													<th>Last Name</th>
													<th>Username</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>1</td>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<td>2</td>
													<td>Cam</td>
													<td>Thornton</td>
													<td>@fat</td>
												</tr>
												<tr>
													<td>3</td>
													<td>Larry</td>
													<td>the Bird</td>
													<td>@twitter</td>
												</tr>
											</tbody>
										</Table>


									</div>
						</div>
				</div>
		);
	}
}
