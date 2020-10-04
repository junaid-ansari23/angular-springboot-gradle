webpackJsonp([1,5],{

/***/ 220:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 220;


/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(232);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.isRunning = false;
        this.isError = false;
        this.host = 'http://localhost:8080';
        //status endpoint
        this.api_status = '/api/status';
        //status endpoint (when running angular & backend seperately)
        this.api_status_local = this.host + this.api_status;
        this.app_status = '';
        this.app_refresh_time = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    AppComponent.prototype.refreshData = function () {
        var _this = this;
        this.isRunning = true;
        this.http.get(this.api_status)
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(_this.errorHandler(e)); })
            .subscribe(function (response) {
            var data = response.json();
            _this.app_status = data.status;
            _this.app_refresh_time = data.refresh_time;
            _this.isRunning = false;
        });
    };
    AppComponent.prototype.errorHandler = function (error) {
        this.isRunning = false;
        this.isError = true;
        console.log("Error in fetching status data", error);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(290),
        styles: [__webpack_require__(287)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(230);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)(false);
// imports


// module
exports.push([module.i, "#disableBg {\n    background: #e9e9e9;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    opacity: 0.5;\n}\n#cover-spin {\n    position:fixed;\n    width:100%;\n    left:0;right:0;top:0;bottom:0;\n    background-color: rgba(255,255,255,0.7);\n    z-index:9999;\n    display:none;\n}\n\n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n\n#cover-spin::after {\n    content:'';\n    display:block;\n    position:absolute;\n    left:48%;top:40%;\n    width:40px;height:40px;\n    border-style:solid;\n    border-color:black;\n    border-top-color:transparent;\n    border-width: 4px;\n    border-radius:50%;\n    animation: spin .8s linear infinite;\n}\n.disable-background{\n   position: fixed;\n   top: 0;\n   left: 0;\n   background: #2d2d2d;\n   opacity: 0.8;\n   z-index: 998;\n   height: 100%;\n   width: 100%;\n}\n.loadWrapper {  \n    background: rgba(0,0,0,0.3);  \n    width: 100%;  \n    height: 100%;  \n    position: fixed;  \n    top:0px;  \n    left:0px;  \n    z-index: 99999;  \n}  \n.loader {\n    border: 5px solid #f3f3f3; /* Light grey */\n    border-top: 5px solid #3d3e3f; /* gray */\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    animation: spin 2s linear infinite;\n}\n.dot-green {\n  height: 25px;\n  width: 25px;\n  background-color: #008000;\n  border-radius: 50%;\n  display: inline-block;\n}\n.dot-red {\n  height: 25px;\n  width: 25px;\n  background-color: #ff0000;\n  border-radius: 50%;\n  display: inline-block;\n}\n.dot-yellow {\n  height: 25px;\n  width: 25px;\n  background-color: #ffff00;\n  border-radius: 50%;\n  display: inline-block;\n}\n.dot-black {\n  height: 25px;\n  width: 25px;\n  background-color: #000000;\n  border-radius: 50%;\n  display: inline-block;\n}\n.dot-gray {\n  height: 25px;\n  width: 25px;\n  background-color: #808080;\n  border-radius: 50%;\n  display: inline-block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 290:
/***/ (function(module, exports) {

module.exports = "<div class=\"loadWrapper\" *ngIf=\"isRunning\">\n  <div class=\"loader\"></div>\n</div>\n<div class=\"jumbotron jumbotron-fluid\" style=\"height: 180px;\">\n  <div class=\"container\" style=\"margin-left: 100px;\">\n    <h1>Dashboard</h1>\n    <div>\n      <h5>App Status: {{app_status}} , Last Refresh time: {{app_refresh_time}}</h5>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(221);


/***/ })

},[582]);
//# sourceMappingURL=main.bundle.js.map