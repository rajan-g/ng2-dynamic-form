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
const base_1 = require("../control-meta/base");
let CheckBoxControl = class CheckBoxControl extends base_1.BaseControl {
    constructor() {
        super(...arguments);
        this.self = this;
    }
    ngOnInit() {
        this.checkedValue = this.controlMeta['checkedValue'];
        this.unCheckedValue = this.controlMeta['unCheckedValue '];
        if (this.dataObject[this.controlMeta['valueProperty']] == this.controlMeta['checkedValue']) {
            this.dataObject[this.controlMeta['valueProperty']] = true;
        }
        else {
            this.dataObject[this.controlMeta['valueProperty']] = false;
        }
        this.init(this.controlMeta, this.util, this.dataObject);
        this.dataObject[this.valueProperty] = this.dataObject[this.valueProperty] || false;
    }
    get checkedValue() {
        return this._checkedValue || true;
    }
    set checkedValue(_checkedValue) {
        this._checkedValue = _checkedValue || true;
    }
    get unCheckedValue() {
        return this._unCheckedValue || false;
    }
    set unCheckedValue(unCheckedValue) {
        this._unCheckedValue = unCheckedValue || false;
    }
};
__decorate([
    core_1.Input('controlmeta'),
    __metadata("design:type", CheckBoxControl)
], CheckBoxControl.prototype, "controlMeta", void 0);
__decorate([
    core_1.Input('util'),
    __metadata("design:type", Object)
], CheckBoxControl.prototype, "util", void 0);
__decorate([
    core_1.Input('dynaForm'),
    __metadata("design:type", Object)
], CheckBoxControl.prototype, "dynaForm", void 0);
__decorate([
    core_1.Input('dataObject'),
    __metadata("design:type", Object)
], CheckBoxControl.prototype, "dataObject", void 0);
__decorate([
    core_1.Input('utilInfos'),
    __metadata("design:type", Object)
], CheckBoxControl.prototype, "utilInfos", void 0);
CheckBoxControl = __decorate([
    core_1.Component({
        selector: 'check-box',
        template: `
        <div *ngIf="enable" [formGroup]="dynaForm" [ngClass]="{'has-error':dynaForm && dynaForm.controls[valueProperty] && !dynaForm.controls[valueProperty].valid && dynaForm.controls[valueProperty].touched}">
            <div class="checkbox"  *ngIf="utilInfos.formStyle === 'bootstrap_vertical'  || utilInfos.formStyle === 'bootstrap_inline'">
                <label [attr.for]="valueProperty"><input type="checkbox" [name]= "valueProperty"  [id]= "valueProperty" [formControlName]="valueProperty" [(ngModel)]="dataObject[valueProperty]">{{label}}</label>
                <dyna-validation-block [self]="self"></dyna-validation-block>
           </div>
            <div class="form-group"  *ngIf="utilInfos.formStyle === 'bootstrap_horizontal'">
               <div class="col-sm-offset-2 col-sm-10">
                  <label [attr.for]="valueProperty"><input type="checkbox" [name]= "valueProperty"  [id]= "valueProperty" [formControlName]="valueProperty" value="{{checkedValue}}" [(ngModel)]="dataObject[valueProperty]">{{label}}</label>
               <dyna-validation-block [self]="self"></dyna-validation-block>
               </div>
           </div>
        </div>
    `
    })
], CheckBoxControl);
exports.CheckBoxControl = CheckBoxControl;
//# sourceMappingURL=checkbox-control.js.map