"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InlineContainer = (function (_React$Component) {
  _inherits(InlineContainer, _React$Component);

  function InlineContainer() {
    _classCallCheck(this, InlineContainer);

    _get(Object.getPrototypeOf(InlineContainer.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(InlineContainer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(InlineEdit, null),
        React.createElement(InlineEdit, { text: "More Words" }),
        React.createElement(InlineEdit, { text: "Default to Edit", editing: true })
      );
    }
  }]);

  return InlineContainer;
})(React.Component);

var InlineEdit = (function (_React$Component2) {
  _inherits(InlineEdit, _React$Component2);

  function InlineEdit(props) {
    var _this = this;

    _classCallCheck(this, InlineEdit);

    _get(Object.getPrototypeOf(InlineEdit.prototype), "constructor", this).call(this, props);

    this._editElement = function () {
      _this.setState({ editing: true }, function () {
        // Focus and select all text
        $(_this.refs.textField.getDOMNode()).select();
      });
    };

    this._keyAction = function (e) {
      if (e.keyCode === 13) {
        // Enter to save
        _this.setState({ text: e.target.value, editing: false });
      } else if (e.keyCode === 27) {
        // ESC to cancel
        _this.setState({ editing: false });
      }
    };

    this._renderElement = function () {
      if (_this.state.editing) {
        return React.createElement(
          "div",
          null,
          React.createElement("input", {
            type: "text",
            onKeyDown: _this._keyAction,
            defaultValue: _this.state.text,
            ref: "textField" })
        );
      } else {
        return React.createElement(
          "div",
          { onDoubleClick: _this._editElement },
          _this.state.text
        );
      }
    };

    this.state = {
      editing: props.editing,
      text: props.text
    };
  }

  _createClass(InlineEdit, [{
    key: "render",
    value: function render() {
      return this._renderElement();
    }
  }], [{
    key: "propTypes",
    value: {
      text: React.PropTypes.string,
      editing: React.PropTypes.bool
    },
    enumerable: true
  }, {
    key: "defaultProps",
    value: {
      text: "Some Words",
      editing: false
    },
    enumerable: true
  }]);

  return InlineEdit;
})(React.Component);
