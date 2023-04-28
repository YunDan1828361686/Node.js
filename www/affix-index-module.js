(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["affix-index-module"],{

/***/ "./node_modules/raw-loader/index.js!./site/src/app/affix/basic.ts":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./site/src/app/affix/basic.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector     : 'nz-demo-affix-basic',\n  template     : `\n  <nz-affix>\n    <button nz-button [nzType]=\"'primary'\">\n      <span>Affix top</span>\n    </button>\n  </nz-affix>\n  <br>\n  <nz-affix nzOffsetBottom=\"0\">\n    <button nz-button [nzType]=\"'primary'\">\n      <span>Affix bottom</span>\n    </button>\n  </nz-affix>\n  `\n})\nexport class NzDemoAffixBasicComponent {\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./site/src/app/affix/on-change.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./site/src/app/affix/on-change.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-affix-on-change',\n  template: `\n  <nz-affix [nzOffsetTop]=\"120\" (nzChange)=\"onChange($event)\">\n    <button nz-button>\n        <span>120px to affix top</span>\n    </button>\n  </nz-affix>\n  `\n})\nexport class NzDemoAffixOnChangeComponent {\n  onChange(status: boolean) {\n    console.log(status);\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./site/src/app/affix/target.ts":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./site/src/app/affix/target.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-affix-target',\n  template: `\n  <div class=\"scrollable-container\" #target>\n    <div class=\"background\">\n      <nz-affix [nzTarget]=\"target\" id=\"affix-container-target\">\n        <button nz-button [nzType]=\"'primary'\">\n            <span>Fixed at the top of container</span>\n        </button>\n      </nz-affix>\n    </div>\n  </div>\n  `,\n  styles: [`\n  :host ::ng-deep .scrollable-container {\n    height: 100px;\n    overflow-y: scroll;\n  }\n\n  :host ::ng-deep .background {\n    padding-top: 60px;\n    height: 300px;\n    background-image: url(//zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg);\n  }\n  `]\n})\nexport class NzDemoAffixTargetComponent { }\n"

/***/ }),

/***/ "./site/src/app/affix/basic.ts":
/*!*************************************!*\
  !*** ./site/src/app/affix/basic.ts ***!
  \*************************************/
/*! exports provided: NzDemoAffixBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoAffixBasicComponent", function() { return NzDemoAffixBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDemoAffixBasicComponent = /** @class */ (function () {
    function NzDemoAffixBasicComponent() {
    }
    NzDemoAffixBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-demo-affix-basic',
            template: "\n  <nz-affix>\n    <button nz-button [nzType]=\"'primary'\">\n      <span>Affix top</span>\n    </button>\n  </nz-affix>\n  <br>\n  <nz-affix nzOffsetBottom=\"0\">\n    <button nz-button [nzType]=\"'primary'\">\n      <span>Affix bottom</span>\n    </button>\n  </nz-affix>\n  "
        })
    ], NzDemoAffixBasicComponent);
    return NzDemoAffixBasicComponent;
}());



/***/ }),

/***/ "./site/src/app/affix/en.component.ts":
/*!********************************************!*\
  !*** ./site/src/app/affix/en.component.ts ***!
  \********************************************/
