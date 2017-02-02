import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			input: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.buildQuery = this.buildQuery.bind(this);
	}

	handleChange = ( e ) => {
	    this.setState({[e.target.name]: e.target.value})
	}

	buildQuery() {
		this.props.onSearch('select * from tests.customer');
	}
	
	render() {
		
		return (
			<div className="Search">
				<select name="selectedTable" value={this.state.selectedTable} onChange={this.handleChange}>
					{
						this
							.props
							.schema
							.map((param, i) => <option key={i} value={param.tableName}>{param.tableName}</option>)
					}
				</select>
				<select name="selectedColumn" value={this.state.selectedColumn} onChange={this.handleChange}>
					<option>All</option>
					{
						this
							.props
							.schema
							.filter(({tableName}) => tableName === this.state.selectedTable)
							.map(({columns}) => columns.map(col => <option>{col}</option>))
					}
				</select>
				<input name="input" value={this.state.value} onChange={this.handleChange} />
				<button onClick={this.buildQuery}>Go!</button>
				<button>+Add</button>
			</div>
		);
	}
}
export default Search