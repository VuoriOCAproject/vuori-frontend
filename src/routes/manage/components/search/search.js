import React from 'react';
import TableDropDown from './components/tableDropDown.js';
import ColumnDropDown from './components/columnDropDown.js';

class Search extends React.Component {
	constructor(props) {
		super(props)
			this.state = {
				input: '',
				selectedTable: 'customer',
				selectedColumn: 'All'
			}

		this.handleChange = this.handleChange.bind(this);
		this.buildQuery = this.buildQuery.bind(this);
		this.onTableSelected = this.onTableSelected.bind(this);
		this.onColumnSelected = this.onColumnSelected.bind(this);
	}

	handleChange = ( e ) => {
		console.log(e.target);

	    this.setState({[e.target.name]: e.target.value})
	}

	buildQuery() {
		if(this.state.selectedColumn === 'All') {
			this.props.onSearch(`select * from tests.${this.state.selectedTable}`);
		} else {
			this.props.onSearch(`select * from tests.${this.state.selectedTable} where ${this.state.selectedColumn} = '${this.state.input}'`);
		}
	}
	onTableSelected(e) {
		this.setState({
			selectedTable: e.target.value,
			selectedColumn: 'All'
		})	
	}
	onColumnSelected(e) {
		this.setState({
			selectedColumn: e.target.value
		})
	}
	
				
	render() {

		const columnValues =
					this
					.props
					.schema
					.filter(({tableName}) => tableName === this.state.selectedTable)[0] &&
					this
					.props
					.schema
					.filter(({tableName}) => tableName === this.state.selectedTable)[0].columns || []

		console.log("schema: " + JSON.stringify(this.props.schema));
		
		return (

			<div className="Search" style={{float: 'left'}}>
				
				<TableDropDown onTableSelected={this.onTableSelected} tables={this.props.schema.map(param => param.tableName)} />
				
				<ColumnDropDown onColumnSelected={this.onColumnSelected} columns={columnValues} />
				<input name="input" value={this.state.value} onChange={this.handleChange} />
				
				<button className="huge ui inverted red button" onClick={this.buildQuery}>Go!</button>
			</div>
		);
	}
}
export default Search