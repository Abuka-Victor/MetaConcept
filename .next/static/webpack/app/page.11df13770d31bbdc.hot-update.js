"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "./components/ExploreCard.jsx":
/*!************************************!*\
  !*** ./components/ExploreCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n\n\n\n\nconst ExploreCard = (param)=>/*#__PURE__*/ {\n    let { id , imgUrl , title , index , active , handleClick  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_1__.fadeIn)(\"right\", \"spring\", index * 0.5, 0.75),\n        className: \"relative \".concat(active === id ? \"lg:flex-[3.5] flex-[10]\" : \"lg:flex-[0.5] flex-2\", \" flex items-center justify-center min-w-[170px] sm:h-[700px] h-[500px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imgUrl,\n                alt: title,\n                className: \"absolute w-full h-full object-cover rounded-[24px]\",\n                onClick: ()=>handleClick(id)\n            }, void 0, false, {\n                fileName: \"/Users/abuka/Documents/Web Dev Projects/Metaversus/components/ExploreCard.jsx\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, undefined),\n            active !== id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-semibold sm:text-[26px] text-18px text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/abuka/Documents/Web Dev Projects/Metaversus/components/ExploreCard.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].flexCenter, \" w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/headset.svg\",\n                            alt: \"headset\",\n                            className: \"w-1/2 h-1/2 object-contain\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abuka/Documents/Web Dev Projects/Metaversus/components/ExploreCard.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/abuka/Documents/Web Dev Projects/Metaversus/components/ExploreCard.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-normal text-[16px] leading-[20px] text-white uppercase\",\n                        children: \"Enter the Metaverse\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abuka/Documents/Web Dev Projects/Metaversus/components/ExploreCard.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/abuka/Documents/Web Dev Projects/Metaversus/components/ExploreCard.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abuka/Documents/Web Dev Projects/Metaversus/components/ExploreCard.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abuka/Documents/Web Dev Projects/Metaversus/components/ExploreCard.jsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ExploreCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExploreCard);\nvar _c;\n$RefreshReg$(_c, \"ExploreCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGxvcmVDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRXVDO0FBQ0U7QUFFVjtBQUUvQixNQUFNRyxjQUFjLHVCQUNsQjtRQURtQixFQUFFQyxHQUFFLEVBQUVDLE9BQU0sRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRUMsWUFBVyxFQUFFO1dBQ3BFLDhEQUFDVCxxREFBVTtRQUNUVyxVQUFVVixxREFBTUEsQ0FBQyxTQUFTLFVBQVVNLFFBQVEsS0FBSztRQUNqREssV0FBVyxZQUVWLE9BRENKLFdBQVdKLEtBQUssNEJBQTRCLHNCQUFzQixFQUNuRTs7MEJBRUQsOERBQUNTO2dCQUNDQyxLQUFLVDtnQkFDTFUsS0FBS1Q7Z0JBQ0xNLFdBQVU7Z0JBQ1ZJLFNBQVMsSUFBTVAsWUFBWUw7Ozs7OztZQUU1QkksV0FBV0osbUJBQ1YsOERBQUNhO2dCQUFHTCxXQUFVOzBCQUNYTjs7Ozs7MENBR0gsOERBQUNJO2dCQUFJRSxXQUFVOztrQ0FDYiw4REFBQ0Y7d0JBQ0NFLFdBQVcsR0FBcUIsT0FBbEJWLDBEQUFpQixFQUFDO2tDQUVoQyw0RUFBQ1c7NEJBQ0NDLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pILFdBQVU7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDTzt3QkFBRVAsV0FBVTtrQ0FBOEQ7Ozs7OztrQ0FHM0UsOERBQUNRO3dCQUFHUixXQUFVO2tDQUNYTjs7Ozs7Ozs7Ozs7eUJBR047Ozs7Ozs7QUFDUztLQXBDUkg7QUF1Q04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeHBsb3JlQ2FyZC5qc3g/MjNjYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgZmFkZUluIH0gZnJvbSAnLi4vdXRpbHMvbW90aW9uJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMnO1xuXG5jb25zdCBFeHBsb3JlQ2FyZCA9ICh7IGlkLCBpbWdVcmwsIHRpdGxlLCBpbmRleCwgYWN0aXZlLCBoYW5kbGVDbGljayB9KSA9PiAoXG4gIDxtb3Rpb24uZGl2XG4gICAgdmFyaWFudHM9e2ZhZGVJbigncmlnaHQnLCAnc3ByaW5nJywgaW5kZXggKiAwLjUsIDAuNzUpfVxuICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlICR7XG4gICAgICBhY3RpdmUgPT09IGlkID8gJ2xnOmZsZXgtWzMuNV0gZmxleC1bMTBdJyA6ICdsZzpmbGV4LVswLjVdIGZsZXgtMidcbiAgICB9IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi13LVsxNzBweF0gc206aC1bNzAwcHhdIGgtWzUwMHB4XSB0cmFuc2l0aW9uLVtmbGV4XSBkdXJhdGlvbi1bMC43c10gZWFzZS1vdXQtZmxleCBjdXJzb3ItcG9pbnRlcmB9XG4gID5cbiAgICA8aW1nXG4gICAgICBzcmM9e2ltZ1VybH1cbiAgICAgIGFsdD17dGl0bGV9XG4gICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciByb3VuZGVkLVsyNHB4XVwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpZCl9XG4gICAgLz5cbiAgICB7YWN0aXZlICE9PSBpZCA/IChcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHNtOnRleHQtWzI2cHhdIHRleHQtMThweCB0ZXh0LXdoaXRlIGFic29sdXRlIHotMCBsZzpib3R0b20tMjAgbGc6cm90YXRlLVstOTBkZWddIGxnOm9yaWdpbi1bMCwwXVwiPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L2gzPlxuICAgICkgOiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHAtOCBqdXN0aWZ5LXN0YXJ0IHctZnVsbCBmbGV4LWNvbCBiZy1bcmdiYSgwLDAsMCwwLjUpXSByb3VuZGVkLWItWzI0cHhdXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5mbGV4Q2VudGVyfSB3LVs2MHB4XSBoLVs2MHB4XSByb3VuZGVkLVsyNHB4XSBnbGFzc21vcnBoaXNtIG1iLVsxNnB4XWB9XG4gICAgICAgID5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIvaGVhZHNldC5zdmdcIlxuICAgICAgICAgICAgYWx0PVwiaGVhZHNldFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvMiBoLTEvMiBvYmplY3QtY29udGFpblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtWzE2cHhdIGxlYWRpbmctWzIwcHhdIHRleHQtd2hpdGUgdXBwZXJjYXNlXCI+XG4gICAgICAgICAgRW50ZXIgdGhlIE1ldGF2ZXJzZVxuICAgICAgICA8L3A+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC1bMjRweF0gZm9udC1zZW1pYm9sZCBzbTp0ZXh0LVszMnB4XSB0ZXh0LVsyNHB4XSB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgPC9tb3Rpb24uZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwbG9yZUNhcmQ7XG4iXSwibmFtZXMiOlsibW90aW9uIiwiZmFkZUluIiwic3R5bGVzIiwiRXhwbG9yZUNhcmQiLCJpZCIsImltZ1VybCIsInRpdGxlIiwiaW5kZXgiLCJhY3RpdmUiLCJoYW5kbGVDbGljayIsImRpdiIsInZhcmlhbnRzIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0Iiwib25DbGljayIsImgzIiwiZmxleENlbnRlciIsInAiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ExploreCard.jsx\n"));

/***/ })

});