/*! exports provided: NzDemoAffixEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoAffixEnComponent", function() { return NzDemoAffixEnComponent; });
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


var NzDemoAffixEnComponent = /** @class */ (function () {
    function NzDemoAffixEnComponent() {
        this.expanded = false;
        this.basic = "%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20Component%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40angular%2Fcore'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%40%3Cspan%20class%3D%22token%20function%22%3EComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20selector%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'nz-demo-affix-basic'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20template-string%22%3Etemplate%20%20%20%20%20%3A%20%3Cspan%20class%3D%22token%20html%22%3E%60%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Enz-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%5BnzType%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3Eprimary%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EAffix%20top%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebr%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-affix%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzOffsetBottom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E0%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Enz-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%5BnzType%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3Eprimary%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EAffix%20bottom%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%60%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eclass%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3ENzDemoAffixBasicComponent%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A";
        this.onChange = "%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20Component%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40angular%2Fcore'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%40%3Cspan%20class%3D%22token%20function%22%3EComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20selector%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'nz-demo-affix-on-change'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20template-string%22%3Etemplate%3A%20%3Cspan%20class%3D%22token%20html%22%3E%60%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-affix%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%5BnzOffsetTop%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E120%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E(nzChange)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EonChange(%24event)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Enz-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E120px%20to%20affix%20top%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%60%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eclass%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3ENzDemoAffixOnChangeComponent%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3EonChange%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Estatus%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eboolean%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Estatus%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A";
        this.target = "%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20Component%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40angular%2Fcore'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%40%3Cspan%20class%3D%22token%20function%22%3EComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20selector%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'nz-demo-affix-target'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20template-string%22%3Etemplate%3A%20%3Cspan%20class%3D%22token%20html%22%3E%60%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Escrollable-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23target%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ebackground%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-affix%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%5BnzTarget%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etarget%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eaffix-container-target%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Enz-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%5BnzType%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3Eprimary%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EFixed%20at%20the%20top%20of%20container%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%60%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20styles-string%22%3Estyles%3A%20%5B%3Cspan%20class%3D%22token%20css%22%3E%3Cspan%20class%3D%22token%20selector%22%3E%60%0A%20%20%3Cspan%20class%3D%22token%20pseudo-class%22%3E%3Ahost%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20pseudo-element%22%3E%3A%3Ang-deep%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class%22%3E.scrollable-container%3C%2Fspan%3E%20%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Eheight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E100%3C%2Fspan%3Epx%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Eoverflow-y%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20scroll%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20selector%22%3E%3Cspan%20class%3D%22token%20pseudo-class%22%3E%3Ahost%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20pseudo-element%22%3E%3A%3Ang-deep%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class%22%3E.background%3C%2Fspan%3E%20%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Epadding-top%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E60%3C%2Fspan%3Epx%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Eheight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E300%3C%2Fspan%3Epx%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Ebackground-image%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20url%22%3Eurl(%2F%2Fzos.alipayobjects.com%2Frmsportal%2FRmjwQiJorKyobvI.jpg)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%60%3C%2Fspan%3E%5D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eclass%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3ENzDemoAffixTargetComponent%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A";
        this.basicRaw = __webpack_require__(/*! !raw-loader!./basic.ts */ "./node_modules/raw-loader/index.js!./site/src/app/affix/basic.ts");
        this.onChangeRaw = __webpack_require__(/*! !raw-loader!./on-change.ts */ "./node_modules/raw-loader/index.js!./site/src/app/affix/on-change.ts");
        this.targetRaw = __webpack_require__(/*! !raw-loader!./target.ts */ "./node_modules/raw-loader/index.js!./site/src/app/affix/target.ts");
    }
    NzDemoAffixEnComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDemoAffixEnComponent.prototype.expandAllCode = function () {
        var _this = this;
        this.expanded = !this.expanded;
        this.codeBoxes.forEach(function (code) {
            code.nzExpanded = _this.expanded;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_share_nz_codebox_nz_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], NzDemoAffixEnComponent.prototype, "codeBoxes", void 0);
    NzDemoAffixEnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-demo-affix',
            preserveWhitespaces: false,
            template: __webpack_require__(/*! ./en.html */ "./site/src/app/affix/en.html")
        })
    ], NzDemoAffixEnComponent);
    return NzDemoAffixEnComponent;
}());



/***/ }),

