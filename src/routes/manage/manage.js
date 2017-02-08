import React from 'react';
import Search from './components/search/search.js';
import Display from './components/display/display.js';
import axios from 'axios';
import csv from 'to-csv';
import download from '../../lib/download';
import { PageHeader } from 'react-bootstrap';


class Manage extends React.Component {
	constructor(props) {
		super(props);
		this.search = this.search.bind(this);

		this.state = {
			schema: [],
			results: [],
			tableName: 'customer'
		}
		this.onTableSelected = this.onTableSelected.bind(this);
		this.exportCsv = this.exportCsv.bind(this);
	}
	componentWillMount() {
		axios
			.get('http://localhost:3010/api/schema')
			.then(response => {
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
					results: response.data.data
				})
			});
	}

	exportCsv() {
		var csvFile = csv(this.state.results);
		download(csvFile, `${this.state.tableName}.csv`, 'text/csv');
	}

	onTableSelected(tableName) {
		this.setState({
			tableName
		})
	}

	render() {
		return (

			<div className="Manage">
			<div className="container-fluid">
				<PageHeader style={{float: 'left'}}>Vuori Dashboard <small>The Rise. The Shine.</small></PageHeader>
				<div className="ui input error">
					<Search schema={this.state.schema} onSearch={this.search} onTableSelected={this.onTableSelected} />
				</div>
				<div className="ui horizontal divider"></div>
					<Display results={this.state.results} onDownload={this.exportCsv}/>
			</div>
			</div>
		);
	}
}
export default Manage
