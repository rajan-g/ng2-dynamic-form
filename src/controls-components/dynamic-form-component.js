/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
System.register(['@angular/core', '@angular/forms', '../control-meta/FormData', '../control-meta/control-types', '../control-meta/FormStyles', '../control-meta/PropertyHandler', './select-control'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, forms_1, FormData_1, control_types_1, FormStyles_1, PropertyHandler_1, select_control_1;
    var DynaFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (FormData_1_1) {
                FormData_1 = FormData_1_1;
            },
            function (control_types_1_1) {
                control_types_1 = control_types_1_1;
            },
            function (FormStyles_1_1) {
                FormStyles_1 = FormStyles_1_1;
            },
            function (PropertyHandler_1_1) {
                PropertyHandler_1 = PropertyHandler_1_1;
            },
            function (select_control_1_1) {
                select_control_1 = select_control_1_1;
            }],
        execute: function() {
            DynaFormComponent = (function () {
                function DynaFormComponent(fb, propertyHandler) {
                    var _this = this;
                    this.fb = fb;
                    this.propertyHandler = propertyHandler;
                    this.enableForm = false;
                    this.utilInfos = { formStyle: FormStyles_1.FormStyles.BOOTSTRAP_VERTICAL, theme: FormStyles_1.FormStyles.THEME_BOOTSTRAP };
                    this.controls = {};
                    this.util = {
                        addControl: function (name, formControl, isSubmitedCb) {
                            _this.dynaForm.addControl(name, formControl);
                            _this.controls[name] = {
                                enableError: isSubmitedCb };
                        }
                    };
                }
                DynaFormComponent.prototype.ngOnInit = function () {
                    if (!this.formData) {
                        throw Error("formData missing");
                    }
                    if (!this.formData.formName) {
                        throw Error("formName missing");
                    }
                    if (!this.formData.controls) {
                        throw Error("controls missing");
                    }
                    if (!this.formData.dataObject) {
                        throw Error("dataObject missing");
                    }
                    this.dynaForm = this.fb.group({});
                    this.formData.formStyle = this.formData.formStyle || FormStyles_1.FormStyles.BOOTSTRAP_VERTICAL;
                    this.formData.theme = this.formData.theme || FormStyles_1.FormStyles.THEME_BOOTSTRAP;
                    this.utilInfos.formStyle = this.formData.formStyle;
                    this.setCustomizedDataObject();
                    this.enableForm = true;
                };
                DynaFormComponent.prototype.sendResult = function () {
                    if (!this.dynaForm.valid || !this.isRadiosValid()) {
                        for (var key in this.controls) {
                            this.controls[key]['enableError']();
                        }
                        return;
                    }
                    this.setCheckBoxValue();
                    this.setSelectBoxValues();
                    this.composeResultData();
                    this.formData.cb(this.originalInputData);
                };
                DynaFormComponent.prototype.isRadiosValid = function () {
                    for (var i = 0; i < this.formData.controls.length; i++) {
                        //checkbox unchecked value setup
                        var ctl = this.formData.controls[i];
                        if (ctl.controlType === control_types_1.ControlTypes.RADIO) {
                            if (!this.dynaForm.controls[ctl.valueProperty].value) {
                                return false;
                            }
                        }
                    }
                    return true;
                };
                DynaFormComponent.prototype.setCheckBoxValue = function () {
                    for (var i = 0; i < this.formData.controls.length; i++) {
                        //checkbox unchecked value setup
                        var ctl = this.formData.controls[i];
                        if (ctl.controlType === control_types_1.ControlTypes.CHECKBOX) {
                            if (this.dynaForm.controls[ctl.valueProperty].value) {
                                this.formData.dataObject[ctl.valueProperty] = ctl.checkedValue || true;
                            }
                            else {
                                this.formData.dataObject[ctl.valueProperty] = ctl.unCheckedValue || false;
                            }
                        }
                    }
                };
                ;
                DynaFormComponent.prototype.setSelectBoxValues = function () {
                    for (var i = 0; i < this.selectCtls.length; i++) {
                        var ctl = this.selectCtls['_results'][i];
                        if (ctl.multiselect) {
                            this.formData.dataObject[ctl.valueProperty] = ctl.selectedList;
                        }
                        else {
                            this.formData.dataObject[ctl.valueProperty] = JSON.parse(ctl.dataObject[ctl.valueProperty]);
                        }
                    }
                };
                DynaFormComponent.prototype.setCustomizedDataObject = function () {
                    var originalInputData = this.formData.dataObject;
                    var controls = this.formData.controls;
                    var customDataObject = {};
                    for (var i = 0; i < controls.length; i++) {
                        var prop = controls[i]['valueProperty'];
                        var value = this.propertyHandler.getValueByProperty(originalInputData, prop);
                        customDataObject[prop] = value;
                        originalInputData = this.propertyHandler.buildPropertyWithValue(originalInputData, prop, value);
                    }
                    this.originalInputData = originalInputData;
                    this.formData.dataObject = customDataObject;
                };
                DynaFormComponent.prototype.composeResultData = function () {
                    var originalInputData = this.originalInputData;
                    var controls = this.formData.controls;
                    var customDataObject = this.formData.dataObject;
                    ;
                    for (var i = 0; i < controls.length; i++) {
                        var prop = controls[i]['valueProperty'];
                        var value = customDataObject[prop];
                        customDataObject[prop] = value;
                        originalInputData = this.propertyHandler.buildPropertyWithValue(originalInputData, prop, value);
                    }
                    this.originalInputData = originalInputData;
                };
                __decorate([
                    core_1.Input('formData'), 
                    __metadata('design:type', FormData_1.FromData)
                ], DynaFormComponent.prototype, "formData", void 0);
                __decorate([
                    core_1.ViewChildren(select_control_1.SelectControl), 
                    __metadata('design:type', Array)
                ], DynaFormComponent.prototype, "selectCtls", void 0);
                DynaFormComponent = __decorate([
                    core_1.Component({
                        selector: 'dynaform',
                        template: "\n    <div *ngIf=\"enableForm\" [ngClass]=\"{'col-sm-12': formData.theme === 'bootstrap'}\">\n    <form [formGroup]=\"dynaForm\" [ngClass]=\"{'form-inline': !formData.formStyle || formData.formStyle ==='bootstrap_inline', 'form-horizontal' : formData.formStyle ==='bootstrap_horizontal' }\">\n            <div *ngFor=\"let control of formData.controls\" [ngSwitch]=\"control.controlType\">\n               <text-box *ngSwitchCase=\"'textbox'\" [controlmeta]=\"control\" [dynaForm] =\"dynaForm\" [utilInfos]=\"utilInfos\" [util]=\"util\" [dataObject]=\"formData.dataObject\"></text-box>\n               <email-ctl *ngSwitchCase=\"'email'\" [controlmeta]=\"control\" [dynaForm] =\"dynaForm\" [utilInfos]=\"utilInfos\" [util]=\"util\" [dataObject]=\"formData.dataObject\"></email-ctl>\n               <number-box *ngSwitchCase=\"'number'\" [controlmeta]=\"control\" [dynaForm] =\"dynaForm\" [utilInfos]=\"utilInfos\"  [util]=\"util\" [dataObject]=\"formData.dataObject\"></number-box>\n               <check-box *ngSwitchCase=\"'checkbox'\" [controlmeta]=\"control\" [dynaForm] =\"dynaForm\" [utilInfos]=\"utilInfos\"  [util]=\"util\" [dataObject]=\"formData.dataObject\"></check-box>\n               <radio-ctl *ngSwitchCase=\"'radio'\" [controlmeta]=\"control\" [dynaForm] =\"dynaForm\" [utilInfos]=\"utilInfos\"  [util]=\"util\" [dataObject]=\"formData.dataObject\"></radio-ctl>\n               <select-ctl *ngSwitchCase=\"'select'\" [controlmeta]=\"control\" [dynaForm] =\"dynaForm\" [utilInfos]=\"utilInfos\"  [util]=\"util\" [dataObject]=\"formData.dataObject\"></select-ctl>\n            </div>\n        <div class=\"form-group\" *ngIf=\"formData.formStyle ==='bootstrap_vertical' \">\n            <button (click)=\"sendResult()\" class=\"btn btn-primary\" >Submit</button>\n        </div>\n        <div class=\"form-group\" *ngIf=\"formData.formStyle ==='bootstrap_horizontal' \"> \n            <div class=\"col-sm-offset-2 col-sm-10\">\n              <button (click)=\"sendResult()\" class=\"btn btn-primary\" >Submit</button>\n            </div>\n        </div>\n    </form>\n     </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, PropertyHandler_1.PropertyHandler])
                ], DynaFormComponent);
                return DynaFormComponent;
            }());
            exports_1("DynaFormComponent", DynaFormComponent);
        }
    }
});
//# sourceMappingURL=dynamic-form-component.js.map