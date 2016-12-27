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
    var SelectControl;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (base_1_1) {
                base_1 = base_1_1;
            }],
        execute: function() {
            SelectControl = (function (_super) {
                __extends(SelectControl, _super);
                function SelectControl() {
                    _super.apply(this, arguments);
                    this.self = this;
                }
                SelectControl.prototype.ngOnInit = function () {
                    this.optionValueProperty = this.controlMeta['optionValueProperty'];
                    this.optionDisplayProperty = this.controlMeta['optionDisplayProperty'];
                    this.defaultSelectMessage = this.controlMeta['defaultSelectMessage'];
                    this.options = this.controlMeta['options'];
                    this.init(this.controlMeta, this.util, this.dataObject);
                    this.dataObject[this.valueProperty] = this.dataObject[this.valueProperty] || false;
                };
                Object.defineProperty(SelectControl.prototype, "defaultSelectMessage", {
                    get: function () {
                        return this._defaultSelectMessage;
                    },
                    set: function (defaultSelectMessage) {
                        this._defaultSelectMessage = defaultSelectMessage || '--Select--';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectControl.prototype, "optionValueProperty", {
                    get: function () {
                        return this._optionValueProperty;
                    },
                    set: function (optionValueProperty) {
                        if (!optionValueProperty) {
                            this._optionValueProperty = '';
                        }
                        else {
                            this._optionValueProperty = optionValueProperty;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectControl.prototype, "optionDisplayProperty", {
                    get: function () {
                        return this._optionDisplayProperty;
                    },
                    set: function (optionDisplayProperty) {
                        this._optionDisplayProperty = optionDisplayProperty || 'label';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectControl.prototype, "options", {
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
                            tempOpt['label'] = (typeof opt === 'string') ? opt : this.getValueByProperty(opt, this.optionDisplayProperty);
                            tempOpt['value'] = (typeof opt === 'string') ? opt : this.getValueByProperty(opt, this.optionValueProperty);
                            tempOptions.push(tempOpt);
                        }
                        this._options = tempOptions;
                    },
                    enumerable: true,
                    configurable: true
                });
                SelectControl.prototype.getValueByProperty = function (object, property) {
                    try {
                        var notations = property.split('.');
                        var current = JSON.parse(JSON.stringify(object));
                        if (notations && notations[0] == '') {
                            return current;
                        }
                        for (var _i = 0, notations_1 = notations; _i < notations_1.length; _i++) {
                            var key = notations_1[_i];
                            current = current[key];
                        }
                        return current;
                    }
                    catch (e) {
                        console.log(e);
                        return null;
                    }
                };
                __decorate([
                    core_1.Input('controlmeta'), 
                    __metadata('design:type', SelectControl)
                ], SelectControl.prototype, "controlMeta", void 0);
                __decorate([
                    core_1.Input('util'), 
                    __metadata('design:type', Object)
                ], SelectControl.prototype, "util", void 0);
                __decorate([
                    core_1.Input('dynaForm'), 
                    __metadata('design:type', Object)
                ], SelectControl.prototype, "dynaForm", void 0);
                __decorate([
                    core_1.Input('dataObject'), 
                    __metadata('design:type', Object)
                ], SelectControl.prototype, "dataObject", void 0);
                __decorate([
                    core_1.Input('utilInfos'), 
                    __metadata('design:type', Object)
                ], SelectControl.prototype, "utilInfos", void 0);
                SelectControl = __decorate([
                    core_1.Component({
                        selector: 'select-ctl',
                        template: "\n        <div *ngIf=\"enable\" [formGroup]=\"dynaForm\" [ngClass]=\"{'has-error':dynaForm && dynaForm.controls[valueProperty] && !dynaForm.controls[valueProperty].valid && dynaForm.controls[valueProperty].touched}\">\n            <div  class=\"form-group\" *ngIf=\"utilInfos.formStyle === 'bootstrap_vertical' || utilInfos.formStyle === 'bootstrap_inline'\">\n                <label  [attr.for]=\"valueProperty\">{{label}}</label>\n                <select class=\"form-control\" [name]= \"valueProperty\"  [id]= \"valueProperty\" [formControlName]=\"valueProperty\" [(ngModel)]=\"dataObject[valueProperty]\">\n                    <option [hidden]=\"dataObject[valueProperty]\" value=\"{{optiondefault}}\" [selected] =\"dataObject[valueProperty] ? false: true\">{{defaultSelectMessage}}</option>\n                    <option *ngFor=\"let opt of options\" [value]=\"opt.value\">{{opt.label}}</option>\n                </select>\n                <dyna-validation-block [self]=\"self\"></dyna-validation-block>\n            </div>\n            <div  class=\"form-group\" *ngIf=\"utilInfos.formStyle === 'bootstrap_horizontal'\">\n                <label class=\"control-label col-sm-2\"  [attr.for]=\"valueProperty\">{{label}}</label>{{dataObject[valueProperty]|json}}\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control\" [name]= \"valueProperty\" [id]= \"valueProperty\" [formControlName]=\"valueProperty\" [(ngModel)]=\"dataObject[valueProperty]\">\n                        <option [hidden]=\"dataObject[valueProperty]\" value=\"{{optiondefault}}\" [selected] =\"dataObject[valueProperty] ? false: true\">{{defaultSelectMessage}}</option>\n                        <option *ngFor=\"let optItem of options\" [ngValue]=\"optItem.value\">{{optItem.label}}</option>\n                    </select>\n                <dyna-validation-block [self]=\"self\"></dyna-validation-block>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SelectControl);
                return SelectControl;
            }(base_1.BaseControl));
            exports_1("SelectControl", SelectControl);
        }
    }
});
//# sourceMappingURL=select-control.js.map