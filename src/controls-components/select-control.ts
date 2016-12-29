/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BaseControl} from '../control-meta/base';
@Component({
    selector: 'select-ctl',
    template: `
        <div *ngIf="enable" [formGroup]="dynaForm" [ngClass]="{'has-error':dynaForm && dynaForm.controls[valueProperty] && !dynaForm.controls[valueProperty].valid && dynaForm.controls[valueProperty].touched}">
            <div  class="form-group" *ngIf="utilInfos.formStyle === 'bootstrap_vertical' || utilInfos.formStyle === 'bootstrap_inline'">
                <label  [attr.for]="valueProperty">{{label}}</label>
                <select class="form-control" [name]= "valueProperty"  [id]= "valueProperty" [formControlName]="valueProperty" [(ngModel)]="dataObject[valueProperty]">
                    <option [hidden]="dataObject[valueProperty]" value="{{optiondefault}}" [selected] ="dataObject[valueProperty] ? false: true">{{defaultSelectMessage}}</option>
                    <option *ngFor="let opt of options" [value]="opt.value">{{opt.label}}</option>
                </select>
                <dyna-validation-block [self]="self"></dyna-validation-block>
            </div>
            <div  class="form-group" *ngIf="utilInfos.formStyle === 'bootstrap_horizontal'">
                <label class="control-label col-sm-2"  [attr.for]="valueProperty">{{label}}</label>
                <div class="col-sm-10">
                    <select class="form-control" [name]= "valueProperty" [id]= "valueProperty" [formControlName]="valueProperty" [(ngModel)]="dataObject[valueProperty]">
                        <option *ngFor="let optItem of options" [value]="optItem.value" [ngValue]="optItem.value">{{optItem.label}}</option>
                        <option *ngIf="!dataObject[valueProperty]" [selected] ="dataObject[valueProperty] ? false: true">{{defaultSelectMessage}}</option>
                    </select>
                <dyna-validation-block [self]="self"></dyna-validation-block>
                </div>
            </div>
        </div>
    `
})
export class SelectControl extends BaseControl implements OnInit {
    @Input('controlmeta') controlMeta:SelectControl;
    @Input('util') util:any;
    @Input('dynaForm') dynaForm:any;
    @Input('dataObject') dataObject:Object;
    @Input('utilInfos') utilInfos:Object;
    self:any = this;
   _options:Array<any>;
   _defaultSelectMessage:string;
   _optionValueProperty:string;
   _optionDisplayProperty:string;
    ngOnInit() {
        this.optionValueProperty = this.controlMeta['optionValueProperty'];
        this.optionDisplayProperty = this.controlMeta['optionDisplayProperty'];
        this.defaultSelectMessage = this.controlMeta['defaultSelectMessage'];
        this.options = this.controlMeta['options'];
        this.init(this.controlMeta, this.util, this.dataObject);
        this.dataObject[this.valueProperty] = this.dataObject[this.valueProperty] || false;
    }
    
    get defaultSelectMessage() {
        return this._defaultSelectMessage;
    }
    set defaultSelectMessage(defaultSelectMessage:string) {
        this._defaultSelectMessage = defaultSelectMessage || '--Select--';
    }
    get optionValueProperty() {
        return this._optionValueProperty;
    }
    set optionValueProperty(optionValueProperty:string) {
        if (!optionValueProperty) {
            this._optionValueProperty = '';
        } else {
            this._optionValueProperty = optionValueProperty;
        }
    }
    get optionDisplayProperty() {
        return this._optionDisplayProperty;
    }
    set optionDisplayProperty(optionDisplayProperty:string) {
        this._optionDisplayProperty = optionDisplayProperty || 'label';
    }
    get options() {
        return this._options || [];
    }
    set options(options:Array<any>) {
        options = options || []       
        //set as key value list
        let tempOptions:any = [];
        for(let i=0; i< options.length; i++) {
            let opt = options[i];
            let tempOpt = {};          
            tempOpt['label'] = (typeof opt === 'string') ? opt : this.getValueByProperty(opt, this.optionDisplayProperty);
            tempOpt['value'] = (typeof opt === 'string') ? opt : this.getValueByProperty(opt, this.optionValueProperty);            
            tempOptions.push(tempOpt);
        }
        this._options = tempOptions;
    }
    getValueByProperty(object:any,property:string) {
        try {
        let notations = property.split('.');
        let current = JSON.parse(JSON.stringify(object));
        if(notations && notations[0] == '') {
            return current;
        }
        for (let key of notations) {
            current = current[key]
        }
        return current;
        }
        catch(e) {
            console.log(e);
            return null;
        }
        
    }
}