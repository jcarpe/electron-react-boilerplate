import BoilerplateDispatcher 	from './../dispatcher/BoilerplateDispatcher';
import BoilerplateConstants		from './../constants/BoilerplateConstants';
import EventEmitter 			from 'events';

let CHANGE_EVENT = 'changeEvent';

let BoilerplateStore = Object.assign( {}, EventEmitter.prototype, {

	emitChange() {
		this.emit( CHANGE_EVENT );
	},

	addChangeListener( callback ) {
		this.on( CHANGE_EVENT, callback );
	},

	removeChangeListener( callback ) {
		this.removeListener( callback );
	},

	dispatcherIndex: BoilerplateDispatcher.register( function( payload ) {
		let action = payload.action;

		switch( action.actionType ) {
			case BoilerplateConstants.SAMPLE_ACTION_TYPE:
				console.log( 'BoilerplateStore: store receives action, fires change' );
				BoilerplateStore.emitChange();
				break;
		}

		return true;
	})

});

export default BoilerplateStore;