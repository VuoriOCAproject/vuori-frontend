import React from 'react';

class Display extends React.Component {
	render() {
			return (
				<div className="Display">
					<ul>
						{this.props.results.map((result, index) => (<li>{index}</li>))}
					</ul>
				</div>
		);
	}
}
 export default Display