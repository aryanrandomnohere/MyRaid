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
exports.id = "app/api/auth/logout/route";
exports.ids = ["app/api/auth/logout/route"];
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

/***/ "(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=%2FUsers%2Faryanrathore%2FDesktop%2FMyraid%2Fapps%2Fweb%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faryanrathore%2FDesktop%2FMyraid%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=%2FUsers%2Faryanrathore%2FDesktop%2FMyraid%2Fapps%2Fweb%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faryanrathore%2FDesktop%2FMyraid%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/../../node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/../../node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/../../node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_aryanrathore_Desktop_Myraid_apps_web_src_app_api_auth_logout_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/logout/route.ts */ \"(rsc)/./src/app/api/auth/logout/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/logout/route\",\n        pathname: \"/api/auth/logout\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/logout/route\"\n    },\n    resolvedPagePath: \"/Users/aryanrathore/Desktop/Myraid/apps/web/src/app/api/auth/logout/route.ts\",\n    nextConfigOutput,\n    userland: _Users_aryanrathore_Desktop_Myraid_apps_web_src_app_api_auth_logout_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/logout/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGYXV0aCUyRmxvZ291dCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYXV0aCUyRmxvZ291dCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZsb2dvdXQlMkZyb3V0ZS50cyZhcHBEaXI9JTJGVXNlcnMlMkZhcnlhbnJhdGhvcmUlMkZEZXNrdG9wJTJGTXlyYWlkJTJGYXBwcyUyRndlYiUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZhcnlhbnJhdGhvcmUlMkZEZXNrdG9wJTJGTXlyYWlkJTJGYXBwcyUyRndlYiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNEI7QUFDekc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLWhhcmJvci8/OGRjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvYXJ5YW5yYXRob3JlL0Rlc2t0b3AvTXlyYWlkL2FwcHMvd2ViL3NyYy9hcHAvYXBpL2F1dGgvbG9nb3V0L3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL2xvZ291dC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvbG9nb3V0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL2xvZ291dC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9hcnlhbnJhdGhvcmUvRGVza3RvcC9NeXJhaWQvYXBwcy93ZWIvc3JjL2FwcC9hcGkvYXV0aC9sb2dvdXQvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvbG9nb3V0L3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=%2FUsers%2Faryanrathore%2FDesktop%2FMyraid%2Fapps%2Fweb%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faryanrathore%2FDesktop%2FMyraid%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/logout/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/auth/logout/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/../../node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n\n\nasync function POST() {\n    const response = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        status: \"ok\"\n    });\n    const options = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.getCookieOptions)();\n    response.cookies.set(\"access_token\", \"\", {\n        ...options,\n        maxAge: 0\n    });\n    return response;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL2xvZ291dC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFDRztBQUV2QyxlQUFlRTtJQUNwQixNQUFNQyxXQUFXSCxxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO1FBQUVDLFFBQVE7SUFBSztJQUNsRCxNQUFNQyxVQUFVTCwyREFBZ0JBO0lBQ2hDRSxTQUFTSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsSUFBSTtRQUFFLEdBQUdGLE9BQU87UUFBRUcsUUFBUTtJQUFFO0lBQ2pFLE9BQU9OO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLWhhcmJvci8uL3NyYy9hcHAvYXBpL2F1dGgvbG9nb3V0L3JvdXRlLnRzP2QyNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRDb29raWVPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gTmV4dFJlc3BvbnNlLmpzb24oeyBzdGF0dXM6IFwib2tcIiB9KTtcbiAgY29uc3Qgb3B0aW9ucyA9IGdldENvb2tpZU9wdGlvbnMoKTtcbiAgcmVzcG9uc2UuY29va2llcy5zZXQoXCJhY2Nlc3NfdG9rZW5cIiwgXCJcIiwgeyAuLi5vcHRpb25zLCBtYXhBZ2U6IDAgfSk7XG4gIHJldHVybiByZXNwb25zZTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRDb29raWVPcHRpb25zIiwiUE9TVCIsInJlc3BvbnNlIiwianNvbiIsInN0YXR1cyIsIm9wdGlvbnMiLCJjb29raWVzIiwic2V0IiwibWF4QWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/logout/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=%2FUsers%2Faryanrathore%2FDesktop%2FMyraid%2Fapps%2Fweb%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faryanrathore%2FDesktop%2FMyraid%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();