/***/ "./site/src/app/affix/en.html":
/*!************************************!*\
  !*** ./site/src/app/affix/en.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      <nz-link nzHref=\"#components-affix-demo-basic\" nzTitle=\"Basic\"></nz-link><nz-link nzHref=\"#components-affix-demo-on-change\" nzTitle=\"Callback\"></nz-link><nz-link nzHref=\"#components-affix-demo-target\" nzTitle=\"Container to scroll.\"></nz-link>\n    </nz-anchor>\n  </nz-affix><section class=\"markdown\">\n\t<h1>Affix<span class=\"subtitle\"></span>\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/affix/doc/index.en-US.md\" target=\"_blank\">\n\t\t<i nz-icon type=\"edit\"></i></a>\n</h1>\n\t<section class=\"markdown\" ngNonBindable>\n\t\t<p>Make an element stick to viewport.</p>\n<h2 id=\"when-to-use\"><span>When To Use</span><a onclick=\"window.location.hash = 'when-to-use'\" class=\"anchor\">#</a></h2><p>When user browses a long web page, some content need to stick to the viewport. This is common for menus and actions.</p>\n<p>Please note that Affix should not cover other content on the page, especially when the size of the viewport is small.</p>\n\n\t</section>\n\t\n\t<h2>\n\t\t<span>Examples</span>\n\t\t<i nz-icon type=\"appstore\" class=\"code-box-expand-trigger\" title=\"expand all code\" (click)=\"expandAllCode()\"></i>\n\t</h2>\n</section><div nz-row [nzGutter]=\"16\">\n\t<div nz-col [nzLg]=\"12\" [nzMd]=\"24\">\n\t\t<nz-code-box nzTitle=\"Basic\" [nzId]=\"'components-affix-demo-basic'\" nzSelector=\"nz-demo-affix-basic\" [nzLink]=\"'components-affix-demo-basic'\" nzGenerateCommand=\"ng g ng-zorro-antd:affix-basic -p app --name=\" nzComponentName=\"NzDemoAffixBasicComponent\" [nzCode]=\"basic\" [nzRawCode]=\"basicRaw\" nzIframeSource=\"null\" nzIframeHeight=\"null\" [nzHref]=\"'https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/affix/demo/basic.md'\">\n\t<nz-demo-affix-basic demo></nz-demo-affix-basic>\n\t<div intro ngNonBindable>\n\t\t<p>The simplest usage.</p>\n\n\t</div>\n</nz-code-box>\n<nz-code-box nzTitle=\"Container to scroll.\" [nzId]=\"'components-affix-demo-target'\" nzSelector=\"nz-demo-affix-target\" [nzLink]=\"'components-affix-demo-target'\" nzGenerateCommand=\"ng g ng-zorro-antd:affix-target -p app --name=\" nzComponentName=\"NzDemoAffixTargetComponent\" [nzCode]=\"target\" [nzRawCode]=\"targetRaw\" nzIframeSource=\"null\" nzIframeHeight=\"null\" [nzHref]=\"'https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/affix/demo/target.md'\">\n\t<nz-demo-affix-target demo></nz-demo-affix-target>\n\t<div intro ngNonBindable>\n\t\t<p>Set a <code>nzTarget</code> for &#39;nz-affix&#39;, which is listen to scroll event of target element (default is <code>window</code>).</p>\n\n\t</div>\n</nz-code-box>\n\n\t</div>\n\t<div nz-col [nzLg]=\"12\" [nzMd]=\"24\">\n\t\t<nz-code-box nzTitle=\"Callback\" [nzId]=\"'components-affix-demo-on-change'\" nzSelector=\"nz-demo-affix-on-change\" [nzLink]=\"'components-affix-demo-on-change'\" nzGenerateCommand=\"ng g ng-zorro-antd:affix-on-change -p app --name=\" nzComponentName=\"NzDemoAffixOnChangeComponent\" [nzCode]=\"onChange\" [nzRawCode]=\"onChangeRaw\" nzIframeSource=\"null\" nzIframeHeight=\"null\" [nzHref]=\"'https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/affix/demo/on-change.md'\">\n\t<nz-demo-affix-on-change demo></nz-demo-affix-on-change>\n\t<div intro ngNonBindable>\n\t\t<p>Callback with affixed state.</p>\n\n\t</div>\n</nz-code-box>\n\n\t</div>\n</div>\n<section class=\"markdown api-container\" ngNonBindable><h2 id=\"api\"><span>API</span><a onclick=\"window.location.hash = 'api'\" class=\"anchor\">#</a></h2><h3 id=\"nz-affix\"><span>nz-affix</span><label class=\"api-type-label component\">component</label><a onclick=\"window.location.hash = 'nz-affix'\" class=\"anchor\">#</a></h3><table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>[nzOffsetBottom]</code></td>\n<td>Pixels to offset from bottom when calculating position of scroll</td>\n<td>number</td>\n<td>-</td>\n</tr>\n<tr>\n<td><code>[nzOffsetTop]</code></td>\n<td>Pixels to offset from top when calculating position of scroll</td>\n<td>number</td>\n<td>0</td>\n</tr>\n<tr>\n<td><code>[nzTarget]</code></td>\n<td>specifies the scrollable area dom node</td>\n<td><code>HTMLElement</code></td>\n<td><code>window</code></td>\n</tr>\n<tr>\n<td><code>(nzChange)</code></td>\n<td>Callback for when affix state is changed</td>\n<td><code>EventEmitter&lt;boolean&gt;</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<p><strong>Note:</strong> Children of <code>nz-affix</code> can not be <code>position: absolute</code>, but you can set <code>nz-affix</code> as <code>position: absolute</code>:</p>\n<pre><code class=\"lang-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>nz-affix</span><span class=\"token style-attr language-css\"><span class=\"token attr-name\"> <span class=\"token attr-name\">style</span></span><span class=\"token punctuation\">=\"</span><span class=\"token attr-value\"><span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span> <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">10</span>px, <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> <span class=\"token number\">10</span>px</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token operator\">...</span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>nz-affix</span><span class=\"token punctuation\">></span></span>\n</code></pre>\n</section></article>"

/***/ }),

