import React from 'react';
import Search from './components/search.js';
import Display from './components/display.js';
import axios from 'axios';

class Manage extends React.Component {
	constructor(props) {
		super(props);
		this.search = this.search.bind(this);

		this.state = {
			schema: [],
			results: []
		}
	}

	componentWillMount() {
		axios
			.get('http://localhost:3010/api/schema')
			.then( response => {
				this.setState({
					schema: response.data
				})
			});
	}

	search(sqlQuery) {
		axios
			.post(`http://localhost:3010/api/query`, {
				query: sqlQuery
			})
			.then((response) => {
				this.setState({
					results: response.data
				})
			});
	}

	render() {
		return (
			<div className="Manage">
				<Search schema={this.state.schema} onSearch={this.search} />
				<Display results={this.state.results} />
			</div>
		);
	}
}
export default Manage