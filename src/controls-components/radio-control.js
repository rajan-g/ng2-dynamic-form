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
    var RadioControl;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (base_1_1) {
                base_1 = base_1_1;
            }],
        execute: function() {
            RadioControl = (function (_super) {
                __extends(RadioControl, _super);
                function RadioControl() {
                    _super.apply(this, arguments);
                    this.self = this;
                }
                RadioControl.prototype.ngOnInit = function () {
                    this.options = this.controlMeta['options'];
                    this.init(this.controlMeta, this.util, this.dataObject);
                    this.dataObject[this.valueProperty] = this.dataObject[this.valueProperty] || false;
                };
                Object.defineProperty(RadioControl.prototype, "options", {
                    get: function () {
                        return this._options || [];
                    },
                    set: function (options) {
                        options = options || [];
                        //set as key value list
                        var tempOptions = [];
                        for (var i = 0; i < options.length; i++) {
                            var opt = options[i];
                            var tempOpt = {};
                            if (opt.label) {
                                tempOpt['label'] = opt.label;
                            }
                            else {
                                tempOpt['label'] = typeof opt === 'string' ? opt : opt.value || opt;
                            }
                            if (opt.value) {
                                tempOpt['value'] = opt.value;
                            }
                            else {
                                tempOpt['value'] = typeof opt === 'string' ? opt : opt.label || opt;
                            }
                            tempOptions.push(tempOpt);
                        }
                        this._options = tempOptions;
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input('controlmeta'), 
                    __metadata('design:type', RadioControl)
                ], RadioControl.prototype, "controlMeta", void 0);
                __decorate([
                    core_1.Input('util'), 
                    __metadata('design:type', Object)
                ], RadioControl.prototype, "util", void 0);
                __decorate([
                    core_1.Input('dynaForm'), 
                    __metadata('design:type', Object)
                ], RadioControl.prototype, "dynaForm", void 0);
                __decorate([
                    core_1.Input('dataObject'), 
                    __metadata('design:type', Object)
                ], RadioControl.prototype, "dataObject", void 0);
                __decorate([
                    core_1.Input('utilInfos'), 
                    __metadata('design:type', Object)
                ], RadioControl.prototype, "utilInfos", void 0);
                RadioControl = __decorate([
                    core_1.Component({
                        selector: 'radio-ctl',
                        template: "\n        <div *ngIf=\"enable\" [formGroup]=\"dynaForm\" [ngClass]=\"{'has-error':dynaForm && dynaForm.controls[valueProperty] && !dynaForm.controls[valueProperty].valid && dynaForm.controls[valueProperty].touched}\">\n            <div class=\"\"  *ngIf=\"utilInfos.formStyle === 'bootstrap_vertical'  || utilInfos.formStyle === 'bootstrap_inline'\">\n                <label>{{label}}</label>\n                <div class=\"form-check \"  *ngFor=\"let item of options; let index = index;\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" value=\"{{item.value}}\" [name]= \"valueProperty\" [id]=\"valueProperty+'_'+index\" [formControlName]=\"valueProperty\" [(ngModel)]=\"dataObject[valueProperty]\">\n                      {{item.label}}\n                    </label>\n                    </div>\n                <dyna-validation-block [self]=\"self\"></dyna-validation-block>\n           </div>\n            <div class=\"form-group\"  *ngIf=\"utilInfos.formStyle === 'bootstrap_horizontal'\">\n               <div class=\"\">\n                    <label class=\"control-label col-sm-2\" [attr.for]=\"valueProperty\">{{label}}</label>\n                    <div class=\"form-check col-sm-offset-2 col-sm-10\" >\n                        <label class=\"form-check-label\"  *ngFor=\"let item of options; let index = index;\">\n                          <input class=\"form-check-input\" type=\"radio\" value=\"{{item.value}}\" [name]= \"valueProperty\" [id]=\"valueProperty+'_'+index\" [formControlName]=\"valueProperty\" [(ngModel)]=\"dataObject[valueProperty]\">\n                          {{item.label}}\n                        </label>\n                    <dyna-validation-block [self]=\"self\"></dyna-validation-block>\n               </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RadioControl);
                return RadioControl;
            }(base_1.BaseControl));
            exports_1("RadioControl", RadioControl);
        }
    }
});
//# sourceMappingURL=radio-control.js.map