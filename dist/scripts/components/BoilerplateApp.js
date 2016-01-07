'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BoilerplateConstants = require('./../constants/BoilerplateConstants');

var _BoilerplateConstants2 = _interopRequireDefault(_BoilerplateConstants);

var _BoilerplateActions = require('./../actions/BoilerplateActions');

var _BoilerplateActions2 = _interopRequireDefault(_BoilerplateActions);

var _BoilerplateStore = require('./../stores/BoilerplateStore');

var _BoilerplateStore2 = _interopRequireDefault(_BoilerplateStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BoilerplateApp = _react2.default.createClass({
	displayName: 'BoilerplateApp',
	componentDidMount: function componentDidMount() {
		_BoilerplateStore2.default.addChangeListener(this._onChange);
	},
	componentWillUnmount: function componentWillUnmount() {
		_BoilerplateStore2.default.removeChangeListener(this._onChange);
	},
	handleBtnClick: function handleBtnClick() {
		console.log('BoilerplateApp: btn click');
		_BoilerplateActions2.default.sampleAction();
	},
	render: function render() {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'h1',
				null,
				'default app'
			),
			_react2.default.createElement(
				'button',
				{ onClick: this.handleBtnClick },
				'Click'
			)
		);
	},
	_onChange: function _onChange() {
		console.log('BoilerplateApp: change received from store');
	}
});

exports.default = BoilerplateApp;