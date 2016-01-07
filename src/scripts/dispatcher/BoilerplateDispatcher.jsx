import BoilerplateConstants from './../constants/BoilerplateConstants';
import Flux 				from 'flux';

let Dispatcher = Flux.Dispatcher;

let BoilerplateDispatcher = Object.assign( new Dispatcher(), Dispatcher.prototype, {

	handleBoilerplateAction( action ) {
		console.log( 'BoilerplateDispatcher: handleBoilerplateAction' );
		this.dispatch({
			source: BoilerplateConstants.BOILERPLATE_ACTION,
			action: action	
		});
	}

});

export default BoilerplateDispatcher;