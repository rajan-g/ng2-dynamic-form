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
let RadioControl = class RadioControl extends base_1.BaseControl {
    constructor() {
        super(...arguments);
        this.self = this;
    }
    ngOnInit() {
        this.options = this.controlMeta['options'];
        this.init(this.controlMeta, this.util, this.dataObject);
        this.dataObject[this.valueProperty] = this.dataObject[this.valueProperty] || false;
    }
    get options() {
        return this._options || [];
    }
    set options(options) {
        options = options || [];
        //set as key value list
        let tempOptions = [];
        for (let i = 0; i < options.length; i++) {
            let opt = options[i];
            let tempOpt = {};
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
    }
};
__decorate([
    core_1.Input('controlmeta'),
    __metadata("design:type", RadioControl)
], RadioControl.prototype, "controlMeta", void 0);
__decorate([
    core_1.Input('util'),
    __metadata("design:type", Object)
], RadioControl.prototype, "util", void 0);
__decorate([
    core_1.Input('dynaForm'),
    __metadata("design:type", Object)
], RadioControl.prototype, "dynaForm", void 0);
__decorate([
    core_1.Input('dataObject'),
    __metadata("design:type", Object)
], RadioControl.prototype, "dataObject", void 0);
__decorate([
    core_1.Input('utilInfos'),
    __metadata("design:type", Object)
], RadioControl.prototype, "utilInfos", void 0);
RadioControl = __decorate([
    core_1.Component({
        selector: 'radio-ctl',
        template: `
        <div *ngIf="enable" [formGroup]="dynaForm" [ngClass]="{'has-error':dynaForm && dynaForm.controls[valueProperty] && !dynaForm.controls[valueProperty].valid && dynaForm.controls[valueProperty].touched}">
            <div class=""  *ngIf="utilInfos.formStyle === 'bootstrap_vertical'  || utilInfos.formStyle === 'bootstrap_inline'">
                <label>{{label}}</label>
                <div class="form-check "  *ngFor="let item of options; let index = index;">
                    <label class="form-check-label">
                      <input class="form-check-input" type="radio" value="{{item.value}}" [name]= "valueProperty" [id]="valueProperty+'_'+index" [formControlName]="valueProperty" [(ngModel)]="dataObject[valueProperty]">
                      {{item.label}}
                    </label>
                    </div>
                <dyna-validation-block [self]="self"></dyna-validation-block>
           </div>
            <div class="form-group"  *ngIf="utilInfos.formStyle === 'bootstrap_horizontal'">
               <div class="">
                    <label class="control-label col-sm-2" [attr.for]="valueProperty">{{label}}</label>
                    <div class="form-check col-sm-offset-2 col-sm-10" >
                        <label class="form-check-label"  *ngFor="let item of options; let index = index;">
                          <input class="form-check-input" type="radio" value="{{item.value}}" [name]= "valueProperty" [id]="valueProperty+'_'+index" [formControlName]="valueProperty" [(ngModel)]="dataObject[valueProperty]">
                          {{item.label}}
                        </label>
                    <dyna-validation-block [self]="self"></dyna-validation-block>
               </div>
            </div>
        </div>
    `
    })
], RadioControl);
exports.RadioControl = RadioControl;
//# sourceMappingURL=radio-control.js.map