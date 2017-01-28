import React from 'react';

import axios from 'axios';

class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			Params: [],
			ColumnParams: []
		}
	}
	componentWillMount() {
		axios.get('http://localhost:3010/api/schema')
		.then( response => {
			this.setState({Params: response.data})
		})
	}

	

	render() {
		return (
			<div className="Search">
				<select>{this.state.Params.map((param, i) =>
					<option key={i}>{param.tableName}</option>)}
				</select>
				<select>{this.state.Params.filter(tn => tn === "customer").map(param =>
					<option>{param}</option>)}



					
				
				</select>
				<input>
				</input>
				<select>
				</select>
				<button>
				Go!
				</button>
			</div>
			);
	}
}
export default Search