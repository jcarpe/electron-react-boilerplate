import React 					from 'react';
import BoilerplateConstants 	from './../constants/BoilerplateConstants';
import BoilerplateActions		from './../actions/BoilerplateActions';
import BoilerplateStore 		from './../stores/BoilerplateStore';

let BoilerplateApp = React.createClass({

	componentDidMount() {
		BoilerplateStore.addChangeListener( this._onChange );
	},

	componentWillUnmount() {
		BoilerplateStore.removeChangeListener( this._onChange );
	},

	handleBtnClick() {
		console.log( 'BoilerplateApp: btn click' );
		BoilerplateActions.sampleAction();
	},

	render() {
		return (
			<div>
			<h1>default app</h1>
			<button onClick={this.handleBtnClick}>Click</button>
			</div>
		)
	},

	_onChange() {
		console.log( 'BoilerplateApp: change received from store' );
	}
	
});

export default BoilerplateApp;