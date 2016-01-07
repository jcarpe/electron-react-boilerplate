import BoilerplateDispatcher 	from './../dispatcher/BoilerplateDispatcher';
import BoilerplateConstants		from './../constants/BoilerplateConstants';

let BoilerplateActions = {

	sampleAction: function () {
		console.log( 'BoilerplateActions: sample action' );
		BoilerplateDispatcher.handleBoilerplateAction({
			actionType: BoilerplateConstants.SAMPLE_ACTION_TYPE
		});
	}

};

export default BoilerplateActions;