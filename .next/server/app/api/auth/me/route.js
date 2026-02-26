"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/me/route";
exports.ids = ["app/api/auth/me/route"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.ts&appDir=%2FUsers%2Faryanrathore%2FDesktop%2FMyraid%2Fapps%2Fweb%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faryanrathore%2FDesktop%2FMyraid%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.ts&appDir=%2FUsers%2Faryanrathore%2FDesktop%2FMyraid%2Fapps%2Fweb%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faryanrathore%2FDesktop%2FMyraid%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/../../node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/../../node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/../../node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_aryanrathore_Desktop_Myraid_apps_web_src_app_api_auth_me_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/me/route.ts */ \"(rsc)/./src/app/api/auth/me/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/me/route\",\n        pathname: \"/api/auth/me\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/me/route\"\n    },\n    resolvedPagePath: \"/Users/aryanrathore/Desktop/Myraid/apps/web/src/app/api/auth/me/route.ts\",\n    nextConfigOutput,\n    userland: _Users_aryanrathore_Desktop_Myraid_apps_web_src_app_api_auth_me_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/me/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGYXV0aCUyRm1lJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGbWUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhdXRoJTJGbWUlMkZyb3V0ZS50cyZhcHBEaXI9JTJGVXNlcnMlMkZhcnlhbnJhdGhvcmUlMkZEZXNrdG9wJTJGTXlyYWlkJTJGYXBwcyUyRndlYiUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZhcnlhbnJhdGhvcmUlMkZEZXNrdG9wJTJGTXlyYWlkJTJGYXBwcyUyRndlYiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDd0I7QUFDckc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLWhhcmJvci8/YTNhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvYXJ5YW5yYXRob3JlL0Rlc2t0b3AvTXlyYWlkL2FwcHMvd2ViL3NyYy9hcHAvYXBpL2F1dGgvbWUvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvbWUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL21lXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL21lL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2FyeWFucmF0aG9yZS9EZXNrdG9wL015cmFpZC9hcHBzL3dlYi9zcmMvYXBwL2FwaS9hdXRoL21lL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL21lL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.ts&appDir=%2FUsers%2Faryanrathore%2FDesktop%2FMyraid%2Fapps%2Fweb%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faryanrathore%2FDesktop%2FMyraid%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/me/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/auth/me/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic),\n/* harmony export */   runtime: () => (/* binding */ runtime)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/../../node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _app_api_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/api/error-handler */ \"(rsc)/./src/app/api/error-handler.ts\");\n\n\n\nconst runtime = \"nodejs\";\nconst dynamic = \"force-dynamic\";\nasync function GET() {\n    try {\n        const user = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.requireAuth)();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        const { payload, status } = (0,_app_api_error_handler__WEBPACK_IMPORTED_MODULE_2__.buildErrorResponse)(error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(payload, {\n            status\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL21lL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNGO0FBRW9CO0FBRXRELE1BQU1HLFVBQVUsU0FBUztBQUN6QixNQUFNQyxVQUFVLGdCQUFnQjtBQUVoQyxlQUFlQztJQUNwQixJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNTCxzREFBV0E7UUFDOUIsT0FBT0QscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFRDtRQUFLLEdBQUc7WUFBRUUsUUFBUTtRQUFJO0lBQ25ELEVBQUUsT0FBT0MsT0FBTztRQUNkLE1BQU0sRUFBRUMsT0FBTyxFQUFFRixNQUFNLEVBQUUsR0FBR04sMEVBQWtCQSxDQUFDTztRQUMvQyxPQUFPVCxxREFBWUEsQ0FBQ08sSUFBSSxDQUFDRyxTQUFTO1lBQUVGO1FBQU87SUFDN0M7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2staGFyYm9yLy4vc3JjL2FwcC9hcGkvYXV0aC9tZS9yb3V0ZS50cz81OGJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgcmVxdWlyZUF1dGggfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuaW1wb3J0IHsgQXBwRXJyb3IgfSBmcm9tIFwiQC9saWIvdXRpbHMvZXJyb3JzXCI7XG5pbXBvcnQgeyBidWlsZEVycm9yUmVzcG9uc2UgfSBmcm9tIFwiQC9hcHAvYXBpL2Vycm9yLWhhbmRsZXJcIjtcblxuZXhwb3J0IGNvbnN0IHJ1bnRpbWUgPSBcIm5vZGVqc1wiO1xuZXhwb3J0IGNvbnN0IGR5bmFtaWMgPSBcImZvcmNlLWR5bmFtaWNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVxdWlyZUF1dGgoKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB1c2VyIH0sIHsgc3RhdHVzOiAyMDAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgeyBwYXlsb2FkLCBzdGF0dXMgfSA9IGJ1aWxkRXJyb3JSZXNwb25zZShlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHBheWxvYWQsIHsgc3RhdHVzIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicmVxdWlyZUF1dGgiLCJidWlsZEVycm9yUmVzcG9uc2UiLCJydW50aW1lIiwiZHluYW1pYyIsIkdFVCIsInVzZXIiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/me/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/error-handler.ts":
/*!**************************************!*\
  !*** ./src/app/api/error-handler.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildErrorResponse: () => (/* binding */ buildErrorResponse)\n/* harmony export */ });\n/* harmony import */ var _lib_utils_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/utils/errors */ \"(rsc)/./src/lib/utils/errors.ts\");\n\nfunction buildErrorResponse(error) {\n    if (error instanceof _lib_utils_errors__WEBPACK_IMPORTED_MODULE_0__.AppError) {\n        const payload = {\n            error: {\n                code: error.code,\n                message: error.message\n            }\n        };\n        if (error.details) {\n            payload.error.details = error.details;\n        }\n        return {\n            payload,\n            status: error.status\n        };\n    }\n    return {\n        payload: {\n            error: {\n                code: \"internal_error\",\n                message: \"Internal server error\"\n            }\n        },\n        status: 500\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9lcnJvci1oYW5kbGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQThDO0FBRXZDLFNBQVNDLG1CQUFtQkMsS0FBYztJQUMvQyxJQUFJQSxpQkFBaUJGLHVEQUFRQSxFQUFFO1FBQzdCLE1BQU1HLFVBQW1DO1lBQ3ZDRCxPQUFPO2dCQUNMRSxNQUFNRixNQUFNRSxJQUFJO2dCQUNoQkMsU0FBU0gsTUFBTUcsT0FBTztZQUN4QjtRQUNGO1FBRUEsSUFBSUgsTUFBTUksT0FBTyxFQUFFO1lBQ2hCSCxRQUFRRCxLQUFLLENBQTZCSSxPQUFPLEdBQUdKLE1BQU1JLE9BQU87UUFDcEU7UUFFQSxPQUFPO1lBQUVIO1lBQVNJLFFBQVFMLE1BQU1LLE1BQU07UUFBQztJQUN6QztJQUVBLE9BQU87UUFDTEosU0FBUztZQUNQRCxPQUFPO2dCQUNMRSxNQUFNO2dCQUNOQyxTQUFTO1lBQ1g7UUFDRjtRQUNBRSxRQUFRO0lBQ1Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2staGFyYm9yLy4vc3JjL2FwcC9hcGkvZXJyb3ItaGFuZGxlci50cz84M2FkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcEVycm9yIH0gZnJvbSBcIkAvbGliL3V0aWxzL2Vycm9yc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRFcnJvclJlc3BvbnNlKGVycm9yOiB1bmtub3duKSB7XG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEFwcEVycm9yKSB7XG4gICAgY29uc3QgcGF5bG9hZDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgICBlcnJvcjoge1xuICAgICAgICBjb2RlOiBlcnJvci5jb2RlLFxuICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgaWYgKGVycm9yLmRldGFpbHMpIHtcbiAgICAgIChwYXlsb2FkLmVycm9yIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KS5kZXRhaWxzID0gZXJyb3IuZGV0YWlscztcbiAgICB9XG5cbiAgICByZXR1cm4geyBwYXlsb2FkLCBzdGF0dXM6IGVycm9yLnN0YXR1cyB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXlsb2FkOiB7XG4gICAgICBlcnJvcjoge1xuICAgICAgICBjb2RlOiBcImludGVybmFsX2Vycm9yXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc3RhdHVzOiA1MDAsXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQXBwRXJyb3IiLCJidWlsZEVycm9yUmVzcG9uc2UiLCJlcnJvciIsInBheWxvYWQiLCJjb2RlIiwibWVzc2FnZSIsImRldGFpbHMiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/error-handler.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAuth: () => (/* binding */ getAuth),\n/* harmony export */   getCookieOptions: () => (/* binding */ getCookieOptions),\n/* harmony export */   requireAuth: () => (/* binding */ requireAuth),\n/* harmony export */   signToken: () => (/* binding */ signToken)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/../../node_modules/next/dist/api/headers.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/../../node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/errors */ \"(rsc)/./src/lib/utils/errors.ts\");\n\n\n\nconst getJwtSecret = ()=>{\n    if (!process.env.JWT_SECRET) {\n        throw new _utils_errors__WEBPACK_IMPORTED_MODULE_2__.AppError(500, \"JWT secret not configured\", \"config_error\");\n    }\n    return process.env.JWT_SECRET;\n};\nconst signToken = (payload)=>{\n    const secret = getJwtSecret();\n    const expiresIn = process.env.JWT_EXPIRES_IN || \"1h\";\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign(payload, secret, {\n        expiresIn\n    });\n};\nconst getAuth = async ()=>{\n    try {\n        const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();\n        const token = cookieStore.get(\"access_token\")?.value;\n        if (!token) {\n            return null;\n        }\n        const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, getJwtSecret());\n        return payload;\n    } catch  {\n        return null;\n    }\n};\nconst requireAuth = async ()=>{\n    const auth = await getAuth();\n    if (!auth) {\n        throw new _utils_errors__WEBPACK_IMPORTED_MODULE_2__.AppError(401, \"Unauthorized\", \"unauthorized\");\n    }\n    return auth;\n};\nconst getCookieOptions = ()=>{\n    const isProd = \"development\" === \"production\";\n    const secure = (process.env.COOKIE_SECURE || (isProd ? \"true\" : \"false\")) === \"true\";\n    return {\n        httpOnly: true,\n        secure,\n        sameSite: \"lax\",\n        maxAge: 1000 * 60 * 60\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDUjtBQUNXO0FBTzFDLE1BQU1HLGVBQWU7SUFDbkIsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFVBQVUsRUFBRTtRQUMzQixNQUFNLElBQUlKLG1EQUFRQSxDQUFDLEtBQUssNkJBQTZCO0lBQ3ZEO0lBQ0EsT0FBT0UsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO0FBQy9CO0FBRU8sTUFBTUMsWUFBWSxDQUFDQztJQUN4QixNQUFNQyxTQUFTTjtJQUNmLE1BQU1PLFlBQWFOLFFBQVFDLEdBQUcsQ0FBQ00sY0FBYyxJQUMzQztJQUNGLE9BQU9WLHdEQUFRLENBQUNPLFNBQVNDLFFBQVE7UUFBRUM7SUFBVTtBQUMvQyxFQUFFO0FBRUssTUFBTUcsVUFBVTtJQUNyQixJQUFJO1FBQ0YsTUFBTUMsY0FBYyxNQUFNZCxxREFBT0E7UUFDakMsTUFBTWUsUUFBUUQsWUFBWUUsR0FBRyxDQUFDLGlCQUFpQkM7UUFDL0MsSUFBSSxDQUFDRixPQUFPO1lBQ1YsT0FBTztRQUNUO1FBRUEsTUFBTVAsVUFBVVAsMERBQVUsQ0FBQ2MsT0FBT1o7UUFDbEMsT0FBT0s7SUFDVCxFQUFFLE9BQU07UUFDTixPQUFPO0lBQ1Q7QUFDRixFQUFFO0FBRUssTUFBTVcsY0FBYztJQUN6QixNQUFNQyxPQUFPLE1BQU1QO0lBQ25CLElBQUksQ0FBQ08sTUFBTTtRQUNULE1BQU0sSUFBSWxCLG1EQUFRQSxDQUFDLEtBQUssZ0JBQWdCO0lBQzFDO0lBQ0EsT0FBT2tCO0FBQ1QsRUFBRTtBQUVLLE1BQU1DLG1CQUFtQjtJQUM5QixNQUFNQyxTQUFTbEIsa0JBQXlCO0lBQ3hDLE1BQU1tQixTQUNKLENBQUNuQixRQUFRQyxHQUFHLENBQUNtQixhQUFhLElBQUtGLENBQUFBLFNBQVMsU0FBUyxPQUFNLENBQUMsTUFBTztJQUNqRSxPQUFPO1FBQ0xHLFVBQVU7UUFDVkY7UUFDQUcsVUFBVTtRQUNWQyxRQUFRLE9BQU8sS0FBSztJQUN0QjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLWhhcmJvci8uL3NyYy9saWIvYXV0aC50cz82NjkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCB7IEFwcEVycm9yIH0gZnJvbSBcIi4vdXRpbHMvZXJyb3JzXCI7XG5cbmV4cG9ydCB0eXBlIEF1dGhQYXlsb2FkID0ge1xuICBpZDogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xufTtcblxuY29uc3QgZ2V0Snd0U2VjcmV0ID0gKCkgPT4ge1xuICBpZiAoIXByb2Nlc3MuZW52LkpXVF9TRUNSRVQpIHtcbiAgICB0aHJvdyBuZXcgQXBwRXJyb3IoNTAwLCBcIkpXVCBzZWNyZXQgbm90IGNvbmZpZ3VyZWRcIiwgXCJjb25maWdfZXJyb3JcIik7XG4gIH1cbiAgcmV0dXJuIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQ7XG59O1xuXG5leHBvcnQgY29uc3Qgc2lnblRva2VuID0gKHBheWxvYWQ6IEF1dGhQYXlsb2FkKSA9PiB7XG4gIGNvbnN0IHNlY3JldCA9IGdldEp3dFNlY3JldCgpO1xuICBjb25zdCBleHBpcmVzSW4gPSAocHJvY2Vzcy5lbnYuSldUX0VYUElSRVNfSU4gfHxcbiAgICBcIjFoXCIpIGFzIGp3dC5TaWduT3B0aW9uc1tcImV4cGlyZXNJblwiXTtcbiAgcmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIHNlY3JldCwgeyBleHBpcmVzSW4gfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QXV0aCA9IGFzeW5jICgpOiBQcm9taXNlPEF1dGhQYXlsb2FkIHwgbnVsbD4gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xuICAgIGNvbnN0IHRva2VuID0gY29va2llU3RvcmUuZ2V0KFwiYWNjZXNzX3Rva2VuXCIpPy52YWx1ZTtcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBwYXlsb2FkID0gand0LnZlcmlmeSh0b2tlbiwgZ2V0Snd0U2VjcmV0KCkpIGFzIEF1dGhQYXlsb2FkO1xuICAgIHJldHVybiBwYXlsb2FkO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlcXVpcmVBdXRoID0gYXN5bmMgKCk6IFByb21pc2U8QXV0aFBheWxvYWQ+ID0+IHtcbiAgY29uc3QgYXV0aCA9IGF3YWl0IGdldEF1dGgoKTtcbiAgaWYgKCFhdXRoKSB7XG4gICAgdGhyb3cgbmV3IEFwcEVycm9yKDQwMSwgXCJVbmF1dGhvcml6ZWRcIiwgXCJ1bmF1dGhvcml6ZWRcIik7XG4gIH1cbiAgcmV0dXJuIGF1dGg7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q29va2llT3B0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgaXNQcm9kID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xuICBjb25zdCBzZWN1cmUgPVxuICAgIChwcm9jZXNzLmVudi5DT09LSUVfU0VDVVJFIHx8IChpc1Byb2QgPyBcInRydWVcIiA6IFwiZmFsc2VcIikpID09PSBcInRydWVcIjtcbiAgcmV0dXJuIHtcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBzZWN1cmUsXG4gICAgc2FtZVNpdGU6IFwibGF4XCIgYXMgY29uc3QsXG4gICAgbWF4QWdlOiAxMDAwICogNjAgKiA2MCwgLy8gMSBob3VyXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImNvb2tpZXMiLCJqd3QiLCJBcHBFcnJvciIsImdldEp3dFNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwic2lnblRva2VuIiwicGF5bG9hZCIsInNlY3JldCIsImV4cGlyZXNJbiIsIkpXVF9FWFBJUkVTX0lOIiwic2lnbiIsImdldEF1dGgiLCJjb29raWVTdG9yZSIsInRva2VuIiwiZ2V0IiwidmFsdWUiLCJ2ZXJpZnkiLCJyZXF1aXJlQXV0aCIsImF1dGgiLCJnZXRDb29raWVPcHRpb25zIiwiaXNQcm9kIiwic2VjdXJlIiwiQ09PS0lFX1NFQ1VSRSIsImh0dHBPbmx5Iiwic2FtZVNpdGUiLCJtYXhBZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/utils/errors.ts":
