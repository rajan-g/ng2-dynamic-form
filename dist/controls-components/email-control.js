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
let EmailControl = class EmailControl extends base_1.BaseControl {
    constructor() {
        super(...arguments);
        this.self = this;
    }
    ngOnInit() {
        this.controlMeta.pattern = this.controlMeta.pattern || '[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}';
        this.controlMeta.patternMessage = this.controlMeta.patternMessage || 'Email Id invalid';
        this.init(this.controlMeta, this.util, this.dataObject);
    }
};
__decorate([
    core_1.Input('controlmeta'),
    __metadata("design:type", EmailControl)
], EmailControl.prototype, "controlMeta", void 0);
__decorate([
    core_1.Input('util'),
    __metadata("design:type", Object)
], EmailControl.prototype, "util", void 0);
__decorate([
    core_1.Input('dynaForm'),
    __metadata("design:type", Object)
], EmailControl.prototype, "dynaForm", void 0);
__decorate([
    core_1.Input('dataObject'),
    __metadata("design:type", Object)
], EmailControl.prototype, "dataObject", void 0);
__decorate([
    core_1.Input('utilInfos'),
    __metadata("design:type", Object)
], EmailControl.prototype, "utilInfos", void 0);
EmailControl = __decorate([
    core_1.Component({
        selector: 'email-ctl',
        template: `
        <div *ngIf="enable" [formGroup]="dynaForm" [ngClass]="{'has-error':dynaForm && dynaForm.controls[valueProperty] && !dynaForm.controls[valueProperty].valid && dynaForm.controls[valueProperty].touched}">
            <div  class="form-group" *ngIf="utilInfos.formStyle === 'bootstrap_vertical' || utilInfos.formStyle === 'bootstrap_inline'">
                <label  [attr.for]="valueProperty">{{label}}</label>
                <input class="form-control" placeholder="{{placeHolder}}" type="text" [name]= "valueProperty"  [id]= "valueProperty" [attr.autocomplete]="autocomplete" [formControlName]="valueProperty" [(ngModel)]="dataObject[valueProperty]">
                <dyna-validation-block [self]="self"></dyna-validation-block>
            </div>
            <div  class="form-group" *ngIf="utilInfos.formStyle === 'bootstrap_horizontal'">
                <label class="control-label col-sm-2"  [attr.for]="valueProperty">{{label}}</label>
                <div class="col-sm-10">
                    <input class="form-control" placeholder="{{placeHolder}}" type="text" [name]= "valueProperty"  [id]= "valueProperty" [attr.autocomplete]="autocomplete"  [formControlName]="valueProperty" [(ngModel)]="dataObject[valueProperty]">
                <dyna-validation-block [self]="self"></dyna-validation-block>
                </div>
            </div>
        </div>
    `
    })
], EmailControl);
exports.EmailControl = EmailControl;
//# sourceMappingURL=email-control.js.map