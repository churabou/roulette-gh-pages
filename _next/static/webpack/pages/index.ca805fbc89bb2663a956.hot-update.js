webpackHotUpdate_N_E("pages/index",{

/***/ "./components/EditMenu.tsx":
/*!*********************************!*\
  !*** ./components/EditMenu.tsx ***!
  \*********************************/
/*! exports provided: EditMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EditMenu\", function() { return EditMenu; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icon */ \"./components/Icon.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/churabou/web/roulette-app-hp/lp/components/EditMenu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n// 衝突が回避できれば何でもよく命名にこだわりはない。\nvar menuInputId = function menuInputId(index) {\n  return \"menu-input-\".concat(index);\n};\n\nvar IconButton = function IconButton() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n    className: \"w-6 h-6 p-1 hover:bg-gray-50\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Icon__WEBPACK_IMPORTED_MODULE_4__[\"Icon\"], {\n      iconName: \"close\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = IconButton;\n\nvar Input = function Input(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", _objectSpread({\n    className: \"w-full p-2 bg-white rounded\"\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = Input;\n\nvar Flex = function Flex(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 55\n  }, _this);\n}; // const Component: FC<{\n//   slots: SlotItem[];\n//   onChange: (index: number, slot: Partial<SlotItem>) => void;\n//   onEnter: (index: number) => void;\n// }> = ({ slots, onChange, onEnter }) => (\n//   <div className=\"w-6/12 scroll-y border bg-gray-100 overflow-y-auto h-full ml-auto px-5 py-12\">\n//     <div>\n//       <Input />\n//     </div>\n//     <ul>\n//       {slots.map((s: SlotItem, i: number) => (\n//         <li key={`li-${i}`} className=\"flex items-centerpx-3 py-2\">\n//           <Input\n//             id={menuInputId(i)}\n//             value={s.text}\n//             onChange={(e) => onChange(i, { text: e.target.value })}\n//             // onKeyPress={(e) => handleKey(i, e)}\n//           />\n//           <IconButton />\n//         </li>\n//       ))}\n//     </ul>\n//   </div>\n// );\n\n\n_c3 = Flex;\nvar EditMenu = function EditMenu(_ref) {\n  _s();\n\n  var slots = _ref.slots,\n      setSlots = _ref.setSlots;\n\n  var updateSlots = function updateSlots(index, slot) {\n    setSlots(function (slots) {\n      var next = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(slots);\n\n      next[index] = _objectSpread(_objectSpread({}, next[index]), slot);\n      return next;\n    });\n  };\n\n  var addSlot = function addSlot(slots) {\n    setSlots(function (slots) {\n      var defaultSlot = {\n        text: \"\",\n        weight: 1\n      };\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(slots), [newSlot]);\n    });\n  };\n\n  var handleKey = function handleKey(i, e) {\n    if (e.key !== \"Enter\") return; // domをid指定で直接指定しているが\n    // とくにデメリットが無いので、楽している。\n\n    var nextInput = document.getElementById(menuInputId(i + 1));\n\n    if (nextInput) {\n      nextInput.focus();\n    } else {\n      var currentInput = document.getElementById(menuInputId(i));\n      currentInput.blur();\n    } // if (i + 3 > slots.length) {\n    //   addSlot();\n    // }\n\n  };\n\n  var props = {\n    onChange: updateSlots,\n    onEnter: function onEnter(index) {}\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      text = _useState[0],\n      setText = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: \"w-6/12 scroll-y border bg-gray-100 overflow-y-auto h-full ml-auto px-5 py-12\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Input, {\n        value: text,\n        onChange: function onChange(e) {\n          setText(e.target.value);\n        },\n        onKeyPress: function onKeyPress(e) {\n          if (e.key !== \"Enter\") return;\n          addSlot();\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ul\", {\n      children: slots.map(function (s, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n          className: \"flex items-centerpx-3 py-2\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Input, {\n            id: menuInputId(i),\n            value: s.text,\n            onChange: function onChange(e) {\n              return props.onChange(i, {\n                text: e.target.value\n              });\n            } // onKeyPress={(e) => handleKey(i, e)}\n\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(IconButton, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 13\n          }, _this)]\n        }, \"li-\".concat(i), true, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EditMenu, \"3t0DFnMi16eB/7p7iIKtjG5r68g=\");\n\n_c4 = EditMenu;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"IconButton\");\n$RefreshReg$(_c2, \"Input\");\n$RefreshReg$(_c3, \"Flex\");\n$RefreshReg$(_c4, \"EditMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0TWVudS50c3g/ZmRmNiJdLCJuYW1lcyI6WyJtZW51SW5wdXRJZCIsImluZGV4IiwiSWNvbkJ1dHRvbiIsIklucHV0IiwicHJvcHMiLCJGbGV4IiwiRWRpdE1lbnUiLCJzbG90cyIsInNldFNsb3RzIiwidXBkYXRlU2xvdHMiLCJzbG90IiwibmV4dCIsImFkZFNsb3QiLCJkZWZhdWx0U2xvdCIsInRleHQiLCJ3ZWlnaHQiLCJuZXdTbG90IiwiaGFuZGxlS2V5IiwiaSIsImUiLCJrZXkiLCJuZXh0SW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9jdXMiLCJjdXJyZW50SW5wdXQiLCJibHVyIiwib25DaGFuZ2UiLCJvbkVudGVyIiwidXNlU3RhdGUiLCJzZXRUZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBO0FBQ0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRDtBQUFBLDhCQUFpQ0EsS0FBakM7QUFBQSxDQUFwQjs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLHNCQUNqQjtBQUFRLGFBQVMsRUFBQyw4QkFBbEI7QUFBQSwyQkFDRSxxRUFBQywwQ0FBRDtBQUFNLGNBQVEsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGlCO0FBQUEsQ0FBbkI7O0tBQU1BLFU7O0FBTU4sSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRDtBQUFBLHNCQUNaO0FBQU8sYUFBUyxFQUFDO0FBQWpCLEtBQW1EQSxLQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFk7QUFBQSxDQUFkOztNQUFNRCxLOztBQUlOLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNELEtBQUQ7QUFBQSxz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QUNrQixDQUFELENBRGpCO0FBRUUsaUJBQUssRUFBRWdCLENBQUMsQ0FBQ3BCLElBRlg7QUFHRSxvQkFBUSxFQUFFLGtCQUFDSyxDQUFEO0FBQUEscUJBQU9mLEtBQUssQ0FBQ3VCLFFBQU4sQ0FBZVQsQ0FBZixFQUFrQjtBQUFFSixvQkFBSSxFQUFFSyxDQUFDLENBQUNZLE1BQUYsQ0FBU0M7QUFBakIsZUFBbEIsQ0FBUDtBQUFBLGFBSFosQ0FJRTs7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBT0UscUVBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUEsd0JBQWVkLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2QkQsQ0F4RU07O0dBQU1aLFE7O01BQUFBLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0VkaXRNZW51LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi9JY29uXCI7XG5pbXBvcnQgeyBTbG90SXRlbSB9IGZyb20gXCIuL1JvdWxldHRlXCI7XG5cbi8vIOihneeqgeOBjOWbnumBv+OBp+OBjeOCjOOBsOS9leOBp+OCguOCiOOBj+WRveWQjeOBq+OBk+OBoOOCj+OCiuOBr+OBquOBhOOAglxuY29uc3QgbWVudUlucHV0SWQgPSAoaW5kZXg6IG51bWJlcikgPT4gYG1lbnUtaW5wdXQtJHtpbmRleH1gO1xuXG5jb25zdCBJY29uQnV0dG9uID0gKCkgPT4gKFxuICA8YnV0dG9uIGNsYXNzTmFtZT1cInctNiBoLTYgcC0xIGhvdmVyOmJnLWdyYXktNTBcIj5cbiAgICA8SWNvbiBpY29uTmFtZT1cImNsb3NlXCIgLz5cbiAgPC9idXR0b24+XG4pO1xuXG5jb25zdCBJbnB1dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzW1wiaW5wdXRcIl0pID0+IChcbiAgPGlucHV0IGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYmctd2hpdGUgcm91bmRlZFwiIHsuLi5wcm9wc30gLz5cbik7XG5cbmNvbnN0IEZsZXggPSAocHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1tcImRpdlwiXSkgPT4gPGRpdj57fTwvZGl2PjtcblxuLy8gY29uc3QgQ29tcG9uZW50OiBGQzx7XG4vLyAgIHNsb3RzOiBTbG90SXRlbVtdO1xuLy8gICBvbkNoYW5nZTogKGluZGV4OiBudW1iZXIsIHNsb3Q6IFBhcnRpYWw8U2xvdEl0ZW0+KSA9PiB2b2lkO1xuLy8gICBvbkVudGVyOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbi8vIH0+ID0gKHsgc2xvdHMsIG9uQ2hhbmdlLCBvbkVudGVyIH0pID0+IChcbi8vICAgPGRpdiBjbGFzc05hbWU9XCJ3LTYvMTIgc2Nyb2xsLXkgYm9yZGVyIGJnLWdyYXktMTAwIG92ZXJmbG93LXktYXV0byBoLWZ1bGwgbWwtYXV0byBweC01IHB5LTEyXCI+XG4vLyAgICAgPGRpdj5cbi8vICAgICAgIDxJbnB1dCAvPlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIDx1bD5cbi8vICAgICAgIHtzbG90cy5tYXAoKHM6IFNsb3RJdGVtLCBpOiBudW1iZXIpID0+IChcbi8vICAgICAgICAgPGxpIGtleT17YGxpLSR7aX1gfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlcnB4LTMgcHktMlwiPlxuLy8gICAgICAgICAgIDxJbnB1dFxuLy8gICAgICAgICAgICAgaWQ9e21lbnVJbnB1dElkKGkpfVxuLy8gICAgICAgICAgICAgdmFsdWU9e3MudGV4dH1cbi8vICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoaSwgeyB0ZXh0OiBlLnRhcmdldC52YWx1ZSB9KX1cbi8vICAgICAgICAgICAgIC8vIG9uS2V5UHJlc3M9eyhlKSA9PiBoYW5kbGVLZXkoaSwgZSl9XG4vLyAgICAgICAgICAgLz5cbi8vICAgICAgICAgICA8SWNvbkJ1dHRvbiAvPlxuLy8gICAgICAgICA8L2xpPlxuLy8gICAgICAgKSl9XG4vLyAgICAgPC91bD5cbi8vICAgPC9kaXY+XG4vLyApO1xuXG5leHBvcnQgY29uc3QgRWRpdE1lbnUgPSAoeyBzbG90cywgc2V0U2xvdHMgfSkgPT4ge1xuICBjb25zdCB1cGRhdGVTbG90cyA9IChpbmRleDogbnVtYmVyLCBzbG90OiBQYXJ0aWFsPFNsb3RJdGVtPikgPT4ge1xuICAgIHNldFNsb3RzKChzbG90czogU2xvdEl0ZW1bXSkgPT4ge1xuICAgICAgbGV0IG5leHQgPSBbLi4uc2xvdHNdO1xuICAgICAgbmV4dFtpbmRleF0gPSB7IC4uLm5leHRbaW5kZXhdLCAuLi5zbG90IH07XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhZGRTbG90ID0gKHNsb3RzOiBQYXJ0aWFsPFNsb3RJdGVtPikgPT4ge1xuICAgIHNldFNsb3RzKChzbG90cykgPT4ge1xuICAgICAgY29uc3QgZGVmYXVsdFNsb3Q6IFNsb3RJdGVtID0ge1xuICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICB3ZWlnaHQ6IDEsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIFsuLi5zbG90cywgbmV3U2xvdF07XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlS2V5ID0gKGk6IG51bWJlciwgZTogYW55KSA9PiB7XG4gICAgaWYgKGUua2V5ICE9PSBcIkVudGVyXCIpIHJldHVybjtcbiAgICAvLyBkb23jgpJpZOaMh+WumuOBp+ebtOaOpeaMh+WumuOBl+OBpuOBhOOCi+OBjFxuICAgIC8vIOOBqOOBj+OBq+ODh+ODoeODquODg+ODiOOBjOeEoeOBhOOBruOBp+OAgealveOBl+OBpuOBhOOCi+OAglxuICAgIGNvbnN0IG5leHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lbnVJbnB1dElkKGkgKyAxKSk7XG5cbiAgICBpZiAobmV4dElucHV0KSB7XG4gICAgICBuZXh0SW5wdXQuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY3VycmVudElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVudUlucHV0SWQoaSkpO1xuICAgICAgY3VycmVudElucHV0LmJsdXIoKTtcbiAgICB9XG4gICAgLy8gaWYgKGkgKyAzID4gc2xvdHMubGVuZ3RoKSB7XG4gICAgLy8gICBhZGRTbG90KCk7XG4gICAgLy8gfVxuICB9O1xuXG4gIGNvbnN0IHByb3BzID0ge1xuICAgIG9uQ2hhbmdlOiB1cGRhdGVTbG90cyxcbiAgICBvbkVudGVyOiAoaW5kZXg6IG51bWJlcikgPT4ge30sXG4gIH07XG5cbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctNi8xMiBzY3JvbGwteSBib3JkZXIgYmctZ3JheS0xMDAgb3ZlcmZsb3cteS1hdXRvIGgtZnVsbCBtbC1hdXRvIHB4LTUgcHktMTJcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbktleVByZXNzPXsoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ICE9PSBcIkVudGVyXCIpIHJldHVybjtcbiAgICAgICAgICAgIGFkZFNsb3QoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWw+XG4gICAgICAgIHtzbG90cy5tYXAoKHM6IFNsb3RJdGVtLCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtgbGktJHtpfWB9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVycHgtMyBweS0yXCI+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgaWQ9e21lbnVJbnB1dElkKGkpfVxuICAgICAgICAgICAgICB2YWx1ZT17cy50ZXh0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHByb3BzLm9uQ2hhbmdlKGksIHsgdGV4dDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgIC8vIG9uS2V5UHJlc3M9eyhlKSA9PiBoYW5kbGVLZXkoaSwgZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEljb25CdXR0b24gLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/EditMenu.tsx\n");

/***/ })

})