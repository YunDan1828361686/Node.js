(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["anchor-index-module"],{

/***/ "./node_modules/raw-loader/index.js!./site/src/app/anchor/basic.ts":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./site/src/app/anchor/basic.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-anchor-basic',\n  template: `\n    <nz-anchor>\n      <nz-link nzHref=\"#components-anchor-demo-basic\" nzTitle=\"Basic demo\"></nz-link>\n      <nz-link nzHref=\"#components-anchor-demo-static\" nzTitle=\"Static demo\"></nz-link>\n      <nz-link nzHref=\"#API\" nzTitle=\"API\">\n        <nz-link nzHref=\"#anchor-props\" nzTitle=\"nz-anchor\"></nz-link>\n        <nz-link nzHref=\"#link-props\" nzTitle=\"nz-link\"></nz-link>\n      </nz-link>\n    </nz-anchor>\n  `\n})\nexport class NzDemoAnchorBasicComponent { }\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./site/src/app/anchor/static.ts":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./site/src/app/anchor/static.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, ViewEncapsulation } from '@angular/core';\n\n@Component({\n  selector     : 'nz-demo-anchor-static',\n  encapsulation: ViewEncapsulation.None,\n  template     : `\n    <nz-anchor [nzAffix]=\"false\">\n      <nz-link nzHref=\"#components-anchor-demo-basic\" nzTitle=\"Basic demo\"></nz-link>\n      <nz-link nzHref=\"#components-anchor-demo-static\" nzTitle=\"Static demo\"></nz-link>\n      <nz-link nzHref=\"#API\" nzTitle=\"API\">\n        <nz-link nzHref=\"#anchor-props\" nzTitle=\"nz-anchor\"></nz-link>\n        <nz-link nzHref=\"#link-props\" nzTitle=\"nz-link\"></nz-link>\n      </nz-link>\n    </nz-anchor>\n  `\n})\nexport class NzDemoAnchorStaticComponent {\n}\n"

/***/ }),

/***/ "./site/src/app/anchor/basic.ts":
/*!**************************************!*\
  !*** ./site/src/app/anchor/basic.ts ***!
  \**************************************/
/*! exports provided: NzDemoAnchorBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoAnchorBasicComponent", function() { return NzDemoAnchorBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDemoAnchorBasicComponent = /** @class */ (function () {
    function NzDemoAnchorBasicComponent() {
    }
    NzDemoAnchorBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-demo-anchor-basic',
            template: "\n    <nz-anchor>\n      <nz-link nzHref=\"#components-anchor-demo-basic\" nzTitle=\"Basic demo\"></nz-link>\n      <nz-link nzHref=\"#components-anchor-demo-static\" nzTitle=\"Static demo\"></nz-link>\n      <nz-link nzHref=\"#API\" nzTitle=\"API\">\n        <nz-link nzHref=\"#anchor-props\" nzTitle=\"nz-anchor\"></nz-link>\n        <nz-link nzHref=\"#link-props\" nzTitle=\"nz-link\"></nz-link>\n      </nz-link>\n    </nz-anchor>\n  "
        })
    ], NzDemoAnchorBasicComponent);
    return NzDemoAnchorBasicComponent;
}());



/***/ }),

/***/ "./site/src/app/anchor/en.component.ts":
/*!*********************************************!*\
  !*** ./site/src/app/anchor/en.component.ts ***!
  \*********************************************/
