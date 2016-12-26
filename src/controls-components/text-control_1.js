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
    var TextControl;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (base_1_1) {
                base_1 = base_1_1;
            }],
        execute: function() {
            TextControl = (function (_super) {
                __extends(TextControl, _super);
                function TextControl() {
                    _super.apply(this, arguments);
                    this.self = this;
                }
                TextControl.prototype.ngOnInit = function () {
                    this.init(this.controlMeta, this.util, this.dataObject);
                };
                __decorate([
                    core_1.Input('controlmeta'), 
                    __metadata('design:type', TextControl)
                ], TextControl.prototype, "controlMeta", void 0);
                __decorate([
                    core_1.Input('util'), 
                    __metadata('design:type', Object)
                ], TextControl.prototype, "util", void 0);
                __decorate([
                    core_1.Input('dynaForm'), 
                    __metadata('design:type', Object)
                ], TextControl.prototype, "dynaForm", void 0);
                __decorate([
                    core_1.Input('dataObject'), 
                    __metadata('design:type', Object)
                ], TextControl.prototype, "dataObject", void 0);
                TextControl = __decorate([
                    core_1.Component({
                        selector: 'text-box',
                        template: "\n    <div *ngIf=\"enable\" class=\"form-group\" [formGroup]=\"dynaForm\" [ngClass]=\"{'has-error':dynaForm && dynaForm.controls[valueProperty] && !dynaForm.controls[valueProperty].valid && dynaForm.controls[valueProperty].touched}\">\n    <label  [attr.for]=\"valueProperty\">{{label}}</label>\n    <input type=\"text\" [name]= \"valueProperty\"  [id]= \"valueProperty\" [formControlName]=\"valueProperty\" [(ngModel)]=\"dataObject[valueProperty]\">\n    <dyna-validation-block [self]=\"self\"></dyna-validation-block>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TextControl);
                return TextControl;
            }(base_1.BaseControl));
            exports_1("TextControl", TextControl);
        }
    }
});
//# sourceMappingURL=text-control_1.js.map