/***/ "./site/src/app/affix/index.module.ts":
/*!********************************************!*\
  !*** ./site/src/app/affix/index.module.ts ***!
  \********************************************/
/*! exports provided: NzDemoAffixModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoAffixModule", function() { return NzDemoAffixModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/share.module */ "./site/src/app/share/share.module.ts");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic */ "./site/src/app/affix/basic.ts");
/* harmony import */ var _on_change__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./on-change */ "./site/src/app/affix/on-change.ts");
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./target */ "./site/src/app/affix/target.ts");
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zh.component */ "./site/src/app/affix/zh.component.ts");
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./en.component */ "./site/src/app/affix/en.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NzDemoAffixModule = /** @class */ (function () {
    function NzDemoAffixModule() {
    }
    NzDemoAffixModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_7__["NzDemoAffixEnComponent"] },
                    { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_6__["NzDemoAffixZhComponent"] }
                ])
            ],
            declarations: [
                _basic__WEBPACK_IMPORTED_MODULE_3__["NzDemoAffixBasicComponent"],
                _on_change__WEBPACK_IMPORTED_MODULE_4__["NzDemoAffixOnChangeComponent"],
                _target__WEBPACK_IMPORTED_MODULE_5__["NzDemoAffixTargetComponent"],
                _zh_component__WEBPACK_IMPORTED_MODULE_6__["NzDemoAffixZhComponent"],
                _en_component__WEBPACK_IMPORTED_MODULE_7__["NzDemoAffixEnComponent"],
            ],
            entryComponents: []
        })
    ], NzDemoAffixModule);
    return NzDemoAffixModule;
}());



/***/ }),

/***/ "./site/src/app/affix/on-change.ts":
/*!*****************************************!*\
  !*** ./site/src/app/affix/on-change.ts ***!
  \*****************************************/
/*! exports provided: NzDemoAffixOnChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoAffixOnChangeComponent", function() { return NzDemoAffixOnChangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDemoAffixOnChangeComponent = /** @class */ (function () {
    function NzDemoAffixOnChangeComponent() {
    }
    NzDemoAffixOnChangeComponent.prototype.onChange = function (status) {
        console.log(status);
    };
    NzDemoAffixOnChangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-demo-affix-on-change',
            template: "\n  <nz-affix [nzOffsetTop]=\"120\" (nzChange)=\"onChange($event)\">\n    <button nz-button>\n        <span>120px to affix top</span>\n    </button>\n  </nz-affix>\n  "
        })
    ], NzDemoAffixOnChangeComponent);
    return NzDemoAffixOnChangeComponent;
}());



