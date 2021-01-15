webpackHotUpdate_N_E("pages/roulette",{

/***/ "./pages/roulette.tsx":
/*!****************************!*\
  !*** ./pages/roulette.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Roulette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Roulette */ \"./components/Roulette.tsx\");\n/* harmony import */ var _components_EditMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/EditMenu */ \"./components/EditMenu.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _components_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/IconButton */ \"./components/IconButton.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/churabou/web/roulette-app-hp/lp/pages/roulette.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n // max-width: 70vh 的なのがtailwindにない。\n// 1. そもそも指定するシチュー絵ションが少ない\n// 2. 別の解決法が一般的\n// 3. tailwindが微妙\n// const ContentWrapper = styled.div`\n//   width: 80%;\n//   max-width: 75vh;\n//   @media screen and (max-width: 768px) {\n//     width: 100%;\n//     max-width: 100%;\n//   }\n// `;\n\nvar RouletteView = function RouletteView() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(_components_Roulette__WEBPACK_IMPORTED_MODULE_4__[\"initialItem\"]),\n      slots = _useState[0],\n      setSlots = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      showEditMenu = _useState2[0],\n      setShowEditMenu = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      playing = _useState3[0],\n      setPlaying = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      result = _useState4[0],\n      setResult = _useState4[1];\n\n  var startRoulette = function startRoulette() {\n    if (playing) return;\n    setPlaying(true);\n    var roulette = document.getElementById(\"roulette\");\n    var result = Object(_components_Roulette__WEBPACK_IMPORTED_MODULE_4__[\"hitItem\"])(slots);\n    var animationToAngle = Object(_components_Roulette__WEBPACK_IMPORTED_MODULE_4__[\"rotateAngle\"])(slots, result);\n    var anim = roulette.animate([{\n      transform: \"rotate(0deg)\",\n      offset: 0\n    }, {\n      transform: \"rotate(\".concat(-animationToAngle + 3600, \"deg)\"),\n      offset: 1\n    }], {\n      duration: 3050,\n      easing: \"cubic-bezier(0.42, 0, 0.58, 1)\",\n      fill: \"forwards\"\n    });\n\n    anim.onfinish = function () {\n      setPlaying(false);\n      setResult(slots[result]);\n    };\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Flex\"], {\n    direction: \"column\",\n    h: \"100vh\",\n    bg: \"gray.50\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Flex\"], {\n      as: \"header\",\n      align: \"center\",\n      bg: \"white\",\n      p: \"md\",\n      h: \"60px\",\n      borderBottom: \"1px\",\n      borderColor: \"gray.400\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Heading\"], {\n        as: \"h1\",\n        color: \"gray.800\",\n        fontSize: \"20px\",\n        children: \"WEB \\u30EB\\u30FC\\u30EC\\u30C3\\u30C8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Spacer\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_IconButton__WEBPACK_IMPORTED_MODULE_7__[\"IconButton\"], {\n        size: \"sm\",\n        \"aria-label\": \"Toggle menu\",\n        onClick: function onClick() {\n          return setShowEditMenu(function (prev) {\n            return !prev;\n          });\n        },\n        name: showEditMenu ? \"close\" : \"menu\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Flex\"], {\n      w: \"100%\",\n      h: \"full\" // FIXME: コンテンツがはみ出ないようにしたい。\n      // 今はやり方がよく分からずheaderに高さを指定している。\n      ,\n      maxH: \"calc(100% - 60px)\",\n      flexGrow: 0,\n      position: \"relative\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Center\"], {\n        w: \"100%\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {\n          w: [\"100vw\", \"100vw\", \"80vh\", \"80vh\"],\n          p: \"xl\",\n          bg: \"white\",\n          rounded: \"lg\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], {\n            as: \"h3\",\n            style: {\n              opacity: playing ? \"0\" : \"1\"\n            },\n            fontSize: \"3xl\",\n            color: \"gray.600\",\n            children: \"\\u7D50\\u679C: \".concat(result && result.text)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Roulette__WEBPACK_IMPORTED_MODULE_4__[\"Roulette\"], {\n              slots: Object(_components_Roulette__WEBPACK_IMPORTED_MODULE_4__[\"convertItem\"])(slots)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Flex\"], {\n            w: \"full\",\n            justify: \"flex-end\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Button\"], {\n              onClick: startRoulette,\n              opacity: playing ? \"0\" : \"1\",\n              children: \"Play\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, _this), showEditMenu && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {\n        width: [\"100%\", \"100%\", \"30%\", \"30%\"],\n        height: \"full\",\n        maxH: \"full\",\n        position: [\"absolute\", \"absolute\", \"relative\", \"relative\"],\n        top: \"0\",\n        left: \"0\",\n        borderLeft: [\"0\", \"0\", \"1px\", \"1px\"],\n        borderBottomColor: \"gray.600\",\n        overflowY: \"scroll\",\n        bg: \"gray.100\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_EditMenu__WEBPACK_IMPORTED_MODULE_5__[\"EditMenu\"], _objectSpread({}, {\n          slots: slots,\n          setSlots: setSlots\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(RouletteView, \"BAkPyZcxGBHMp3UJc6WMx27mmg0=\");\n\n_c = RouletteView;\n\nvar Page = function Page() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"WEB \\u30EB\\u30FC\\u30EC\\u30C3\\u30C8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: \"WEB \\u30EB\\u30FC\\u30EC\\u30C3\\u30C8\"\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"WEB\\u3067\\u7C21\\u5358\\u306B\\u4F7F\\u3048\\u308B\\u30EB\\u30FC\\u30EC\\u30C3\\u30C8\\u30A2\\u30D7\\u30EA\\u3067\\u3059\"\n      }, \"description\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 151,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(RouletteView, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 147,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"RouletteView\");\n$RefreshReg$(_c2, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm91bGV0dGUudHN4PzI0YjMiXSwibmFtZXMiOlsiUm91bGV0dGVWaWV3IiwidXNlU3RhdGUiLCJpbml0aWFsSXRlbSIsInNsb3RzIiwic2V0U2xvdHMiLCJzaG93RWRpdE1lbnUiLCJzZXRTaG93RWRpdE1lbnUiLCJwbGF5aW5nIiwic2V0UGxheWluZyIsInJlc3VsdCIsInNldFJlc3VsdCIsInN0YXJ0Um91bGV0dGUiLCJyb3VsZXR0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoaXRJdGVtIiwiYW5pbWF0aW9uVG9BbmdsZSIsInJvdGF0ZUFuZ2xlIiwiYW5pbSIsImFuaW1hdGUiLCJ0cmFuc2Zvcm0iLCJvZmZzZXQiLCJkdXJhdGlvbiIsImVhc2luZyIsImZpbGwiLCJvbmZpbmlzaCIsInByZXYiLCJvcGFjaXR5IiwidGV4dCIsImNvbnZlcnRJdGVtIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFPQTtBQUVBO0NBV0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQSxrQkFDQ0Msc0RBQVEsQ0FBQ0MsZ0VBQUQsQ0FEVDtBQUFBLE1BQ2xCQyxLQURrQjtBQUFBLE1BQ1hDLFFBRFc7O0FBQUEsbUJBRWVILHNEQUFRLENBQUMsSUFBRCxDQUZ2QjtBQUFBLE1BRWxCSSxZQUZrQjtBQUFBLE1BRUpDLGVBRkk7O0FBQUEsbUJBR0tMLHNEQUFRLENBQUMsS0FBRCxDQUhiO0FBQUEsTUFHbEJNLE9BSGtCO0FBQUEsTUFHVEMsVUFIUzs7QUFBQSxtQkFJR1Asc0RBQVEsQ0FBQyxJQUFELENBSlg7QUFBQSxNQUlsQlEsTUFKa0I7QUFBQSxNQUlWQyxTQUpVOztBQU16QixNQUFNQyxhQUFhLEdBQUcsU0FBaEJB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QTtBQUFBO0FBQUEsZUFuQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkVELENBMUdEOztHQUFNSixZOztLQUFBQSxZOztBQTRHTixJQUFNOEIsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxzQkFDWDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU0sZ0JBQVEsRUFBQyxVQUFmO0FBQTBCLGVBQU8sRUFBQztBQUFsQyxTQUFrRCxPQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUNFLFlBQUksRUFBQyxhQURQO0FBRUUsZUFBTyxFQUFDO0FBRlYsU0FHTSxhQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVVFLHFFQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURXO0FBQUEsQ0FBYjs7TUFBTUEsSTtBQWVTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3JvdWxldHRlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL0ljb25cIjtcbmltcG9ydCB7XG4gIGNvbnZlcnRJdGVtLFxuICBoaXRJdGVtLFxuICBpbml0aWFsSXRlbSxcbiAgcm90YXRlQW5nbGUsXG4gIFJvdWxldHRlLFxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9Sb3VsZXR0ZVwiO1xuaW1wb3J0IHsgRWRpdE1lbnUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FZGl0TWVudVwiO1xuXG5pbXBvcnQge1xuICBCdXR0b24sXG4gIEZsZXgsXG4gIEhlYWRpbmcsXG4gIENlbnRlcixcbiAgQm94LFxuICBUZXh0LFxuICBTcGFjZXIsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSWNvbkJ1dHRvblwiO1xuXG4vLyBtYXgtd2lkdGg6IDcwdmgg55qE44Gq44Gu44GMdGFpbHdpbmTjgavjgarjgYTjgIJcbi8vIDEuIOOBneOCguOBneOCguaMh+WumuOBmeOCi+OCt+ODgeODpeODvOe1teOCt+ODp+ODs+OBjOWwkeOBquOBhFxuLy8gMi4g5Yil44Gu6Kej5rG65rOV44GM5LiA6Iis55qEXG4vLyAzLiB0YWlsd2luZOOBjOW+ruWmmVxuXG4vLyBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4vLyAgIHdpZHRoOiA4MCU7XG4vLyAgIG1heC13aWR0aDogNzV2aDtcbi8vICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBtYXgtd2lkdGg6IDEwMCU7XG4vLyAgIH1cbi8vIGA7XG5cbmNvbnN0IFJvdWxldHRlVmlldyA9ICgpID0+IHtcbiAgY29uc3QgW3Nsb3RzLCBzZXRTbG90c10gPSB1c2VTdGF0ZShpbml0aWFsSXRlbSk7XG4gIGNvbnN0IFtzaG93RWRpdE1lbnUsIHNldFNob3dFZGl0TWVudV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3BsYXlpbmcsIHNldFBsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgc3RhcnRSb3VsZXR0ZSA9ICgpID0+IHtcbiAgICBpZiAocGxheWluZykgcmV0dXJuO1xuICAgIHNldFBsYXlpbmcodHJ1ZSk7XG4gICAgY29uc3Qgcm91bGV0dGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdWxldHRlXCIpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGhpdEl0ZW0oc2xvdHMpO1xuICAgIGNvbnN0IGFuaW1hdGlvblRvQW5nbGUgPSByb3RhdGVBbmdsZShzbG90cywgcmVzdWx0KTtcblxuICAgIGNvbnN0IGFuaW0gPSByb3VsZXR0ZS5hbmltYXRlKFxuICAgICAgW1xuICAgICAgICB7IHRyYW5zZm9ybTogXCJyb3RhdGUoMGRlZylcIiwgb2Zmc2V0OiAwIH0sXG4gICAgICAgIHsgdHJhbnNmb3JtOiBgcm90YXRlKCR7LWFuaW1hdGlvblRvQW5nbGUgKyAzNjAwfWRlZylgLCBvZmZzZXQ6IDEgfSxcbiAgICAgIF0sXG4gICAgICB7XG4gICAgICAgIGR1cmF0aW9uOiAzMDUwLFxuICAgICAgICBlYXNpbmc6IFwiY3ViaWMtYmV6aWVyKDAuNDIsIDAsIDAuNTgsIDEpXCIsXG4gICAgICAgIGZpbGw6IFwiZm9yd2FyZHNcIixcbiAgICAgIH1cbiAgICApO1xuXG4gICAgYW5pbS5vbmZpbmlzaCA9ICgpID0+IHtcbiAgICAgIHNldFBsYXlpbmcoZmFsc2UpO1xuICAgICAgc2V0UmVzdWx0KHNsb3RzW3Jlc3VsdF0pO1xuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBoPVwiMTAwdmhcIiBiZz1cImdyYXkuNTBcIj5cbiAgICAgIDxGbGV4XG4gICAgICAgIGFzPVwiaGVhZGVyXCJcbiAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICBiZz1cIndoaXRlXCJcbiAgICAgICAgcD1cIm1kXCJcbiAgICAgICAgaD1cIjYwcHhcIlxuICAgICAgICBib3JkZXJCb3R0b209XCIxcHhcIlxuICAgICAgICBib3JkZXJDb2xvcj1cImdyYXkuNDAwXCJcbiAgICAgID5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIGNvbG9yPVwiZ3JheS44MDBcIiBmb250U2l6ZT1cIjIwcHhcIj5cbiAgICAgICAgICBXRUIg44Or44O844Os44OD44OIXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBtZW51XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RWRpdE1lbnUoKHByZXYpID0+ICFwcmV2KX1cbiAgICAgICAgICBuYW1lPXtzaG93RWRpdE1lbnUgPyBcImNsb3NlXCIgOiBcIm1lbnVcIn1cbiAgICAgICAgLz5cbiAgICAgIDwvRmxleD5cbiAgICAgIDxGbGV4XG4gICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgaD1cImZ1bGxcIlxuICAgICAgICAvLyBGSVhNRTog44Kz44Oz44OG44Oz44OE44GM44Gv44G/5Ye644Gq44GE44KI44GG44Gr44GX44Gf44GE44CCXG4gICAgICAgIC8vIOS7iuOBr+OChOOCiuaWueOBjOOCiOOBj+WIhuOBi+OCieOBmmhlYWRlcuOBq+mrmOOBleOCkuaMh+WumuOBl+OBpuOBhOOCi+OAglxuICAgICAgICBtYXhIPVwiY2FsYygxMDAlIC0gNjBweClcIlxuICAgICAgICBmbGV4R3Jvdz17MH1cbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICA+XG4gICAgICAgIDxDZW50ZXIgdz1cIjEwMCVcIj5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICB3PXtbXCIxMDB2d1wiLCBcIjEwMHZ3XCIsIFwiODB2aFwiLCBcIjgwdmhcIl19XG4gICAgICAgICAgICBwPVwieGxcIlxuICAgICAgICAgICAgYmc9XCJ3aGl0ZVwiXG4gICAgICAgICAgICByb3VuZGVkPVwibGdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgIGFzPVwiaDNcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiBwbGF5aW5nID8gXCIwXCIgOiBcIjFcIiB9fVxuICAgICAgICAgICAgICBmb250U2l6ZT1cIjN4bFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiZ3JheS42MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7YOe1kOaenDogJHtyZXN1bHQgJiYgcmVzdWx0LnRleHR9YH1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxSb3VsZXR0ZSBzbG90cz17Y29udmVydEl0ZW0oc2xvdHMpfSAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8RmxleCB3PVwiZnVsbFwiIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3N0YXJ0Um91bGV0dGV9IG9wYWNpdHk9e3BsYXlpbmcgPyBcIjBcIiA6IFwiMVwifT5cbiAgICAgICAgICAgICAgICBQbGF5XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAge3Nob3dFZGl0TWVudSAmJiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgd2lkdGg9e1tcIjEwMCVcIiwgXCIxMDAlXCIsIFwiMzAlXCIsIFwiMzAlXCJdfVxuICAgICAgICAgICAgaGVpZ2h0PVwiZnVsbFwiXG4gICAgICAgICAgICBtYXhIPVwiZnVsbFwiXG4gICAgICAgICAgICBwb3NpdGlvbj17W1wiYWJzb2x1dGVcIiwgXCJhYnNvbHV0ZVwiLCBcInJlbGF0aXZlXCIsIFwicmVsYXRpdmVcIl19XG4gICAgICAgICAgICB0b3A9XCIwXCJcbiAgICAgICAgICAgIGxlZnQ9XCIwXCJcbiAgICAgICAgICAgIGJvcmRlckxlZnQ9e1tcIjBcIiwgXCIwXCIsIFwiMXB4XCIsIFwiMXB4XCJdfVxuICAgICAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I9XCJncmF5LjYwMFwiXG4gICAgICAgICAgICBvdmVyZmxvd1k9XCJzY3JvbGxcIlxuICAgICAgICAgICAgYmc9XCJncmF5LjEwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEVkaXRNZW51IHsuLi57IHNsb3RzLCBzZXRTbG90cyB9fSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9GbGV4PlxuICAgIDwvRmxleD5cbiAgKTtcbn07XG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+V0VCIOODq+ODvOODrOODg+ODiDwvdGl0bGU+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIldFQiDjg6vjg7zjg6zjg4Pjg4hcIiBrZXk9XCJ0aXRsZVwiIC8+XG4gICAgICA8bWV0YVxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICBjb250ZW50PVwiV0VC44Gn57Ch5Y2Y44Gr5L2/44GI44KL44Or44O844Os44OD44OI44Ki44OX44Oq44Gn44GZXCJcbiAgICAgICAga2V5PVwiZGVzY3JpcHRpb25cIlxuICAgICAgLz5cbiAgICA8L0hlYWQ+XG4gICAgPFJvdWxldHRlVmlldyAvPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/roulette.tsx\n");

/***/ })

})