/*! exports provided: NzDemoAnchorEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoAnchorEnComponent", function() { return NzDemoAnchorEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_nz_codebox_nz_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/nz-codebox/nz-codebox.component */ "./site/src/app/share/nz-codebox/nz-codebox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NzDemoAnchorEnComponent = /** @class */ (function () {
    function NzDemoAnchorEnComponent() {
        this.expanded = false;
        this.basic = "%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20Component%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40angular%2Fcore'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%40%3Cspan%20class%3D%22token%20function%22%3EComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20selector%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'nz-demo-anchor-basic'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20template-string%22%3Etemplate%3A%20%3Cspan%20class%3D%22token%20html%22%3E%60%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-anchor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23components-anchor-demo-basic%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EBasic%20demo%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23components-anchor-demo-static%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EStatic%20demo%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23API%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EAPI%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23anchor-props%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Enz-anchor%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23link-props%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Enz-link%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-anchor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%60%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eclass%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3ENzDemoAnchorBasicComponent%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A";
        this.static = "%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20Component%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20ViewEncapsulation%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40angular%2Fcore'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%40%3Cspan%20class%3D%22token%20function%22%3EComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20selector%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'nz-demo-anchor-static'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20encapsulation%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20ViewEncapsulation%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3ENone%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20template-string%22%3Etemplate%20%20%20%20%20%3A%20%3Cspan%20class%3D%22token%20html%22%3E%60%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-anchor%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%5BnzAffix%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Efalse%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23components-anchor-demo-basic%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EBasic%20demo%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23components-anchor-demo-static%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EStatic%20demo%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23API%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EAPI%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23anchor-props%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Enz-anchor%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23link-props%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Enz-link%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-anchor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%60%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eclass%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3ENzDemoAnchorStaticComponent%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A";
        this.basicRaw = __webpack_require__(/*! !raw-loader!./basic.ts */ "./node_modules/raw-loader/index.js!./site/src/app/anchor/basic.ts");
        this.staticRaw = __webpack_require__(/*! !raw-loader!./static.ts */ "./node_modules/raw-loader/index.js!./site/src/app/anchor/static.ts");
    }
    NzDemoAnchorEnComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDemoAnchorEnComponent.prototype.expandAllCode = function () {
        var _this = this;
        this.expanded = !this.expanded;
        this.codeBoxes.forEach(function (code) {
            code.nzExpanded = _this.expanded;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_share_nz_codebox_nz_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], NzDemoAnchorEnComponent.prototype, "codeBoxes", void 0);
    NzDemoAnchorEnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-demo-anchor',
            preserveWhitespaces: false,
            template: __webpack_require__(/*! ./en.html */ "./site/src/app/anchor/en.html")
        })
    ], NzDemoAnchorEnComponent);
    return NzDemoAnchorEnComponent;
}());



/***/ }),

/***/ "./site/src/app/anchor/en.html":
/*!*************************************!*\
  !*** ./site/src/app/anchor/en.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      <nz-link nzHref=\"#components-anchor-demo-basic\" nzTitle=\"Basic\"></nz-link><nz-link nzHref=\"#components-anchor-demo-static\" nzTitle=\"Static Anchor\"></nz-link>\n    </nz-anchor>\n  </nz-affix><section class=\"markdown\">\n\t<h1>Anchor<span class=\"subtitle\"></span>\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/anchor/doc/index.en-US.md\" target=\"_blank\">\n\t\t<i nz-icon type=\"edit\"></i></a>\n</h1>\n\t<section class=\"markdown\" ngNonBindable>\n\t\t<p>Hyperlinks to scroll on one page.</p>\n<h2 id=\"when-to-use\"><span>When To Use</span><a onclick=\"window.location.hash = 'when-to-use'\" class=\"anchor\">#</a></h2><p>For displaying anchor hyperlinks on page and jumping between them.</p>\n\n\t</section>\n\t\n\t<h2>\n\t\t<span>Examples</span>\n\t\t<i nz-icon type=\"appstore\" class=\"code-box-expand-trigger\" title=\"expand all code\" (click)=\"expandAllCode()\"></i>\n\t</h2>\n</section><div nz-row [nzGutter]=\"16\">\n\t<div nz-col [nzLg]=\"12\" [nzMd]=\"24\">\n\t\t<nz-code-box nzTitle=\"Basic\" [nzId]=\"'components-anchor-demo-basic'\" nzSelector=\"nz-demo-anchor-basic\" [nzLink]=\"'components-anchor-demo-basic'\" nzGenerateCommand=\"ng g ng-zorro-antd:anchor-basic -p app --name=\" nzComponentName=\"NzDemoAnchorBasicComponent\" [nzCode]=\"basic\" [nzRawCode]=\"basicRaw\" nzIframeSource=\"null\" nzIframeHeight=\"null\" [nzHref]=\"'https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/anchor/demo/basic.md'\">\n\t<nz-demo-anchor-basic demo></nz-demo-anchor-basic>\n\t<div intro ngNonBindable>\n\t\t<p>The simplest usage.</p>\n\n\t</div>\n</nz-code-box>\n\n\t</div>\n\t<div nz-col [nzLg]=\"12\" [nzMd]=\"24\">\n\t\t<nz-code-box nzTitle=\"Static Anchor\" [nzId]=\"'components-anchor-demo-static'\" nzSelector=\"nz-demo-anchor-static\" [nzLink]=\"'components-anchor-demo-static'\" nzGenerateCommand=\"ng g ng-zorro-antd:anchor-static -p app --name=\" nzComponentName=\"NzDemoAnchorStaticComponent\" [nzCode]=\"static\" [nzRawCode]=\"staticRaw\" nzIframeSource=\"null\" nzIframeHeight=\"null\" [nzHref]=\"'https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/anchor/demo/static.md'\">\n\t<nz-demo-anchor-static demo></nz-demo-anchor-static>\n\t<div intro ngNonBindable>\n\t\t<p>Do not change state when page is scrolling.</p>\n\n\t</div>\n</nz-code-box>\n\n\t</div>\n</div>\n<section class=\"markdown api-container\" ngNonBindable><h2 id=\"api\"><span>API</span><a onclick=\"window.location.hash = 'api'\" class=\"anchor\">#</a></h2><h3 id=\"nz-anchor\"><span>nz-anchor</span><label class=\"api-type-label component\">component</label><a onclick=\"window.location.hash = 'nz-anchor'\" class=\"anchor\">#</a></h3><table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>[nzAffix]</code></td>\n<td>Fixed mode of Anchor</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td><code>[nzBounds]</code></td>\n<td>Bounding distance of anchor area</td>\n<td>number</td>\n<td>5(px)</td>\n</tr>\n<tr>\n<td><code>[nzOffsetBottom]</code></td>\n<td>Pixels to offset from bottom when calculating position of scroll</td>\n<td>number</td>\n<td>-</td>\n</tr>\n<tr>\n<td><code>[nzOffsetTop]</code></td>\n<td>Pixels to offset from top when calculating position of scroll</td>\n<td>number</td>\n<td>0</td>\n</tr>\n<tr>\n<td><code>[nzShowInkInFixed]</code></td>\n<td>Whether show ink-balls in Fixed mode</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td><code>(nzClick)</code></td>\n<td>Click of Anchor item</td>\n<td><code>EventEmitter&lt;string&gt;</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td><code>(nzScroll)</code></td>\n<td>The scroll function that is triggered when scrolling to an anchor.</td>\n<td><code>EventEmitter&lt;NzAnchorLinkComponent&gt;</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"nz-link\"><span>nz-link</span><label class=\"api-type-label component\">component</label><a onclick=\"window.location.hash = 'nz-link'\" class=\"anchor\">#</a></h3><table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>[nzHref]</code></td>\n<td>target of hyperlink</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td><code>[nzTitle]</code></td>\n<td>content of  hyperlink</td>\n<td>string丨<code>TemplateRef&lt;void&gt;</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n</section></article>"

/***/ }),

