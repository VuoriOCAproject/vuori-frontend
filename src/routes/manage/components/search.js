import React from 'react';
import axios from 'axios';
class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			params: [],
			selectedTable: '',
			input: ''
		}
		this.handleChange = this.handleChange.bind(this)
	}

	componentWillMount() {
		axios.get('http://localhost:3010/api/schema')
		.then( response => {
			this.setState({params: response.data,
							selectedTable: response.data[0].tableName})
		})
	}

	handleChange = ( e ) => {
	    this.setState({[e.target.name]: e.target.value})
	}

	buildQuery = () => {
		axios.post(`http://localhost:3010/api/query`, {
			query: 'select * from tests.customer'
		})
	}
	
	render() {
		return (
			<div className="Search">
				<select name="selectedTable" value={this.state.selectedTable} onChange={this.handleChange}>
					{
						this.state.params.map((param, i) => {
							return <option key={i} value={param.tableName}>
								{param.tableName}
							</option>
						})
					}
				</select>
				<select name="selectedColumn" value={this.state.selectedColumn} onChange={this.handleChange}>
					<option>All</option>
					{this.state.params
						.filter(({tableName}) => tableName === this.state.selectedTable)
						.map(({columns}) =>
							columns.map((col) =>
					<option>{col}</option>))}
				</select>
				<input name="input" value={this.state.value} onChange={this.handleChange}>
					{/*we gotta use this later {this.state.input}*/}
				</input>
				<button onClick={this.buildQuery}
>Go!
				</button>
				<button>
				+Add
				</button>
			</div>
			);
	}
}
export default Search