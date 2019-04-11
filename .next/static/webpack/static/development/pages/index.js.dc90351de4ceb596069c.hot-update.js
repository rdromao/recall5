webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/content/reminder.js":
/*!****************************************!*\
  !*** ./components/content/reminder.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");









var Reminder =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Reminder, _React$Component);

  function Reminder() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Reminder);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Reminder).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Reminder, [{
    key: "render",
    value: function render() {
      var _this = this;

      var isSelected = this.props.selectedReminderId === this.props.reminder.id;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: isSelected ? "reminderContainer selected" : "reminderContainer"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        onClick: function onClick() {
          return _this.props.selectReminder(isSelected ? null : _this.props.reminder.id);
        }
      }, this.props.reminder.content), isSelected && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "reminderToolbar"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        onClick: function onClick() {
          return _this.props.deleteReminder(_this.props.reminder.id);
        },
        className: "actionButton delete"
      }, "Delete")));
    }
  }]);

  return Reminder;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteReminder: function deleteReminder(reminderToDeleteId) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["deleteReminder"])(reminderToDeleteId));
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["selectReminder"])(null));
    },
    selectReminder: function selectReminder(newSelected) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["selectReminder"])(newSelected));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    selectedReminderId: state.reminders.selectedId
  };
};

Reminder = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Reminder);
/* harmony default export */ __webpack_exports__["default"] = (Reminder);

/***/ })

})
//# sourceMappingURL=index.js.dc90351de4ceb596069c.hot-update.js.map