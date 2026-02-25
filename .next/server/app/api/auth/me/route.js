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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/../../node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_utils_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils/errors */ \"(rsc)/./src/lib/utils/errors.ts\");\n\n\n\nasync function GET() {\n    try {\n        const user = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.requireAuth)();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        if (error instanceof _lib_utils_errors__WEBPACK_IMPORTED_MODULE_2__.AppError) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: {\n                    code: error.code,\n                    message: error.message,\n                    ...error.details && {\n                        details: error.details\n                    }\n                }\n            }, {\n                status: error.status\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: {\n                code: \"internal_error\",\n                message: \"Internal server error\"\n            }\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL21lL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFDRjtBQUNLO0FBRXZDLGVBQWVHO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1ILHNEQUFXQTtRQUM5QixPQUFPRCxxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1lBQUVEO1FBQUssR0FBRztZQUFFRSxRQUFRO1FBQUk7SUFDbkQsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsSUFBSUEsaUJBQWlCTCx1REFBUUEsRUFBRTtZQUM3QixPQUFPRixxREFBWUEsQ0FBQ0ssSUFBSSxDQUN0QjtnQkFDRUUsT0FBTztvQkFDTEMsTUFBTUQsTUFBTUMsSUFBSTtvQkFDaEJDLFNBQVNGLE1BQU1FLE9BQU87b0JBQ3RCLEdBQUlGLE1BQU1HLE9BQU8sSUFBSTt3QkFBRUEsU0FBU0gsTUFBTUcsT0FBTztvQkFBQyxDQUFDO2dCQUNqRDtZQUNGLEdBQ0E7Z0JBQUVKLFFBQVFDLE1BQU1ELE1BQU07WUFBQztRQUUzQjtRQUVBLE9BQU9OLHFEQUFZQSxDQUFDSyxJQUFJLENBQ3RCO1lBQ0VFLE9BQU87Z0JBQ0xDLE1BQU07Z0JBQ05DLFNBQVM7WUFDWDtRQUNGLEdBQ0E7WUFBRUgsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLWhhcmJvci8uL3NyYy9hcHAvYXBpL2F1dGgvbWUvcm91dGUudHM/NThiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IHJlcXVpcmVBdXRoIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcbmltcG9ydCB7IEFwcEVycm9yIH0gZnJvbSBcIkAvbGliL3V0aWxzL2Vycm9yc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXF1aXJlQXV0aCgpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHVzZXIgfSwgeyBzdGF0dXM6IDIwMCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBcHBFcnJvcikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7XG4gICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIGNvZGU6IGVycm9yLmNvZGUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgLi4uKGVycm9yLmRldGFpbHMgJiYgeyBkZXRhaWxzOiBlcnJvci5kZXRhaWxzIH0pLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHsgc3RhdHVzOiBlcnJvci5zdGF0dXMgfSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAge1xuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIGNvZGU6IFwiaW50ZXJuYWxfZXJyb3JcIixcbiAgICAgICAgICBtZXNzYWdlOiBcIkludGVybmFsIHNlcnZlciBlcnJvclwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfSxcbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicmVxdWlyZUF1dGgiLCJBcHBFcnJvciIsIkdFVCIsInVzZXIiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJjb2RlIiwibWVzc2FnZSIsImRldGFpbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/me/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAuth: () => (/* binding */ getAuth),\n/* harmony export */   getCookieOptions: () => (/* binding */ getCookieOptions),\n/* harmony export */   requireAuth: () => (/* binding */ requireAuth),\n/* harmony export */   signToken: () => (/* binding */ signToken)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/../../node_modules/next/dist/api/headers.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/../../node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/errors */ \"(rsc)/./src/lib/utils/errors.ts\");\n\n\n\nconst getJwtSecret = ()=>{\n    if (!process.env.JWT_SECRET) {\n        throw new _utils_errors__WEBPACK_IMPORTED_MODULE_2__.AppError(500, \"JWT secret not configured\", \"config_error\");\n    }\n    return process.env.JWT_SECRET;\n};\nconst signToken = (payload)=>{\n    const secret = getJwtSecret();\n    const expiresIn = process.env.JWT_EXPIRES_IN || \"1h\";\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign(payload, secret, {\n        expiresIn\n    });\n};\nconst getAuth = async ()=>{\n    try {\n        const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();\n        const token = cookieStore.get(\"access_token\")?.value;\n        if (!token) {\n            return null;\n        }\n        const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, getJwtSecret());\n        return payload;\n    } catch  {\n        return null;\n    }\n};\nconst requireAuth = async ()=>{\n    const auth = await getAuth();\n    if (!auth) {\n        throw new _utils_errors__WEBPACK_IMPORTED_MODULE_2__.AppError(401, \"Unauthorized\", \"unauthorized\");\n    }\n    return auth;\n};\nconst getCookieOptions = ()=>{\n    const isProd = \"development\" === \"production\";\n    const secure = (process.env.COOKIE_SECURE || (isProd ? \"true\" : \"false\")) === \"true\";\n    return {\n        httpOnly: true,\n        secure,\n        sameSite: \"lax\",\n        maxAge: 1000 * 60 * 60\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDUjtBQUNXO0FBTzFDLE1BQU1HLGVBQWU7SUFDbkIsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFVBQVUsRUFBRTtRQUMzQixNQUFNLElBQUlKLG1EQUFRQSxDQUFDLEtBQUssNkJBQTZCO0lBQ3ZEO0lBQ0EsT0FBT0UsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO0FBQy9CO0FBRU8sTUFBTUMsWUFBWSxDQUFDQztJQUN4QixNQUFNQyxTQUFTTjtJQUNmLE1BQU1PLFlBQVlOLFFBQVFDLEdBQUcsQ0FBQ00sY0FBYyxJQUFJO0lBQ2hELE9BQU9WLHdEQUFRLENBQUNPLFNBQVNDLFFBQVE7UUFBRUM7SUFBVTtBQUMvQyxFQUFFO0FBRUssTUFBTUcsVUFBVTtJQUNyQixJQUFJO1FBQ0YsTUFBTUMsY0FBYyxNQUFNZCxxREFBT0E7UUFDakMsTUFBTWUsUUFBUUQsWUFBWUUsR0FBRyxDQUFDLGlCQUFpQkM7UUFDL0MsSUFBSSxDQUFDRixPQUFPO1lBQ1YsT0FBTztRQUNUO1FBRUEsTUFBTVAsVUFBVVAsMERBQVUsQ0FBQ2MsT0FBT1o7UUFDbEMsT0FBT0s7SUFDVCxFQUFFLE9BQU07UUFDTixPQUFPO0lBQ1Q7QUFDRixFQUFFO0FBRUssTUFBTVcsY0FBYztJQUN6QixNQUFNQyxPQUFPLE1BQU1QO0lBQ25CLElBQUksQ0FBQ08sTUFBTTtRQUNULE1BQU0sSUFBSWxCLG1EQUFRQSxDQUFDLEtBQUssZ0JBQWdCO0lBQzFDO0lBQ0EsT0FBT2tCO0FBQ1QsRUFBRTtBQUVLLE1BQU1DLG1CQUFtQjtJQUM5QixNQUFNQyxTQUFTbEIsa0JBQXlCO0lBQ3hDLE1BQU1tQixTQUNKLENBQUNuQixRQUFRQyxHQUFHLENBQUNtQixhQUFhLElBQUtGLENBQUFBLFNBQVMsU0FBUyxPQUFNLENBQUMsTUFBTztJQUNqRSxPQUFPO1FBQ0xHLFVBQVU7UUFDVkY7UUFDQUcsVUFBVTtRQUNWQyxRQUFRLE9BQU8sS0FBSztJQUN0QjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLWhhcmJvci8uL3NyYy9saWIvYXV0aC50cz82NjkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCB7IEFwcEVycm9yIH0gZnJvbSBcIi4vdXRpbHMvZXJyb3JzXCI7XG5cbmV4cG9ydCB0eXBlIEF1dGhQYXlsb2FkID0ge1xuICBpZDogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xufTtcblxuY29uc3QgZ2V0Snd0U2VjcmV0ID0gKCkgPT4ge1xuICBpZiAoIXByb2Nlc3MuZW52LkpXVF9TRUNSRVQpIHtcbiAgICB0aHJvdyBuZXcgQXBwRXJyb3IoNTAwLCBcIkpXVCBzZWNyZXQgbm90IGNvbmZpZ3VyZWRcIiwgXCJjb25maWdfZXJyb3JcIik7XG4gIH1cbiAgcmV0dXJuIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQ7XG59O1xuXG5leHBvcnQgY29uc3Qgc2lnblRva2VuID0gKHBheWxvYWQ6IEF1dGhQYXlsb2FkKSA9PiB7XG4gIGNvbnN0IHNlY3JldCA9IGdldEp3dFNlY3JldCgpO1xuICBjb25zdCBleHBpcmVzSW4gPSBwcm9jZXNzLmVudi5KV1RfRVhQSVJFU19JTiB8fCBcIjFoXCI7XG4gIHJldHVybiBqd3Quc2lnbihwYXlsb2FkLCBzZWNyZXQsIHsgZXhwaXJlc0luIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEF1dGggPSBhc3luYyAoKTogUHJvbWlzZTxBdXRoUGF5bG9hZCB8IG51bGw+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcbiAgICBjb25zdCB0b2tlbiA9IGNvb2tpZVN0b3JlLmdldChcImFjY2Vzc190b2tlblwiKT8udmFsdWU7XG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcGF5bG9hZCA9IGp3dC52ZXJpZnkodG9rZW4sIGdldEp3dFNlY3JldCgpKSBhcyBBdXRoUGF5bG9hZDtcbiAgICByZXR1cm4gcGF5bG9hZDtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZXF1aXJlQXV0aCA9IGFzeW5jICgpOiBQcm9taXNlPEF1dGhQYXlsb2FkPiA9PiB7XG4gIGNvbnN0IGF1dGggPSBhd2FpdCBnZXRBdXRoKCk7XG4gIGlmICghYXV0aCkge1xuICAgIHRocm93IG5ldyBBcHBFcnJvcig0MDEsIFwiVW5hdXRob3JpemVkXCIsIFwidW5hdXRob3JpemVkXCIpO1xuICB9XG4gIHJldHVybiBhdXRoO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENvb2tpZU9wdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IGlzUHJvZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcbiAgY29uc3Qgc2VjdXJlID1cbiAgICAocHJvY2Vzcy5lbnYuQ09PS0lFX1NFQ1VSRSB8fCAoaXNQcm9kID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIpKSA9PT0gXCJ0cnVlXCI7XG4gIHJldHVybiB7XG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2VjdXJlLFxuICAgIHNhbWVTaXRlOiBcImxheFwiIGFzIGNvbnN0LFxuICAgIG1heEFnZTogMTAwMCAqIDYwICogNjAsIC8vIDEgaG91clxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJjb29raWVzIiwiand0IiwiQXBwRXJyb3IiLCJnZXRKd3RTZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsInNpZ25Ub2tlbiIsInBheWxvYWQiLCJzZWNyZXQiLCJleHBpcmVzSW4iLCJKV1RfRVhQSVJFU19JTiIsInNpZ24iLCJnZXRBdXRoIiwiY29va2llU3RvcmUiLCJ0b2tlbiIsImdldCIsInZhbHVlIiwidmVyaWZ5IiwicmVxdWlyZUF1dGgiLCJhdXRoIiwiZ2V0Q29va2llT3B0aW9ucyIsImlzUHJvZCIsInNlY3VyZSIsIkNPT0tJRV9TRUNVUkUiLCJodHRwT25seSIsInNhbWVTaXRlIiwibWF4QWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

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