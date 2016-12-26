/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BaseControl} from '../control-meta/base';
@Component({
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
export class CheckBoxControl extends BaseControl implements OnInit {
    @Input('controlmeta') controlMeta:CheckBoxControl;
    @Input('util') util:any;
    @Input('dynaForm') dynaForm:any;
    @Input('dataObject') dataObject:Object;
    @Input('utilInfos') utilInfos:Object;
    self:any = this;
    _checkedValue:any;
    _unCheckedValue:any;
    ngOnInit() {
        this.checkedValue = this.controlMeta['checkedValue'];
        this.unCheckedValue = this.controlMeta['unCheckedValue '];
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
}