/***/ }),

/***/ "./site/src/app/affix/target.ts":
/*!**************************************!*\
  !*** ./site/src/app/affix/target.ts ***!
  \**************************************/
/*! exports provided: NzDemoAffixTargetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoAffixTargetComponent", function() { return NzDemoAffixTargetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDemoAffixTargetComponent = /** @class */ (function () {
    function NzDemoAffixTargetComponent() {
    }
    NzDemoAffixTargetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-demo-affix-target',
            template: "\n  <div class=\"scrollable-container\" #target>\n    <div class=\"background\">\n      <nz-affix [nzTarget]=\"target\" id=\"affix-container-target\">\n        <button nz-button [nzType]=\"'primary'\">\n            <span>Fixed at the top of container</span>\n        </button>\n      </nz-affix>\n    </div>\n  </div>\n  ",
            styles: ["\n  :host ::ng-deep .scrollable-container {\n    height: 100px;\n    overflow-y: scroll;\n  }\n\n  :host ::ng-deep .background {\n    padding-top: 60px;\n    height: 300px;\n    background-image: url(//zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg);\n  }\n  "]
        })
    ], NzDemoAffixTargetComponent);
    return NzDemoAffixTargetComponent;
}());



/***/ }),

/***/ "./site/src/app/affix/zh.component.ts":
/*!********************************************!*\
  !*** ./site/src/app/affix/zh.component.ts ***!
  \********************************************/
/*! exports provided: NzDemoAffixZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoAffixZhComponent", function() { return NzDemoAffixZhComponent; });
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


var NzDemoAffixZhComponent = /** @class */ (function () {
    function NzDemoAffixZhComponent() {
        this.expanded = false;
        this.basic = "%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20Component%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40angular%2Fcore'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%40%3Cspan%20class%3D%22token%20function%22%3EComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20selector%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'nz-demo-affix-basic'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20template-string%22%3Etemplate%20%20%20%20%20%3A%20%3Cspan%20class%3D%22token%20html%22%3E%60%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Enz-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%5BnzType%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3Eprimary%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EAffix%20top%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebr%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-affix%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EnzOffsetBottom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E0%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Enz-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%5BnzType%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3Eprimary%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EAffix%20bottom%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%60%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eclass%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3ENzDemoAffixBasicComponent%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A";
        this.onChange = "%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20Component%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40angular%2Fcore'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%40%3Cspan%20class%3D%22token%20function%22%3EComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20selector%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'nz-demo-affix-on-change'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20template-string%22%3Etemplate%3A%20%3Cspan%20class%3D%22token%20html%22%3E%60%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-affix%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%5BnzOffsetTop%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E120%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E(nzChange)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EonChange(%24event)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Enz-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E120px%20to%20affix%20top%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%60%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eclass%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3ENzDemoAffixOnChangeComponent%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3EonChange%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Estatus%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eboolean%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Estatus%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A";
        this.target = "%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20Component%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40angular%2Fcore'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%40%3Cspan%20class%3D%22token%20function%22%3EComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20selector%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'nz-demo-affix-target'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20template-string%22%3Etemplate%3A%20%3Cspan%20class%3D%22token%20html%22%3E%60%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Escrollable-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23target%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ebackground%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Enz-affix%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%5BnzTarget%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etarget%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eaffix-container-target%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Enz-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%5BnzType%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3Eprimary%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EFixed%20at%20the%20top%20of%20container%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Enz-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%60%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20styles-string%22%3Estyles%3A%20%5B%3Cspan%20class%3D%22token%20css%22%3E%3Cspan%20class%3D%22token%20selector%22%3E%60%0A%20%20%3Cspan%20class%3D%22token%20pseudo-class%22%3E%3Ahost%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20pseudo-element%22%3E%3A%3Ang-deep%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class%22%3E.scrollable-container%3C%2Fspan%3E%20%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Eheight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E100%3C%2Fspan%3Epx%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Eoverflow-y%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20scroll%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20selector%22%3E%3Cspan%20class%3D%22token%20pseudo-class%22%3E%3Ahost%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20pseudo-element%22%3E%3A%3Ang-deep%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class%22%3E.background%3C%2Fspan%3E%20%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Epadding-top%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E60%3C%2Fspan%3Epx%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Eheight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E300%3C%2Fspan%3Epx%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Ebackground-image%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20url%22%3Eurl(%2F%2Fzos.alipayobjects.com%2Frmsportal%2FRmjwQiJorKyobvI.jpg)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%60%3C%2Fspan%3E%5D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eclass%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3ENzDemoAffixTargetComponent%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A";
        this.basicRaw = __webpack_require__(/*! !raw-loader!./basic.ts */ "./node_modules/raw-loader/index.js!./site/src/app/affix/basic.ts");
        this.onChangeRaw = __webpack_require__(/*! !raw-loader!./on-change.ts */ "./node_modules/raw-loader/index.js!./site/src/app/affix/on-change.ts");
        this.targetRaw = __webpack_require__(/*! !raw-loader!./target.ts */ "./node_modules/raw-loader/index.js!./site/src/app/affix/target.ts");
    }
    NzDemoAffixZhComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDemoAffixZhComponent.prototype.expandAllCode = function () {
        var _this = this;
        this.expanded = !this.expanded;
        this.codeBoxes.forEach(function (code) {
            code.nzExpanded = _this.expanded;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_share_nz_codebox_nz_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], NzDemoAffixZhComponent.prototype, "codeBoxes", void 0);
    NzDemoAffixZhComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-demo-affix',
            preserveWhitespaces: false,
            template: __webpack_require__(/*! ./zh.html */ "./site/src/app/affix/zh.html")
        })
    ], NzDemoAffixZhComponent);
    return NzDemoAffixZhComponent;
}());



