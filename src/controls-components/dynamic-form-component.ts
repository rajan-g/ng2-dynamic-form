/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { FromData} from '../control-meta/FormData';
import { ControlTypes } from '../control-meta/control-types';
import { FormStyles } from '../control-meta/FormStyles';
@Component({
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
})
export class DynaFormComponent implements OnInit {
    @Input('formData') formData:FromData;
    enableForm:boolean = false;
    utilInfos: any = { formStyle: FormStyles.BOOTSTRAP_VERTICAL, theme: FormStyles.THEME_BOOTSTRAP};
    dynaForm: FormGroup;
    controls = {};
    util:any= {
        addControl : (name:string, formControl:FormControl, isSubmitedCb:any) => {
            this.dynaForm.addControl(name, formControl);
            this.controls[name] =  {
                enableError: isSubmitedCb            }
        }
    }
    constructor(private fb: FormBuilder) {
        
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
         this.formData.formStyle =this.formData.formStyle || FormStyles.BOOTSTRAP_VERTICAL;
         this.formData.theme = this.formData.theme || FormStyles.THEME_BOOTSTRAP;
         this.utilInfos.formStyle = this.formData.formStyle;
         this.enableForm = true;
     }

    sendResult() {
        if (!this.dynaForm.valid || !this.isRadiosValid()) {
            for(let key in this.controls) {
                this.controls[key]['enableError']();
            }
            return;
        }
        this.setCheckBoxValue();        
        this.formData.cb(this.formData.dataObject);
    }
    
    isRadiosValid() {
        for (let i = 0; i < this.formData.controls.length; i++) {  
            //checkbox unchecked value setup
            let ctl = this.formData.controls[i];
            if (ctl.controlType === ControlTypes.RADIO) {
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
            if (ctl.controlType === ControlTypes.CHECKBOX) {
                if (this.dynaForm.controls[ctl.valueProperty].value) {
                    this.formData.dataObject[ctl.valueProperty] = ctl.checkedValue || true;                    
                }else {
                    this.formData.dataObject[ctl.valueProperty] = ctl.unCheckedValue || false;
                }
            }
        }
    };
     
}
