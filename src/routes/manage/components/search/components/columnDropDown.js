import React from 'react';

class ColumnDropDown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedColumn: ''
		}
	}

	onColumnSelected(e) {
		this.setState({
			selectedColumn: e.target.value
		});

		this.props.onColumnSelected(e);
	}

	render() {
		//console.log("columns: " + this.props.columns);
		return (	
			<select name="selectedColumn" value={this.state.selectedColumn} onChange={this.onColumnSelected}>
				<option>All</option>
				{
					this.props.columns.map((column, i) => (<option key={i} value={column}>{column}</option>))
				}
			</select>
		);
	}
}
export default ColumnDropDown