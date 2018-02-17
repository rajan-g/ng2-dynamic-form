"use strict";
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const FormData_1 = require("../control-meta/FormData");
const control_types_1 = require("../control-meta/control-types");
const FormStyles_1 = require("../control-meta/FormStyles");
const PropertyHandler_1 = require("../control-meta/PropertyHandler");
const select_control_1 = require("./select-control");
let DynaFormComponent = class DynaFormComponent {
    constructor(fb, propertyHandler) {
        this.fb = fb;
        this.propertyHandler = propertyHandler;
        this.enableForm = false;
        this.utilInfos = { formStyle: FormStyles_1.FormStyles.BOOTSTRAP_VERTICAL, theme: FormStyles_1.FormStyles.THEME_BOOTSTRAP };
        this.controls = {};
        this.util = {
            addControl: (name, formControl, isSubmitedCb) => {
                this.dynaForm.addControl(name, formControl);
                this.controls[name] = {
                    enableError: isSubmitedCb
                };
            }
        };
    }
    ngOnInit() {
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
    }
    sendResult() {
        if (!this.dynaForm.valid || !this.isRadiosValid()) {
            for (let key in this.controls) {
                this.controls[key]['enableError']();
            }
            return;
        }
        this.setCheckBoxValue();
        this.setSelectBoxValues();
        this.composeResultData();
        this.formData.cb(this.originalInputData);
    }
    isRadiosValid() {
        for (let i = 0; i < this.formData.controls.length; i++) {
            //checkbox unchecked value setup
            let ctl = this.formData.controls[i];
            if (ctl.controlType === control_types_1.ControlTypes.RADIO) {
                if (!this.dynaForm.controls[ctl.valueProperty].value) {
                    return false;
                }
            }
        }
        return true;
    }
    setCheckBoxValue() {
        for (let i = 0; i < this.formData.controls.length; i++) {
            //checkbox unchecked value setup
            let ctl = this.formData.controls[i];
            if (ctl.controlType === control_types_1.ControlTypes.CHECKBOX) {
                if (this.dynaForm.controls[ctl.valueProperty].value) {
                    this.formData.dataObject[ctl.valueProperty] = ctl.checkedValue || true;
                }
                else {
                    this.formData.dataObject[ctl.valueProperty] = ctl.unCheckedValue || false;
                }
            }
        }
    }
    ;
    setSelectBoxValues() {
        for (let i = 0; i < this.selectCtls.length; i++) {
            let ctl = this.selectCtls['_results'][i];
            if (ctl.multiselect) {
                this.formData.dataObject[ctl.valueProperty] = ctl.selectedList;
            }
            else {
                this.formData.dataObject[ctl.valueProperty] = JSON.parse(ctl.dataObject[ctl.valueProperty]);
            }
        }
    }
    setCustomizedDataObject() {
        let originalInputData = this.formData.dataObject;
        let controls = this.formData.controls;
        let customDataObject = {};
        for (let i = 0; i < controls.length; i++) {
            let prop = controls[i]['valueProperty'];
            let value = this.propertyHandler.getValueByProperty(originalInputData, prop);
            customDataObject[prop] = value;
            originalInputData = this.propertyHandler.buildPropertyWithValue(originalInputData, prop, value);
        }
        this.originalInputData = originalInputData;
        this.formData.dataObject = customDataObject;
    }
    composeResultData() {
        let originalInputData = this.originalInputData;
        let controls = this.formData.controls;
        let customDataObject = this.formData.dataObject;
        ;
        for (let i = 0; i < controls.length; i++) {
            let prop = controls[i]['valueProperty'];
            let value = customDataObject[prop];
            customDataObject[prop] = value;
            originalInputData = this.propertyHandler.buildPropertyWithValue(originalInputData, prop, value);
        }
        this.originalInputData = originalInputData;
    }
};
__decorate([
    core_1.Input('formData'),
    __metadata("design:type", FormData_1.FormData)
], DynaFormComponent.prototype, "formData", void 0);
__decorate([
    core_1.ViewChildren(select_control_1.SelectControl),
    __metadata("design:type", Array)
], DynaFormComponent.prototype, "selectCtls", void 0);
DynaFormComponent = __decorate([
    core_1.Component({
        selector: 'dynaform',
        template: `
    <div *ngIf="enableForm" [ngClass]="{'col-sm-12': formData.theme === 'bootstrap'}">
    <form [formGroup]="dynaForm" [ngClass]="{'form-inline': !formData.formStyle || formData.formStyle ==='bootstrap_inline', 'form-horizontal' : formData.formStyle ==='bootstrap_horizontal' }">
            <div *ngFor="let control of formData.controls" [ngSwitch]="control.controlType">
               <text-box *ngSwitchCase="'textbox'" [controlmeta]="control" [dynaForm] ="dynaForm" [utilInfos]="utilInfos" [util]="util" [dataObject]="formData.dataObject"></text-box>
               <email-ctl *ngSwitchCase="'email'" [controlmeta]="control" [dynaForm] ="dynaForm" [utilInfos]="utilInfos" [util]="util" [dataObject]="formData.dataObject"></email-ctl>
               <number-box *ngSwitchCase="'number'" [controlmeta]="control" [dynaForm] ="dynaForm" [utilInfos]="utilInfos"  [util]="util" [dataObject]="formData.dataObject"></number-box>
               <check-box *ngSwitchCase="'checkbox'" [controlmeta]="control" [dynaForm] ="dynaForm" [utilInfos]="utilInfos"  [util]="util" [dataObject]="formData.dataObject"></check-box>
               <radio-ctl *ngSwitchCase="'radio'" [controlmeta]="control" [dynaForm] ="dynaForm" [utilInfos]="utilInfos"  [util]="util" [dataObject]="formData.dataObject"></radio-ctl>
               <select-ctl *ngSwitchCase="'select'" [controlmeta]="control" [dynaForm] ="dynaForm" [utilInfos]="utilInfos"  [util]="util" [dataObject]="formData.dataObject"></select-ctl>
            </div>
        <div class="form-group" *ngIf="formData.formStyle ==='bootstrap_vertical' ">
            <button (click)="sendResult()" class="btn btn-primary" >Submit</button>
        </div>
        <div class="form-group" *ngIf="formData.formStyle ==='bootstrap_horizontal' "> 
            <div class="col-sm-offset-2 col-sm-10">
              <button (click)="sendResult()" class="btn btn-primary" >Submit</button>
            </div>
        </div>
    </form>
     </div>
    `
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, PropertyHandler_1.PropertyHandler])
], DynaFormComponent);
exports.DynaFormComponent = DynaFormComponent;
//# sourceMappingURL=dynamic-form-component.js.map