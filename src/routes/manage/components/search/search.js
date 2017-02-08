import React from 'react';
import TableDropDown from './components/tableDropDown.js';
import ColumnDropDown from './components/columnDropDown.js';

var ReactToastr = require('react-toastr');
var {ToastContainer} = ReactToastr;
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

class Search extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
				input: '',
				selectedTable: 'customer',
				selectedColumn: 'All',
				sqlInput: ''
			}
		this.handleChange = this.handleChange.bind(this);
		this.buildQuery = this.buildQuery.bind(this);
		this.onTableSelected = this.onTableSelected.bind(this);
		this.onColumnSelected = this.onColumnSelected.bind(this);
		this.addAlert = this.addAlert.bind(this);
		this.searchQuery = this.searchQuery.bind(this);
	}

	handleChange = ( e ) => {
		console.log(e.target);
	    this.setState({[e.target.name]: e.target.value})
	}

	searchQuery() {
			this.addSQLAlert();
		  this.props.onSearch(this.state.sqlInput);
	}

	buildQuery() {
		this.addAlert();

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
		this.props.onTableSelected(e.target.value);
	}
	onColumnSelected(e) {
		this.setState({
			selectedColumn: e.target.value
		})
	}

	addSQLAlert () {
		let quotes = ['Query executed!','The Rise. The Shine. And Oh, The Query.', 'Will you query me?', 'Query executed!', 'Query me once... Shame on you.', 'Query executed!', 'Query executed!', 'Query executed!', 'Magical Query Tim, just magical!', 'John, was that one you? Not too shabby.', 'Query executed!', 'Query executed!', 'Great Query Tim! Keep at it!', 'At this rate, Vuori will be unstoppable!', 'Query executed!', 'Query executed!', 'Query executed!', 'On fire Tim, what a wonderful query!', 'Query executed!', 'Ooo, I love how you query me!'];
		let num = Math.floor(Math.random()*quotes.length);
			if(this.props.results) {
				this.refs.container.success(
					`${quotes[num]}`,
					'Success', {
					timeOut: 1000,
					extendedTimeOut: 1500
				})
			} else {
				this.refs.container.error(
					`Can't win em all Tim. Try again!`,
					'A Huge Trumpin\' Failure', {
						timeOut: 1000,
						extendedTimeOut: 1500
					})
			}
	}
	addAlert () {
		if(this.state.selectedColumn === 'All') {
			this.refs.container.success(
				`Now displaying all ${this.state.selectedTable}s`,
				'Success', {
				timeOut: 1000,
				extendedTimeOut: 2000
			})
		} else {
				this.refs.container.success(
					`Now displaying all ${this.state.selectedColumn}s = ${this.state.input}`,
					'Success', {
					timeOut: 1000,
					extendedTimeOut: 2000
			})
		}
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

					<ToastContainer ref="container"
												toastMessageFactory={ToastMessageFactory}
												className="toast-top-right" />

					<TableDropDown onTableSelected={this.onTableSelected} tables={this.props.schema.map(param => param.tableName)} />

					<ColumnDropDown onColumnSelected={this.onColumnSelected} columns={columnValues} />

					{
						this.state.selectedColumn !== 'All'
							? (<input name="input" value={this.state.value} onChange={this.handleChange} />)
							: null}

					<button className="huge ui inverted red button" onClick={this.buildQuery}>Go!</button>
					<input placeholder="Enter custom SQL query..." name="sqlInput" value={this.state.value} onChange={this.handleChange} />

					<button className="huge ui inverted red button" onClick={this.searchQuery}>Run Query</button>
					<button className="huge ui inverted red button" onClick={this.props.onDownload}>Download as CSV</button>


			</div>
		);
	}
}
export default Search