/***/ "./site/src/app/anchor/index.module.ts":
/*!*********************************************!*\
  !*** ./site/src/app/anchor/index.module.ts ***!
  \*********************************************/
/*! exports provided: NzDemoAnchorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoAnchorModule", function() { return NzDemoAnchorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/share.module */ "./site/src/app/share/share.module.ts");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic */ "./site/src/app/anchor/basic.ts");
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static */ "./site/src/app/anchor/static.ts");
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zh.component */ "./site/src/app/anchor/zh.component.ts");
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en.component */ "./site/src/app/anchor/en.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NzDemoAnchorModule = /** @class */ (function () {
    function NzDemoAnchorModule() {
    }
    NzDemoAnchorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_6__["NzDemoAnchorEnComponent"] },
                    { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_5__["NzDemoAnchorZhComponent"] }
                ])
            ],
            declarations: [
                _basic__WEBPACK_IMPORTED_MODULE_3__["NzDemoAnchorBasicComponent"],
                _static__WEBPACK_IMPORTED_MODULE_4__["NzDemoAnchorStaticComponent"],
                _zh_component__WEBPACK_IMPORTED_MODULE_5__["NzDemoAnchorZhComponent"],
                _en_component__WEBPACK_IMPORTED_MODULE_6__["NzDemoAnchorEnComponent"],
            ],
            entryComponents: []
        })
    ], NzDemoAnchorModule);
    return NzDemoAnchorModule;
}());



/***/ }),

/***/ "./site/src/app/anchor/static.ts":
/*!***************************************!*\
  !*** ./site/src/app/anchor/static.ts ***!
  \***************************************/