/***/ }),

/***/ "./site/src/app/affix/zh.html":
/*!************************************!*\
  !*** ./site/src/app/affix/zh.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      <nz-link nzHref=\"#components-affix-demo-basic\" nzTitle=\"基本\"></nz-link><nz-link nzHref=\"#components-affix-demo-on-change\" nzTitle=\"固定状态改变的回调\"></nz-link><nz-link nzHref=\"#components-affix-demo-target\" nzTitle=\"滚动容器\"></nz-link>\n    </nz-anchor>\n  </nz-affix><section class=\"markdown\">\n\t<h1>Affix<span class=\"subtitle\">固钉</span>\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/affix/doc/index.zh-CN.md\" target=\"_blank\">\n\t\t<i nz-icon type=\"edit\"></i></a>\n</h1>\n\t<section class=\"markdown\" ngNonBindable>\n\t\t<p>将页面元素钉在可视范围。</p>\n<h2 id=\"何时使用\"><span>何时使用</span><a onclick=\"window.location.hash = '何时使用'\" class=\"anchor\">#</a></h2><p>当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。</p>\n<p>页面可视范围过小时，慎用此功能以免遮挡页面内容。</p>\n\n\t</section>\n\t\n\t<h2>\n\t\t<span>代码演示</span>\n\t\t<i nz-icon type=\"appstore\" class=\"code-box-expand-trigger\" title=\"展开全部代码\" (click)=\"expandAllCode()\"></i>\n\t</h2>\n</section><div nz-row [nzGutter]=\"16\">\n\t<div nz-col [nzLg]=\"12\" [nzMd]=\"24\">\n\t\t<nz-code-box nzTitle=\"基本\" [nzId]=\"'components-affix-demo-basic'\" nzSelector=\"nz-demo-affix-basic\" [nzLink]=\"'components-affix-demo-basic'\" nzGenerateCommand=\"ng g ng-zorro-antd:affix-basic -p app --name=\" nzComponentName=\"NzDemoAffixBasicComponent\" [nzCode]=\"basic\" [nzRawCode]=\"basicRaw\" nzIframeSource=\"null\" nzIframeHeight=\"null\" [nzHref]=\"'https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/affix/demo/basic.md'\">\n\t<nz-demo-affix-basic demo></nz-demo-affix-basic>\n\t<div intro ngNonBindable>\n\t\t<p>最简单的用法。</p>\n\n\t</div>\n</nz-code-box>\n<nz-code-box nzTitle=\"滚动容器\" [nzId]=\"'components-affix-demo-target'\" nzSelector=\"nz-demo-affix-target\" [nzLink]=\"'components-affix-demo-target'\" nzGenerateCommand=\"ng g ng-zorro-antd:affix-target -p app --name=\" nzComponentName=\"NzDemoAffixTargetComponent\" [nzCode]=\"target\" [nzRawCode]=\"targetRaw\" nzIframeSource=\"null\" nzIframeHeight=\"null\" [nzHref]=\"'https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/affix/demo/target.md'\">\n\t<nz-demo-affix-target demo></nz-demo-affix-target>\n\t<div intro ngNonBindable>\n\t\t<p>用 <code>nzTarget</code> 设置 <code>nz-affix</code> 需要监听其滚动事件的元素，默认为 <code>window</code>。</p>\n\n\t</div>\n</nz-code-box>\n\n\t</div>\n\t<div nz-col [nzLg]=\"12\" [nzMd]=\"24\">\n\t\t<nz-code-box nzTitle=\"固定状态改变的回调\" [nzId]=\"'components-affix-demo-on-change'\" nzSelector=\"nz-demo-affix-on-change\" [nzLink]=\"'components-affix-demo-on-change'\" nzGenerateCommand=\"ng g ng-zorro-antd:affix-on-change -p app --name=\" nzComponentName=\"NzDemoAffixOnChangeComponent\" [nzCode]=\"onChange\" [nzRawCode]=\"onChangeRaw\" nzIframeSource=\"null\" nzIframeHeight=\"null\" [nzHref]=\"'https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/affix/demo/on-change.md'\">\n\t<nz-demo-affix-on-change demo></nz-demo-affix-on-change>\n\t<div intro ngNonBindable>\n\t\t<p>可以获得是否固定的状态。</p>\n\n\t</div>\n</nz-code-box>\n\n\t</div>\n</div>\n<section class=\"markdown api-container\" ngNonBindable><h2 id=\"api\"><span>API</span><a onclick=\"window.location.hash = 'api'\" class=\"anchor\">#</a></h2><h3 id=\"nz-affix\"><span>nz-affix</span><label class=\"api-type-label component\">component</label><a onclick=\"window.location.hash = 'nz-affix'\" class=\"anchor\">#</a></h3><table>\n<thead>\n<tr>\n<th>成员</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>[nzOffsetBottom]</code></td>\n<td>距离窗口底部达到指定偏移量后触发</td>\n<td>number</td>\n<td></td>\n</tr>\n<tr>\n<td><code>[nzOffsetTop]</code></td>\n<td>距离窗口顶部达到指定偏移量后触发</td>\n<td>number</td>\n<td></td>\n</tr>\n<tr>\n<td><code>[nzTarget]</code></td>\n<td>设置 <code>nz-affix</code> 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数</td>\n<td><code>HTMLElement</code></td>\n<td><code>window</code></td>\n</tr>\n<tr>\n<td><code>(nzChange)</code></td>\n<td>固定状态改变时触发的回调函数</td>\n<td><code>EventEmitter&lt;boolean&gt;</code></td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n<p><strong>注意：</strong><code>nz-affix</code> 内的元素不要使用绝对定位，如需要绝对定位的效果，可以直接设置 <code>nz-affix</code> 为绝对定位：</p>\n<pre><code class=\"lang-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>nz-affix</span><span class=\"token style-attr language-css\"><span class=\"token attr-name\"> <span class=\"token attr-name\">style</span></span><span class=\"token punctuation\">=\"</span><span class=\"token attr-value\"><span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span> <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">10</span>px, <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> <span class=\"token number\">10</span>px</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token operator\">...</span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>nz-affix</span><span class=\"token punctuation\">></span></span>\n</code></pre>\n</section></article>"

/***/ })

}]);
//# sourceMappingURL=affix-index-module.js.map