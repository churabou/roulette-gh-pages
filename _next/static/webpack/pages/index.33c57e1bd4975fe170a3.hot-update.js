webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Roulette.tsx":
/*!*********************************!*\
  !*** ./components/Roulette.tsx ***!
  \*********************************/
/*! exports provided: Roulette, Wheel, convertItem, initialItem, hitItem, rotateAngle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Roulette\", function() { return Roulette; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wheel\", function() { return Wheel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertItem\", function() { return convertItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialItem\", function() { return initialItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hitItem\", function() { return hitItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rotateAngle\", function() { return rotateAngle; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _svgUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svgUtil */ \"./components/svgUtil.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/churabou/web/roulette-app-hp/lp/components/Roulette.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar Roulette = function Roulette(_ref) {\n  var slots = _ref.slots;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: \"500px relative\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Wheel, {\n      id: \"roulette\",\n      slots: slots\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Frame, {\n      className: \"absolute top-0 left-0\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, _this);\n};\n_c = Roulette;\nvar Wheel = function Wheel(_ref2) {\n  var slots = _ref2.slots,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"slots\"]);\n\n  // console.log(slots);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"svg\", _objectSpread(_objectSpread({\n    viewBox: \"-100 -100 200 200\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, rest), {}, {\n    children: [slots.map(function (s, i) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"path\", {\n        d: Object(_svgUtil__WEBPACK_IMPORTED_MODULE_4__[\"describeArc\"])(0, 0, 80, s.startAngle, s.endAngle),\n        fill: s.background,\n        stroke: \"white\",\n        strokeWidth: \"1\"\n      }, \"path-\".concat(i), false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this);\n    }), slots.map(function (s, i) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"text\", {\n        fill: \"white\" // 90 + reg/2\n        ,\n        fontSize: 8,\n        transform: \"rotate(\".concat(90 + (s.startAngle + s.endAngle) / 2, \") translate(-\").concat(80 - 5, \",0)\"),\n        textAnchor: \"start\",\n        dominantBaseline: \"central\",\n        children: s.text\n      }, \"text-\".concat(i), false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this);\n    })]\n  }), void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this);\n};\n_c2 = Wheel;\n\nvar Frame = function Frame(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"svg\", _objectSpread(_objectSpread({\n    viewBox: \"-100 -100 200 200\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, props), {}, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"path\", {\n      d: \"M -5 -90  L 0 -80 L 5,-90 Z\",\n      fill: \"red\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 5\n    }, _this)\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 3\n  }, _this);\n};\n\n_c3 = Frame;\nvar colors = [\"#F56565\", \"#4FD1C5\", \"#B794F4\", \"#68D391\", \"#F6AD55\"];\nfunction convertItem(items) {\n  var weightSum = items.reduce(function (acc, item) {\n    return acc + item.weight;\n  }, 0);\n  var baseAngle = 360 / weightSum;\n  var startAngle = 0;\n  var result = [];\n  items.forEach(function (item, i) {\n    var slot = {\n      text: item.text,\n      background: colors[i % colors.length],\n      startAngle: startAngle,\n      endAngle: startAngle + baseAngle * item.weight\n    };\n    result.push(slot);\n    startAngle = slot.endAngle;\n  });\n  return result;\n}\nvar initialItem = [{\n  text: \"トマト\",\n  weight: 1\n}, {\n  text: \"キャベツ\",\n  weight: 1\n}, {\n  text: \"にんじん\",\n  weight: 1\n}, {\n  text: \"たまねぎ\",\n  weight: 1\n}, {\n  text: \"じゃがいも\",\n  weight: 1\n}]; // class Roulette {\n//   private slots: Slot[]\n// }\n\nfunction hitItem(items) {\n  // const box: number[] = items\n  //   .map((item: SlotItem, index: number) => Array(item.weight).fill(index))\n  //   .flat();\n  // const rand = Math.floor(Math.random() * box.length - 1);\n  // return box[rand];\n  return Math.floor(Math.random() * items.length);\n} // index base\n\nfunction rotateAngle(items, index) {\n  var converted = convertItem(items);\n  var _converted$index = converted[index],\n      startAngle = _converted$index.startAngle,\n      endAngle = _converted$index.endAngle;\n  return Math.random() * (endAngle - startAngle) + startAngle;\n  return (startAngle + endAngle) / 2; // 抽選結果のルーレットの角度を決める。\n  // ぎりぎりになるのを防ぐため、前後3度のレンジで決める。\n}\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Roulette\");\n$RefreshReg$(_c2, \"Wheel\");\n$RefreshReg$(_c3, \"Frame\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb3VsZXR0ZS50c3g/YWI5YSJdLCJuYW1lcyI6WyJSb3VsZXR0ZSIsInNsb3RzIiwiV2hlZWwiLCJyZXN0IiwibWFwIiwicyIsImkiLCJkZXNjcmliZUFyYyIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsImJhY2tncm91bmQiLCJ0ZXh0IiwiRnJhbWUiLCJwcm9wcyIsImNvbG9ycyIsImNvbnZlcnRJdGVtIiwiaXRlbXMiLCJ3ZWlnaHRTdW0iLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwid2VpZ2h0IiwiYmFzZUFuZ2xlIiwicmVzdWx0IiwiZm9yRWFjaCIsInNsb3QiLCJsZW5ndGgiLCJwdXNoIiwiaW5pdGlhbEl0ZW0iLCJoaXRJdGVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicm90YXRlQW5nbGUiLCJpbmRleCIsImNvbnZlcnRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTTyxJQUFNQSxRQUVYLEdBQUcsU0FGUUEsUUFFUixPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ2xCLHNCQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUEsNEJBQ0UscUVBQUMsS0FBRDtBQUFPLFFBQUUsRUFBQyxVQUFWO0FBQXFCLFdBQUssRUFBRUE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsS0FBRDtBQUFPLGVBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQVRNO0tBQU1ELFE7QUFlTixJQUFNRSxLQUFxQixHQUFHLFNBQXhCQSxLQUF3QixRQUF3QjtBQUFBLE1BQXJCRCxLQUFxQixTQUFyQkEsS0FBcUI7QUFBQSxNQUFYRSxJQUFXOztBQUMzRDtBQUNBLHNCQUNFO0FBQ0UsV0FBTyxFQUFDLG1CQURWO0FBRUUsU0FBSyxFQUFD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TSxFQUFFO0FBRlYsQ0FUcUMsRUFhckM7QUFDRVYsTUFBSSxFQUFFLE1BRFI7QUFFRVUsUUFBTSxFQUFFO0FBRlYsQ0FicUMsRUFpQnJDO0FBQ0VWLE1BQUksRUFBRSxPQURSO0FBRUVVLFFBQU0sRUFBRTtBQUZWLENBakJxQyxDQUFoQyxDLENBdUJQO0FBQ0E7QUFDQTs7QUFFTyxTQUFTUSxPQUFULENBQWlCYixLQUFqQixFQUE0QztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBT2MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQmhCLEtBQUssQ0FBQ1UsTUFBakMsQ0FBUDtBQUNELEMsQ0FFRDs7QUFDTyxTQUFTTyxXQUFULENBQXFCakIsS0FBckIsRUFBd0NrQixLQUF4QyxFQUErRDtBQUNwRSxNQUFNQyxTQUFTLEdBQUdwQixXQUFXLENBQUNDLEtBQUQsQ0FBN0I7QUFEb0UseUJBRW5DbUIsU0FBUyxDQUFDRCxLQUFELENBRjBCO0FBQUEsTUFFNUQxQixVQUY0RCxvQkFFNURBLFVBRjREO0FBQUEsTUFFaERDLFFBRmdELG9CQUVoREEsUUFGZ0Q7QUFJcEUsU0FBT3FCLElBQUksQ0FBQ0UsTUFBTCxNQUFpQnZCLFFBQVEsR0FBR0QsVUFBNUIsSUFBMENBLFVBQWpEO0FBQ0EsU0FBTyxDQUFDQSxVQUFVLEdBQUdDLFFBQWQsSUFBMEIsQ0FBakMsQ0FMb0UsQ0FNcEU7QUFDQTtBQUNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Sb3VsZXR0ZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRlc2NyaWJlQXJjIH0gZnJvbSBcIi4vc3ZnVXRpbFwiO1xuXG5pbnRlcmZhY2UgU2xvdCB7XG4gIHRleHQ6IHN0cmluZztcbiAgYmFja2dyb3VuZDogc3RyaW5nO1xuICBzdGFydEFuZ2xlOiBudW1iZXI7XG4gIGVuZEFuZ2xlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBSb3VsZXR0ZTogRkM8e1xuICBzbG90czogU2xvdFtdO1xufT4gPSAoeyBzbG90cyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCI1MDBweCByZWxhdGl2ZVwiPlxuICAgICAgPFdoZWVsIGlkPVwicm91bGV0dGVcIiBzbG90cz17c2xvdHN9IC8+XG4gICAgICA8RnJhbWUgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbnR5cGUgV2hlZWxQcm9wcyA9IHtcbiAgc2xvdHM6IFNsb3RbXTtcbn0gJiBKU1guSW50cmluc2ljRWxlbWVudHNbXCJzdmdcIl07XG5cbmV4cG9ydCBjb25zdCBXaGVlbDogRkM8V2hlZWxQcm9wcz4gPSAoeyBzbG90cywgLi4ucmVzdCB9KSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKHNsb3RzKTtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB2aWV3Qm94PVwiLTEwMCAtMTAwIDIwMCAyMDBcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICB7c2xvdHMubWFwKChzLCBpKSA9PiAoXG4gICAgICAgIDxwYXRoXG4gICAgICAgICAga2V5PXtgcGF0aC0ke2l9YH1cbiAgICAgICAgICBkPXtkZXNjcmliZUFyYygwLCAwLCA4MCwgcy5zdGFydEFuZ2xlLCBzLmVuZEFuZ2xlKX1cbiAgICAgICAgICBmaWxsPXtzLmJhY2tncm91bmR9XG4gICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiXG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICAgIHtzbG90cy5tYXAoKHMsIGkpID0+IChcbiAgICAgICAgPHRleHRcbiAgICAgICAgICBrZXk9e2B0ZXh0LSR7aX1gfVxuICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgLy8gOTAgKyByZWcvMlxuICAgICAgICAgIGZvbnRTaXplPXs4fVxuICAgICAgICAgIHRyYW5zZm9ybT17YHJvdGF0ZSgke1xuICAgICAgICAgICAgOTAgKyAocy5zdGFydEFuZ2xlICsgcy5lbmRBbmdsZSkgLyAyXG4gICAgICAgICAgfSkgdHJhbnNsYXRlKC0kezgwIC0gNX0sMClgfVxuICAgICAgICAgIHRleHRBbmNob3I9XCJzdGFydFwiXG4gICAgICAgICAgZG9taW5hbnRCYXNlbGluZT1cImNlbnRyYWxcIlxuICAgICAgICA+XG4gICAgICAgICAge3MudGV4dH1cbiAgICAgICAgPC90ZXh0PlxuICAgICAgKSl9XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5jb25zdCBGcmFtZTogRkM8SlNYLkludHJpbnNpY0VsZW1lbnRzW1wic3ZnXCJdPiA9IChwcm9wcykgPT4gKFxuICA8c3ZnXG4gICAgdmlld0JveD1cIi0xMDAgLTEwMCAyMDAgMjAwXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8cGF0aCBkPVwiTSAtNSAtOTAgIEwgMCAtODAgTCA1LC05MCBaXCIgZmlsbD1cInJlZFwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGludGVyZmFjZSBTbG90SXRlbSB7XG4gIHRleHQ6IHN0cmluZztcbiAgd2VpZ2h0OiBudW1iZXI7XG59XG5cbmNvbnN0IGNvbG9ycyA9IFtcIiNGNTY1NjVcIiwgXCIjNEZEMUM1XCIsIFwiI0I3OTRGNFwiLCBcIiM2OEQzOTFcIiwgXCIjRjZBRDU1XCJdO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEl0ZW0oaXRlbXM6IFNsb3RJdGVtW10pOiBTbG90W10ge1xuICBjb25zdCB3ZWlnaHRTdW0gPSBpdGVtcy5yZWR1Y2UoXG4gICAgKGFjYzogbnVtYmVyLCBpdGVtOiBTbG90SXRlbSkgPT4gYWNjICsgaXRlbS53ZWlnaHQsXG4gICAgMFxuICApO1xuXG4gIGNvbnN0IGJhc2VBbmdsZSA9IDM2MCAvIHdlaWdodFN1bTtcbiAgbGV0IHN0YXJ0QW5nbGUgPSAwO1xuICBjb25zdCByZXN1bHQ6IFNsb3RbXSA9IFtdO1xuICBpdGVtcy5mb3JFYWNoKChpdGVtOiBTbG90SXRlbSwgaTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3Qgc2xvdCA9IHtcbiAgICAgIHRleHQ6IGl0ZW0udGV4dCxcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yc1tpICUgY29sb3JzLmxlbmd0aF0sXG4gICAgICBzdGFydEFuZ2xlOiBzdGFydEFuZ2xlLFxuICAgICAgZW5kQW5nbGU6IHN0YXJ0QW5nbGUgKyBiYXNlQW5nbGUgKiBpdGVtLndlaWdodCxcbiAgICB9O1xuICAgIHJlc3VsdC5wdXNoKHNsb3QpO1xuICAgIHN0YXJ0QW5nbGUgPSBzbG90LmVuZEFuZ2xlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxJdGVtOiBTbG90SXRlbVtdID0gW1xuICB7XG4gICAgdGV4dDogXCLjg4jjg57jg4hcIixcbiAgICB3ZWlnaHQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIuOCreODo+ODmeODhFwiLFxuICAgIHdlaWdodDogMSxcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwi44Gr44KT44GY44KTXCIsXG4gICAgd2VpZ2h0OiAxLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCLjgZ/jgb7jga3jgY5cIixcbiAgICB3ZWlnaHQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIuOBmOOCg+OBjOOBhOOCglwiLFxuICAgIHdlaWdodDogMSxcbiAgfSxcbl07XG5cbi8vIGNsYXNzIFJvdWxldHRlIHtcbi8vICAgcHJpdmF0ZSBzbG90czogU2xvdFtdXG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBoaXRJdGVtKGl0ZW1zOiBTbG90SXRlbVtdKTogbnVtYmVyIHtcbiAgLy8gY29uc3QgYm94OiBudW1iZXJbXSA9IGl0ZW1zXG4gIC8vICAgLm1hcCgoaXRlbTogU2xvdEl0ZW0sIGluZGV4OiBudW1iZXIpID0+IEFycmF5KGl0ZW0ud2VpZ2h0KS5maWxsKGluZGV4KSlcbiAgLy8gICAuZmxhdCgpO1xuICAvLyBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm94Lmxlbmd0aCAtIDEpO1xuICAvLyByZXR1cm4gYm94W3JhbmRdO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaXRlbXMubGVuZ3RoKTtcbn1cblxuLy8gaW5kZXggYmFzZVxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZUFuZ2xlKGl0ZW1zOiBTbG90SXRlbVtdLCBpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgY29udmVydGVkID0gY29udmVydEl0ZW0oaXRlbXMpO1xuICBjb25zdCB7IHN0YXJ0QW5nbGUsIGVuZEFuZ2xlIH0gPSBjb252ZXJ0ZWRbaW5kZXhdO1xuXG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKGVuZEFuZ2xlIC0gc3RhcnRBbmdsZSkgKyBzdGFydEFuZ2xlO1xuICByZXR1cm4gKHN0YXJ0QW5nbGUgKyBlbmRBbmdsZSkgLyAyO1xuICAvLyDmir3pgbjntZDmnpzjga7jg6vjg7zjg6zjg4Pjg4jjga7op5LluqbjgpLmsbrjgoHjgovjgIJcbiAgLy8g44GO44KK44GO44KK44Gr44Gq44KL44Gu44KS6Ziy44GQ44Gf44KB44CB5YmN5b6MM+W6puOBruODrOODs+OCuOOBp+axuuOCgeOCi+OAglxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Roulette.tsx\n");

/***/ })

})