/*! exports provided: NzDemoAnchorStaticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoAnchorStaticComponent", function() { return NzDemoAnchorStaticComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDemoAnchorStaticComponent = /** @class */ (function () {
    function NzDemoAnchorStaticComponent() {
    }
    NzDemoAnchorStaticComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-demo-anchor-static',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <nz-anchor [nzAffix]=\"false\">\n      <nz-link nzHref=\"#components-anchor-demo-basic\" nzTitle=\"Basic demo\"></nz-link>\n      <nz-link nzHref=\"#components-anchor-demo-static\" nzTitle=\"Static demo\"></nz-link>\n      <nz-link nzHref=\"#API\" nzTitle=\"API\">\n        <nz-link nzHref=\"#anchor-props\" nzTitle=\"nz-anchor\"></nz-link>\n        <nz-link nzHref=\"#link-props\" nzTitle=\"nz-link\"></nz-link>\n      </nz-link>\n    </nz-anchor>\n  "
        })
    ], NzDemoAnchorStaticComponent);
    return NzDemoAnchorStaticComponent;
}());



/***/ }),

/***/ "./site/src/app/anchor/zh.component.ts":
/*!*********************************************!*\
  !*** ./site/src/app/anchor/zh.component.ts ***!
  \*********************************************/
/*! exports provided: NzDemoAnchorZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoAnchorZhComponent", function() { return NzDemoAnchorZhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_nz_codebox_nz_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/nz-codebox/nz-codebox.component */ "./site/src/app/share/nz-codebox/nz-codebox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NzDemoAnchorZhComponent = /** @class */ (function () {
    function NzDemoAnchorZhComponent() {
        this.expanded = false;
        this.basic = "%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20Component%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40angular%2Fcore'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%40%3Cspan%20class%3D%22token%20function%22%3EComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20selector%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'nz-demo-anchor-basic'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20template-string%22%3Etemplate%3A%20%3Cspan%20class%3D%22token%20html%22%3E%60%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-anchor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23components-anchor-demo-basic%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EBasic%20demo%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23components-anchor-demo-static%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EStatic%20demo%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23API%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EAPI%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23anchor-props%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Enz-anchor%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23link-props%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Enz-link%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-anchor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%60%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eclass%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3ENzDemoAnchorBasicComponent%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A";
        this.static = "%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20Component%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20ViewEncapsulation%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40angular%2Fcore'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%40%3Cspan%20class%3D%22token%20function%22%3EComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20selector%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'nz-demo-anchor-static'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20encapsulation%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20ViewEncapsulation%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3ENone%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20template-string%22%3Etemplate%20%20%20%20%20%3A%20%3Cspan%20class%3D%22token%20html%22%3E%60%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-anchor%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%5BnzAffix%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Efalse%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23components-anchor-demo-basic%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EBasic%20demo%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23components-anchor-demo-static%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EStatic%20demo%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23API%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EAPI%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23anchor-props%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Enz-anchor%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-link%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzHref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23link-props%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Enz-link%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-link%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-anchor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%60%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eclass%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3ENzDemoAnchorStaticComponent%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A";
        this.basicRaw = __webpack_require__(/*! !raw-loader!./basic.ts */ "./node_modules/raw-loader/index.js!./site/src/app/anchor/basic.ts");
        this.staticRaw = __webpack_require__(/*! !raw-loader!./static.ts */ "./node_modules/raw-loader/index.js!./site/src/app/anchor/static.ts");
    }
    NzDemoAnchorZhComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDemoAnchorZhComponent.prototype.expandAllCode = function () {
        var _this = this;
        this.expanded = !this.expanded;
        this.codeBoxes.forEach(function (code) {
            code.nzExpanded = _this.expanded;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_share_nz_codebox_nz_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], NzDemoAnchorZhComponent.prototype, "codeBoxes", void 0);
    NzDemoAnchorZhComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-demo-anchor',
            preserveWhitespaces: false,
            template: __webpack_require__(/*! ./zh.html */ "./site/src/app/anchor/zh.html")
        })
    ], NzDemoAnchorZhComponent);
    return NzDemoAnchorZhComponent;
}());



/***/ }),

