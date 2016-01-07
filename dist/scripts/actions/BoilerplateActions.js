'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _BoilerplateDispatcher = require('./../dispatcher/BoilerplateDispatcher');

var _BoilerplateDispatcher2 = _interopRequireDefault(_BoilerplateDispatcher);

var _BoilerplateConstants = require('./../constants/BoilerplateConstants');

var _BoilerplateConstants2 = _interopRequireDefault(_BoilerplateConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BoilerplateActions = {

	sampleAction: function sampleAction() {
		console.log('BoilerplateActions: sample action');
		_BoilerplateDispatcher2.default.handleBoilerplateAction({
			actionType: _BoilerplateConstants2.default.SAMPLE_ACTION_TYPE
		});
	}

};

exports.default = BoilerplateActions;