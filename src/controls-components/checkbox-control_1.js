/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
System.register(['@angular/core', '../control-meta/base'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, base_1;
    var CheckBoxControl;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (base_1_1) {
                base_1 = base_1_1;
            }],
        execute: function() {
            CheckBoxControl = (function (_super) {
                __extends(CheckBoxControl, _super);
                function CheckBoxControl() {
                    _super.apply(this, arguments);
                    this.self = this;
                }
                CheckBoxControl.prototype.ngOnInit = function () {
                    this.checkedValue = this.controlMeta['checkedValue'];
                    this.unCheckedValue = this.controlMeta['unCheckedValue '];
                    this.init(this.controlMeta, this.util, this.dataObject);
                    this.dataObject[this.valueProperty] = this.dataObject[this.valueProperty] || false;
                };
                Object.defineProperty(CheckBoxControl.prototype, "checkedValue", {
                    get: function () {
                        return this._checkedValue || true;
                    },
                    set: function (_checkedValue) {
                        this._checkedValue = _checkedValue || true;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CheckBoxControl.prototype, "unCheckedValue", {
                    get: function () {
                        return this._unCheckedValue || false;
                    },
                    set: function (unCheckedValue) {
                        this._unCheckedValue = unCheckedValue || false;
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input('controlmeta'), 
                    __metadata('design:type', CheckBoxControl)
                ], CheckBoxControl.prototype, "controlMeta", void 0);
                __decorate([
                    core_1.Input('util'), 
                    __metadata('design:type', Object)
                ], CheckBoxControl.prototype, "util", void 0);
                __decorate([
                    core_1.Input('dynaForm'), 
                    __metadata('design:type', Object)
                ], CheckBoxControl.prototype, "dynaForm", void 0);
                __decorate([
                    core_1.Input('dataObject'), 
                    __metadata('design:type', Object)
                ], CheckBoxControl.prototype, "dataObject", void 0);
                __decorate([
                    core_1.Input('utilInfos'), 
                    __metadata('design:type', Object)
                ], CheckBoxControl.prototype, "utilInfos", void 0);
                CheckBoxControl = __decorate([
                    core_1.Component({
                        selector: 'check-box',
                        template: "\n        <div *ngIf=\"enable\" [formGroup]=\"dynaForm\" [ngClass]=\"{'has-error':dynaForm && dynaForm.controls[valueProperty] && !dynaForm.controls[valueProperty].valid && dynaForm.controls[valueProperty].touched}\">\n            <div class=\"checkbox\"  *ngIf=\"utilInfos.formStyle === 'bootstrap_vertical'  || utilInfos.formStyle === 'bootstrap_inline'\">\n                <label [attr.for]=\"valueProperty\"><input type=\"checkbox\" [name]= \"valueProperty\"  [id]= \"valueProperty\" [formControlName]=\"valueProperty\" [(ngModel)]=\"dataObject[valueProperty]\">{{label}}</label>\n                <dyna-validation-block [self]=\"self\"></dyna-validation-block>\n           </div>\n            <div class=\"form-group\"  *ngIf=\"utilInfos.formStyle === 'bootstrap_horizontal'\">\n               <div class=\"col-sm-offset-2 col-sm-10\">\n                  <label [attr.for]=\"valueProperty\"><input type=\"checkbox\" [name]= \"valueProperty\"  [id]= \"valueProperty\" [formControlName]=\"valueProperty\" value=\"{{checkedValue}}\" [(ngModel)]=\"dataObject[valueProperty]\">{{label}}</label>\n               <dyna-validation-block [self]=\"self\"></dyna-validation-block>\n               </div>\n           </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CheckBoxControl);
                return CheckBoxControl;
            }(base_1.BaseControl));
            exports_1("CheckBoxControl", CheckBoxControl);
        }
    }
});
//# sourceMappingURL=checkbox-control_1.js.map