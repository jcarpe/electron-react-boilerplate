'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _BoilerplateDispatcher = require('./../dispatcher/BoilerplateDispatcher');

var _BoilerplateDispatcher2 = _interopRequireDefault(_BoilerplateDispatcher);

var _BoilerplateConstants = require('./../constants/BoilerplateConstants');

var _BoilerplateConstants2 = _interopRequireDefault(_BoilerplateConstants);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHANGE_EVENT = 'changeEvent';

var BoilerplateStore = Object.assign({}, _events2.default.prototype, {
	emitChange: function emitChange() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function removeChangeListener(callback) {
		this.removeListener(callback);
	},

	dispatcherIndex: _BoilerplateDispatcher2.default.register(function (payload) {
		var action = payload.action;

		switch (action.actionType) {
			case _BoilerplateConstants2.default.SAMPLE_ACTION_TYPE:
				console.log('BoilerplateStore: store receives action, fires change');
				BoilerplateStore.emitChange();
				break;
		}

		return true;
	})

});

exports.default = BoilerplateStore;