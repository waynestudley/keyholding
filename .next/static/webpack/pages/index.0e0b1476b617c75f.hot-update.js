"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/utils/api.ts":
/*!**************************!*\
  !*** ./src/utils/api.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiBuilder: function() { return /* binding */ apiBuilder; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nconst getApiUrl = (apiPath)=>{\n    const apiUrl = \"\".concat(\"https://hstc-api.testing.keyholding.com/\").concat(apiPath || \"\");\n    return apiUrl;\n};\nconst apiBuilder = (apiPath)=>{\n    const apiUrl = getApiUrl(apiPath);\n    const instance = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n        baseURL: apiUrl,\n        timeout: 300000,\n        headers: {\n            [\"x-api-key\"]: \"94962B9A-966C-43FC-8E1A-145DEAA5970C\"\n        }\n    });\n    return instance;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLFlBQVksQ0FBQ0M7SUFDakIsTUFBTUMsU0FBUyxHQUF5Q0QsT0FBdENFLDBDQUFtQ0UsRUFBaUIsT0FBZEosV0FBVztJQUNuRSxPQUFPQztBQUNUO0FBRU8sTUFBTUksYUFBYSxDQUFDTDtJQUN6QixNQUFNQyxTQUFTRixVQUFVQztJQUV6QixNQUFNTSxXQUFXUixvREFBWVMsQ0FBQztRQUM1QkMsU0FBU1A7UUFDVFEsU0FBUztRQUNUQyxTQUFTO1lBQ1AsQ0FBQ1IsV0FBZ0NTLENBQVcsRUFBRVQsc0NBQ3hCVTtRQUN4QjtJQUNGO0lBRUEsT0FBT047QUFDVCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9hcGkudHM/Yjk3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IGdldEFwaVVybCA9IChhcGlQYXRoPzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgYXBpVXJsID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VVUkx9JHthcGlQYXRoIHx8IFwiXCJ9YDtcbiAgcmV0dXJuIGFwaVVybDtcbn07XG5cbmV4cG9ydCBjb25zdCBhcGlCdWlsZGVyID0gKGFwaVBhdGg/OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgYXBpVXJsID0gZ2V0QXBpVXJsKGFwaVBhdGgpO1xuXG4gIGNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBhcGlVcmwsXG4gICAgdGltZW91dDogMzAwMDAwLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfTkFNRSBhcyBzdHJpbmddOiBwcm9jZXNzLmVudlxuICAgICAgICAuTkVYVF9QVUJMSUNfQVBJX0tFWSBhcyBzdHJpbmcsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImdldEFwaVVybCIsImFwaVBhdGgiLCJhcGlVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0JBU0VVUkwiLCJhcGlCdWlsZGVyIiwiaW5zdGFuY2UiLCJjcmVhdGUiLCJiYXNlVVJMIiwidGltZW91dCIsImhlYWRlcnMiLCJORVhUX1BVQkxJQ19BUElfTkFNRSIsIk5FWFRfUFVCTElDX0FQSV9LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/api.ts\n"));

/***/ })

});