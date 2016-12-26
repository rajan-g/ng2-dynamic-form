/* 
 * Author Rajan Gunasekaran
 */

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlTypes } from './control-types';

export abstract class BaseControl {
    private _label: string; // name of the control label
    private _dataObject: any; //name of the input or object property
    private _valueProperty: string; //property name of the dataObject
    private _controlType: ControlTypes; // name of the control should be from enum
    private _customvalidators: Array<CustomValidation> // user based validation user can send any function it should return as boolean value
    private _isRequired: boolean; // isRequired validation to be apply default true
    private _requiredMessage: string
    private _minLength: number = -1
    private _minLengthMessage: string
    private _maxLength: number;
    private _maxLengthMessage: string;
    private _min: number = -1
    private _minMessage: string
    private _max: number;
    private _maxMessage: string;
    private _pattern: string;
    private _patternMessage: string;
    private _controlClasses: any;
    private _lableClasses: any;
    private _controlClassesOnError: any;
    private _lableClassesOnError: any;
    private _formControl: FormControl;
    private _enable: boolean = false;
    private _isSubmited: boolean = false;

    init(meta: any, util: any, dataObject: Object) {
        this.label = meta['label'];
        this.dataObject = dataObject;
        this.valueProperty = meta['valueProperty'];
        this.controlType = meta['controlType'];
        this.customvalidators = meta['customvalidators'];
        this.isRequired = meta['isRequired'];
        this.requiredMessage = meta['requiredMessage'];
        this.minLength = meta['minlength'];
        this.minLengthMessage = meta['minLengthMessage'];
        this.maxLength = meta['maxLength'];
        this.maxLengthMessage = meta['maxLengthMessage'];
        this.min = meta['min'];
        this.minMessage = meta['minMessage'];
        this.max = meta['max'];
        this.maxMessage = meta['maxMessage'];
        this.pattern = meta['pattern'];
        this.patternMessage = meta['patternMessage'];
        this.controlClasses = meta['controlClasses'];
        this.lableClasses = meta['lableClasses'];
        this.controlClassesOnError = meta['controlClassesOnError'];
        //        this.formControl = meta['formControl'];
        this.buildFormControl(util);
    }

    get label() {
        return this._label || 'Label Not Defined';
    }

    set label(label: string) {
        this._label = label;
    }
    get valueProperty() {
        return this._valueProperty;
    }

    set valueProperty(valueProperty: string) {
        if (!valueProperty) {
            throw Error("valueProperty not be undefined for label of" + this.label + ", control type of " + this._controlType);
        }
        this._valueProperty = valueProperty;
    }
    get controlType() {
        return this._controlType;
    }
    set controlType(controlType: ControlTypes) {
        this._controlType = controlType || ControlTypes.TEXTBOX;
    }

    get customvalidators() {
        return this._customvalidators;
    }
    set customvalidators(customvalidators: Array<CustomValidation>) {
        this._customvalidators = customvalidators || [];
    }
    get isRequired() {
        return this._isRequired;
    }
    set isRequired(isRequired: boolean) {
        this._isRequired = isRequired;
    }
    get requiredMessage() {
        return this._requiredMessage.replace('##@LABLE@##', this.label);
    }
    set requiredMessage(requiredMessage: string) {
        this._requiredMessage = requiredMessage || '##@LABLE@## is required';
    }
    get minLength() {
        return this._minLength;
    }
    set minLength(_minlength: number) {
        this._minLength = _minlength || -1;
    }
    get minLengthMessage() {
        return this._minLengthMessage.replace('##@LABLE@##', this.label);
    }
    set minLengthMessage(minLengthMessage: string) {
        this._minLengthMessage = minLengthMessage || '##@LABLE@## length should be atleast ' + this._minLength;
    }
    get maxLength() {
        return this._maxLength;
    }
    set maxLength(maxLength: number) {
        this._maxLength = maxLength || -1;
    }
    get maxLengthMessage() {
        return this._maxLengthMessage.replace('##@LABLE@##', this.label);
    }
    set maxLengthMessage(maxLengthMessage: string) {
        this._maxLengthMessage = maxLengthMessage || '##@LABLE@## length should not exceed ' + this._maxLength;
    }
    get min() {
        return this._min;
    }
    set min(_min: number) {
        this._min = _min || -1;
    }
    get minMessage() {
        return this._minMessage.replace('##@LABLE@##', this.label);
    }
    set minMessage(minMessage: string) {
        this._minMessage = minMessage || '##@LABLE@##  should be atleast ' + this._min;
    }
    get max() {
        return this._max;
    }
    set max(max: number) {
        this._max = max || -1;
    }
    get maxMessage() {
        return this._maxMessage.replace('##@LABLE@##', this.label);
    }
    set maxMessage(_maxMessage: string) {
        this._maxMessage = _maxMessage || '##@LABLE@## should not exceed ' + this._max;
    }
    get pattern() {
        return this._pattern;
    }
    set pattern(pattern: string) {
        this._pattern = pattern;
    }
    get patternMessage() {
        return this._patternMessage.replace('##@LABLE@##', this.label);
    }
    set patternMessage(patternMessage: string) {
        this._patternMessage = patternMessage || '##@LABLE@## expected pattern not match';
    }
    get controlClasses() {
        return this._controlClasses.join(' ');
    }
    set controlClasses(controlClasses: Array<string>) {
        this._controlClasses = controlClasses || [];
    }