/*!*********************************!*\
  !*** ./src/lib/utils/errors.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppError: () => (/* binding */ AppError)\n/* harmony export */ });\nclass AppError extends Error {\n    constructor(status, message, code = \"error\", details){\n        super(message);\n        this.status = status;\n        this.code = code;\n        this.details = details;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3V0aWxzL2Vycm9ycy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsaUJBQWlCQztJQUs1QkMsWUFDRUMsTUFBYyxFQUNkQyxPQUFlLEVBQ2ZDLE9BQU8sT0FBTyxFQUNkQyxPQUFpQixDQUNqQjtRQUNBLEtBQUssQ0FBQ0Y7UUFDTixJQUFJLENBQUNELE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNFLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7SUFDakI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2staGFyYm9yLy4vc3JjL2xpYi91dGlscy9lcnJvcnMudHM/YmUzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXBwRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHN0YXR1czogbnVtYmVyO1xuICBjb2RlOiBzdHJpbmc7XG4gIGRldGFpbHM/OiB1bmtub3duO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHN0YXR1czogbnVtYmVyLFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBjb2RlID0gXCJlcnJvclwiLFxuICAgIGRldGFpbHM/OiB1bmtub3duLFxuICApIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJBcHBFcnJvciIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwiY29kZSIsImRldGFpbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/utils/errors.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.ts&appDir=%2FUsers%2Faryanrathore%2FDesktop%2FMyraid%2Fapps%2Fweb%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faryanrathore%2FDesktop%2FMyraid%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();