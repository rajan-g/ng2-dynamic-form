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
let SelectControl = class SelectControl extends base_1.BaseControl {
    constructor() {
        super(...arguments);
        this.self = this;
        this._selectedList = [];
    }
    ngOnInit() {
        this.optionValueProperty = this.controlMeta['optionValueProperty'];
        this.optionDisplayProperty = this.controlMeta['optionDisplayProperty'];
        this.defaultSelectMessage = this.controlMeta['defaultSelectMessage'];
        this.multiselect = this.controlMeta['multiselect'];
        this.options = this.controlMeta['options'];
        this.init(this.controlMeta, this.util, this.dataObject);
        this.dataObject[this.valueProperty] = this.dataObject[this.valueProperty] || false;
    }
    get defaultSelectMessage() {
        return this._defaultSelectMessage;
    }
    set defaultSelectMessage(defaultSelectMessage) {
        this._defaultSelectMessage = defaultSelectMessage || '--Select--';
    }
    get multiselect() {
        return this._multiselect;
    }
    set multiselect(multiselect) {
        this._multiselect = multiselect;
    }
    get optionValueProperty() {
        return this._optionValueProperty;
    }
    set optionValueProperty(optionValueProperty) {
        if (!optionValueProperty) {
            this._optionValueProperty = '';
        }
        else {
            this._optionValueProperty = optionValueProperty;
        }
    }
    get optionDisplayProperty() {
        return this._optionDisplayProperty;
    }
    set optionDisplayProperty(optionDisplayProperty) {
        this._optionDisplayProperty = optionDisplayProperty || 'label';
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
            tempOpt['label'] = (typeof opt === 'string') ? opt : this.getValueByProperty(opt, this.optionDisplayProperty);
            tempOpt['value'] = (typeof opt === 'string') ? opt : this.getValueByProperty(opt, this.optionValueProperty);
            tempOptions.push(tempOpt);
        }
        this._options = tempOptions;
    }
    isSelected(optItem) {
        if (!this.multiselect) {
            if (optItem && optItem['value'] && JSON.stringify(optItem.value) === JSON.stringify(this.dataObject[this.valueProperty])) {
                return true;
            }
        }
        else {
            let valueArray = this.dataObject[this.valueProperty];
            let temArray = [];
            for (let item of valueArray) {
                temArray.push(JSON.stringify(item));
            }
            if (temArray.indexOf(JSON.stringify(optItem.value)) !== -1) {
                return true;
            }
        }
        return null;
    }
    getValueByProperty(object, property) {
        try {
            let notations = property.split('.');
            let current = JSON.parse(JSON.stringify(object));
            if (notations && notations[0] == '') {
                return current;
            }
            for (let key of notations) {
                current = current[key];
            }
            return current;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    onChange($event) {
        this._selectedList = [];
        for (let i = 0; i < $event.target.options.length; i++) {
            if ($event.target.options[i].selected) {
                if ($event.target.options[i].value) {
                    this._selectedList.push(JSON.parse($event.target.options[i].value));
                }
            }
        }
    }
    get selectedList() {
        return this._selectedList;
    }
};
__decorate([
    core_1.Input('controlmeta'),
    __metadata("design:type", SelectControl)
], SelectControl.prototype, "controlMeta", void 0);
__decorate([
    core_1.Input('util'),
    __metadata("design:type", Object)
], SelectControl.prototype, "util", void 0);
__decorate([
    core_1.Input('dynaForm'),
    __metadata("design:type", Object)
], SelectControl.prototype, "dynaForm", void 0);
__decorate([
    core_1.Input('dataObject'),
    __metadata("design:type", Object)
], SelectControl.prototype, "dataObject", void 0);
__decorate([
    core_1.Input('utilInfos'),
    __metadata("design:type", Object)
], SelectControl.prototype, "utilInfos", void 0);
SelectControl = __decorate([
    core_1.Component({
        selector: 'select-ctl',
        template: `
        <div *ngIf="enable" [formGroup]="dynaForm" [ngClass]="{'has-error':dynaForm && dynaForm.controls[valueProperty] && !dynaForm.controls[valueProperty].valid && dynaForm.controls[valueProperty].touched}">
            <div  class="form-group" *ngIf="utilInfos.formStyle === 'bootstrap_vertical' || utilInfos.formStyle === 'bootstrap_inline'">
                <label  [attr.for]="valueProperty">{{label}}</label>
                <select [attr.multiple]="multiselect ? true: null" class="form-control" (change)="onChange($event)" [name]= "valueProperty"  [id]= "valueProperty" [formControlName]="valueProperty" [(ngModel)]="dataObject[valueProperty]">
                    <option [hidden]="dataObject[valueProperty]" value="{{optiondefault}}" [selected] ="dataObject[valueProperty] ? false: true">{{defaultSelectMessage}}</option>
                    <option *ngFor="let optItem of options" [value]="optItem.value |json" [selected] ="isSelected(optItem)" >{{optItem.label}}</option>
                </select>
                <dyna-validation-block [self]="self"></dyna-validation-block>
            </div>
            <div  class="form-group" *ngIf="utilInfos.formStyle === 'bootstrap_horizontal'">
                <label class="control-label col-sm-2"  [attr.for]="valueProperty">{{label}}</label>
                <div class="col-sm-10">
                    <select [attr.multiple]="multiselect ? true: null" class="form-control" (change)="onChange($event)" [name]= "valueProperty" [id]= "valueProperty" [formControlName]="valueProperty" [(ngModel)]="dataObject[valueProperty]">
                        <option *ngFor="let optItem of options" [value]="optItem.value | json" [selected] ="isSelected(optItem)" >{{optItem.label}}</option>
                        <option *ngIf="!dataObject[valueProperty]" [selected] ="dataObject[valueProperty] ? false: true">{{defaultSelectMessage}}</option>
                    </select>
                <dyna-validation-block [self]="self"></dyna-validation-block>
                </div>
            </div>
        </div>
    `,
        styles: ['option[ng-reflect-selected="true"] {background-color: #428BCA;color:#fff}']
    })
], SelectControl);
exports.SelectControl = SelectControl;
//# sourceMappingURL=select-control.js.map