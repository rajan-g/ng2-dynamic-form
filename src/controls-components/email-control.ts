/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BaseControl} from '../control-meta/base';
@Component({
    selector: 'email-ctl',
    template: `
        <div *ngIf="enable" [formGroup]="dynaForm" [ngClass]="{'has-error':dynaForm && dynaForm.controls[valueProperty] && !dynaForm.controls[valueProperty].valid && dynaForm.controls[valueProperty].touched}">
            <div  class="form-group" *ngIf="utilInfos.formStyle === 'bootstrap_vertical' || utilInfos.formStyle === 'bootstrap_inline'">
                <label  [attr.for]="valueProperty">{{label}}</label>
                <input class="form-control" type="text" [name]= "valueProperty"  [id]= "valueProperty" [formControlName]="valueProperty" [(ngModel)]="dataObject[valueProperty]">
                <dyna-validation-block [self]="self"></dyna-validation-block>
            </div>
            <div  class="form-group" *ngIf="utilInfos.formStyle === 'bootstrap_horizontal'">
                <label class="control-label col-sm-2"  [attr.for]="valueProperty">{{label}}</label>
                <div class="col-sm-10">
                    <input class="form-control" type="text" [name]= "valueProperty"  [id]= "valueProperty" [formControlName]="valueProperty" [(ngModel)]="dataObject[valueProperty]">
                <dyna-validation-block [self]="self"></dyna-validation-block>
                </div>
            </div>
        </div>
    `
})
export class EmailControl extends BaseControl implements OnInit {
    @Input('controlmeta') controlMeta:EmailControl;
    @Input('util') util:any;
    @Input('dynaForm') dynaForm:any;
    @Input('dataObject') dataObject:Object;
    @Input('utilInfos') utilInfos:Object;
    self:any = this;
    ngOnInit() {
        this.controlMeta.pattern = this.controlMeta.pattern || '[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}';
        this.controlMeta.patternMessage = this.controlMeta.patternMessage || 'Email Id invalid';
        this.init(this.controlMeta, this.util, this.dataObject);
    }
}