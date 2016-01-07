'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _BoilerplateConstants = require('./../constants/BoilerplateConstants');

var _BoilerplateConstants2 = _interopRequireDefault(_BoilerplateConstants);

var _flux = require('flux');

var _flux2 = _interopRequireDefault(_flux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dispatcher = _flux2.default.Dispatcher;

var BoilerplateDispatcher = Object.assign(new Dispatcher(), Dispatcher.prototype, {
	handleBoilerplateAction: function handleBoilerplateAction(action) {
		console.log('BoilerplateDispatcher: handleBoilerplateAction');
		this.dispatch({
			source: _BoilerplateConstants2.default.BOILERPLATE_ACTION,
			action: action
		});
	}
});

exports.default = BoilerplateDispatcher;