    get lableClasses() {
        return this._lableClasses.join(' ');
    }
    set lableClasses(lableClasses: Array<string>) {
        this._lableClasses = lableClasses || [];
    }

    get controlClassesOnError() {
        return this._controlClassesOnError.join(' ');
    }
    set controlClassesOnError(controlClassesOnError: Array<string>) {
        this._controlClassesOnError = controlClassesOnError || [];
    }
    get lableClassesOnError() {
        return this._lableClassesOnError.join(' ');
    }
    set lableClassesOnError(lableClassesOnError: Array<string>) {
        this._lableClassesOnError = lableClassesOnError || [];
    }
    get dataObject() {
        return this._dataObject;
    }
    set dataObject(dataObject: Object) {
        if (!dataObject) {
            throw Error('Form Data object missing');
        }
        this._dataObject = dataObject
    }
    get formControl() {
        return this._formControl;
    }
    set formControl(formControl: FormControl) {
        this._formControl = formControl
    }
    get enable() {
        return this._enable;
    }
    set enable(enable: boolean) {
        this._enable = enable
    }
    get isSubmited() {
        return this._isSubmited;
    }
    set isSubmited(isSubmited: boolean) {
        this._isSubmited = isSubmited
    }
    buildFormControl(util: any) {
        let validatorsList: any = [];
        let validatorFnList: any = [];
        if (this.isRequired) {
            validatorsList.push(Validators.required);
        }
        if (this.minLength > 0 && this.controlType !== ControlTypes.NUMBER) {
            validatorsList.push(Validators.minLength(this.minLength));
        }
        if (this.maxLength > 0 && this.controlType !== ControlTypes.NUMBER) {
            validatorsList.push(Validators.maxLength(this.maxLength));
        }
        //**min and max validation for number start
        if (this.min > 0 && this.controlType === ControlTypes.NUMBER) {
            validatorsList.push((c: FormControl) => {
                if (c.value < this.min) {
                    let returnObj = {};
                    returnObj['min'] = {
                        valid: false
                    }
                    return returnObj;
                }
                return null;
            });
        }
        if (this.max > 0 && this.controlType === ControlTypes.NUMBER) {
            validatorsList.push((c: FormControl) => {
                if (c.value > this.max) {
                    let returnObj = {};
                    returnObj['max'] = {
                        valid: false
                    }
                    return returnObj;
                }
                return null;
            });
        }
        //##min and max validation for number end
        if (this.pattern) {
            validatorsList.push(Validators.pattern(this.pattern));
        }
        for (let i = 0; i < this.customvalidators.length; i++) {
            let fnObject: CustomValidation = this.customvalidators[0];
            validatorsList.push((c: FormControl) => {
                if (fnObject.validationFn && fnObject.validationKey) {
                    if (fnObject.validationFn(c.value, c)) {
                        return null
                    } else {
                        let returnObj = {};
                        returnObj['customvali_' + fnObject.validationKey] = {
                            valid: false
                        }
                        return returnObj;
                    };
                }
            })
        }
        this.formControl = new FormControl(this.dataObject[this.valueProperty], Validators.compose(validatorsList), validatorFnList[0]);
        util.addControl(this.valueProperty, this.formControl, () => { // validation message enable callback
            this.isSubmited = true;
        });
        setTimeout(() => {
            this.enable = true;
        }, 200);
    }
}



class CustomValidation {
    validationFn: any;
    validationMessage: string = '';
    validationKey: string = '';
}