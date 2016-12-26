/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BaseControl} from '../control-meta/base';
@Component({
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
export class RadioControl extends BaseControl implements OnInit {
    @Input('controlmeta') controlMeta:RadioControl;
    @Input('util') util:any;
    @Input('dynaForm') dynaForm:any;
    @Input('dataObject') dataObject:Object;
    @Input('utilInfos') utilInfos:Object;
    self:any = this;
    _options:Array<any>;
    ngOnInit() {
        this.options = this.controlMeta['options'];
        this.init(this.controlMeta, this.util, this.dataObject);
        this.dataObject[this.valueProperty] = this.dataObject[this.valueProperty] || false;
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
            if(opt.label) {
                tempOpt['label'] = opt.label;
            }else {
                tempOpt['label'] = typeof opt === 'string' ? opt: opt.value || opt;
            }
            if(opt.value) {
                tempOpt['value'] = opt.value;
            }else {
                tempOpt['value'] = typeof opt === 'string' ? opt: opt.label || opt;
            }
            tempOptions.push(tempOpt);
        }
        this._options = tempOptions;
    }    
}