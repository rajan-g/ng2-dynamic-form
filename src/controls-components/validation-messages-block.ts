import {Component, Input}from '@angular/core';
@Component ({
    selector: 'dyna-validation-block',
    template: `
    <div *ngIf="self"> 
    <span class="text-danger" *ngIf="self.isRequired && self.dynaForm.controls[self.valueProperty]._errors && self.dynaForm.controls[self.valueProperty]._errors.required && self.isSubmited">{{self.requiredMessage}}</span>
    <span class="text-danger" *ngIf="self.isRequired && self.controlType === 'radio' && !self.dynaForm.controls[self.valueProperty].value && self.isSubmited">{{self.requiredMessage}}</span>
    <span class="text-danger" *ngIf="self.dynaForm.controls[self.valueProperty]._errors && !self.dynaForm.controls[self.valueProperty]._errors.required && self.dynaForm.controls[self.valueProperty]._errors.minlength && self.isSubmited">{{self.minLengthMessage}}. </span>
    <span class="text-danger" *ngIf="self.dynaForm.controls[self.valueProperty]._errors && !self.dynaForm.controls[self.valueProperty]._errors.required && self.dynaForm.controls[self.valueProperty]._errors.maxlength && self.isSubmited">{{self.maxLengthMessage}}. </span>
    <span class="text-danger" *ngIf="self.dynaForm.controls[self.valueProperty]._errors && !self.dynaForm.controls[self.valueProperty]._errors.required && self.dynaForm.controls[self.valueProperty]._errors.pattern && self.isSubmited">{{self.patternMessage}}. </span>
    <span class="text-danger" *ngIf="self.dynaForm.controls[self.valueProperty]._errors && !self.dynaForm.controls[self.valueProperty]._errors.required && self.dynaForm.controls[self.valueProperty]._errors.min && self.isSubmited">{{self.minMessage}}. </span>
    <span class="text-danger" *ngIf="self.dynaForm.controls[self.valueProperty]._errors && !self.dynaForm.controls[self.valueProperty]._errors.required && self.dynaForm.controls[self.valueProperty]._errors.max && self.isSubmited">{{self.maxMessage}}. </span>
    <span class="text-danger" *ngFor="let cust of self.customvalidators">
    <span class="text-danger" *ngIf="self.dynaForm.controls[self.valueProperty]._errors && !self.dynaForm.controls[self.valueProperty]._errors.required && self.dynaForm.controls[self.valueProperty]._errors['customvali_'+cust.validationKey] && self.isSubmited">{{cust.validationMessage || 'custom error message missing'}}. </span>
    </span>
    </div>
    `
})
export class DynaValidationBlock{
    @Input('self') self:any;
}