/***/ "./site/src/app/anchor/zh.html":
/*!*************************************!*\
  !*** ./site/src/app/anchor/zh.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      <nz-link nzHref=\"#components-anchor-demo-basic\" nzTitle=\"基本\"></nz-link><nz-link nzHref=\"#components-anchor-demo-static\" nzTitle=\"静态位置\"></nz-link>\n    </nz-anchor>\n  </nz-affix><section class=\"markdown\">\n\t<h1>Anchor<span class=\"subtitle\">锚点</span>\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/anchor/doc/index.zh-CN.md\" target=\"_blank\">\n\t\t<i nz-icon type=\"edit\"></i></a>\n</h1>\n\t<section class=\"markdown\" ngNonBindable>\n\t\t<p>用于跳转到页面指定位置。</p>\n<h2 id=\"何时使用\"><span>何时使用</span><a onclick=\"window.location.hash = '何时使用'\" class=\"anchor\">#</a></h2><p>需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。</p>\n\n\t</section>\n\t\n\t<h2>\n\t\t<span>代码演示</span>\n\t\t<i nz-icon type=\"appstore\" class=\"code-box-expand-trigger\" title=\"展开全部代码\" (click)=\"expandAllCode()\"></i>\n\t</h2>\n</section><div nz-row [nzGutter]=\"16\">\n\t<div nz-col [nzLg]=\"12\" [nzMd]=\"24\">\n\t\t<nz-code-box nzTitle=\"基本\" [nzId]=\"'components-anchor-demo-basic'\" nzSelector=\"nz-demo-anchor-basic\" [nzLink]=\"'components-anchor-demo-basic'\" nzGenerateCommand=\"ng g ng-zorro-antd:anchor-basic -p app --name=\" nzComponentName=\"NzDemoAnchorBasicComponent\" [nzCode]=\"basic\" [nzRawCode]=\"basicRaw\" nzIframeSource=\"null\" nzIframeHeight=\"null\" [nzHref]=\"'https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/anchor/demo/basic.md'\">\n\t<nz-demo-anchor-basic demo></nz-demo-anchor-basic>\n\t<div intro ngNonBindable>\n\t\t<p>最简单的用法。</p>\n\n\t</div>\n</nz-code-box>\n\n\t</div>\n\t<div nz-col [nzLg]=\"12\" [nzMd]=\"24\">\n\t\t<nz-code-box nzTitle=\"静态位置\" [nzId]=\"'components-anchor-demo-static'\" nzSelector=\"nz-demo-anchor-static\" [nzLink]=\"'components-anchor-demo-static'\" nzGenerateCommand=\"ng g ng-zorro-antd:anchor-static -p app --name=\" nzComponentName=\"NzDemoAnchorStaticComponent\" [nzCode]=\"static\" [nzRawCode]=\"staticRaw\" nzIframeSource=\"null\" nzIframeHeight=\"null\" [nzHref]=\"'https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/anchor/demo/static.md'\">\n\t<nz-demo-anchor-static demo></nz-demo-anchor-static>\n\t<div intro ngNonBindable>\n\t\t<p>不浮动，状态不随页面滚动变化。</p>\n\n\t</div>\n</nz-code-box>\n\n\t</div>\n</div>\n<section class=\"markdown api-container\" ngNonBindable><h2 id=\"api\"><span>API</span><a onclick=\"window.location.hash = 'api'\" class=\"anchor\">#</a></h2><h3 id=\"nz-anchor\"><span>nz-anchor</span><label class=\"api-type-label component\">component</label><a onclick=\"window.location.hash = 'nz-anchor'\" class=\"anchor\">#</a></h3><table>\n<thead>\n<tr>\n<th>成员</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>[nzAffix]</code></td>\n<td>固定模式</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td><code>[nzBounds]</code></td>\n<td>锚点区域边界</td>\n<td>number</td>\n<td>5(px)</td>\n</tr>\n<tr>\n<td><code>[nzOffsetBottom]</code></td>\n<td>距离窗口底部达到指定偏移量后触发</td>\n<td>number</td>\n<td></td>\n</tr>\n<tr>\n<td><code>[nzOffsetTop]</code></td>\n<td>距离窗口顶部达到指定偏移量后触发</td>\n<td>number</td>\n<td></td>\n</tr>\n<tr>\n<td><code>[nzShowInkInFixed]</code></td>\n<td>固定模式是否显示小圆点</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td><code>(nzClick)</code></td>\n<td>点击项触发</td>\n<td><code>EventEmitter&lt;string&gt;</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td><code>(nzScroll)</code></td>\n<td>滚动至某锚点时触发</td>\n<td><code>EventEmitter&lt;NzAnchorLinkComponent&gt;</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"nz-link\"><span>nz-link</span><label class=\"api-type-label component\">component</label><a onclick=\"window.location.hash = 'nz-link'\" class=\"anchor\">#</a></h3><table>\n<thead>\n<tr>\n<th>成员</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>[nzHref]</code></td>\n<td>锚点链接</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td><code>[nzTitle]</code></td>\n<td>文字内容</td>\n<td>string丨<code>TemplateRef&lt;void&gt;</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n</section></article>"

/***/ })

}]);
//# sourceMappingURL=anchor-index-module.js.map