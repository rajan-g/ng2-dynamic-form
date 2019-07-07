"use strict";
/*
 * Author Rajan Gunasekaran
 */
Object.defineProperty(exports, "__esModule", { value: true });
const forms_1 = require("@angular/forms");
const control_types_1 = require("./control-types");
const trildown_1 = require("../layouts/trildown");
class BaseControl extends trildown_1.TrilDownBase {
    constructor() {
        super(...arguments);
        this._minLength = -1;
        this._min = -1;
        this._enable = true;
        this._readOnly = false;
        this._isSubmited = false;
    }
    init(meta, util, dataObject) {
        this.label = meta['label'];
        this.placeHolder = meta['placeHolder'];
        this.autocomplete = meta['autocomplete'];
        this.dataObject = dataObject;
        this.valueProperty = meta['valueProperty'];
        this.controlType = meta['controlType'];
        this.customvalidators = meta['customvalidators'];
        this.asynchValidators = meta['asynchValidators'];
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
        this.enable = meta['enable'];
        this.helpText = meta['helpText'];
        this.helpTextClasses = meta['helpTextClasses'];
        this.readOnly = meta['readOnly'];
        this.enableBy = meta['enableBy'];
        this.readOnlyBy = meta['readOnlyBy'];
        this.labelConfig = meta['labelConfig'];
        this.validationConfig = meta['validationConfig'];
        this.formConfig = meta['formConfig'];
        this.formGroup = meta['formGroup'];
        //        this.formControl = meta['formControl'];
        this.buildFormControl(util);
    }
    get label() {
        return this._label || 'Label Not Defined';
    }
    set label(label) {
        this._label = label;
    }
    get placeHolder() {
        return this._placeHolder || this.label;
    }
    set placeHolder(placeHolder) {
        this._placeHolder = placeHolder;
    }
    get autocomplete() {
        return this._autocomplete;
    }
    set autocomplete(autocomplete) {
        this._autocomplete = autocomplete || 'off';
    }
    get valueProperty() {
        return this._valueProperty;
    }
    set valueProperty(valueProperty) {
        if (!valueProperty) {
            throw Error("valueProperty not be undefined for label of" + this.label + ", control type of " + this._controlType);
        }
        this._valueProperty = valueProperty;
    }
    get controlType() {
        return this._controlType;
    }
    set controlType(controlType) {
        this._controlType = controlType || control_types_1.ControlTypes.TEXTBOX;
    }
    get customvalidators() {
        return this._customvalidators;
    }
    set customvalidators(customvalidators) {
        this._customvalidators = customvalidators || [];
    }
    get asynchValidators() {
        return this._asynchValidators;
    }
    set asynchValidators(asynchValidators) {
        this._asynchValidators = asynchValidators || [];
    }
    get isRequired() {
        return this._isRequired;
    }
    set isRequired(isRequired) {
        this._isRequired = isRequired;
    }
    get requiredMessage() {
        return this._requiredMessage.replace('##@LABLE@##', this.label);
    }
    set requiredMessage(requiredMessage) {
        this._requiredMessage = requiredMessage || '##@LABLE@## is required';
    }
    get minLength() {
        return this._minLength;
    }
    set minLength(_minlength) {
        this._minLength = _minlength || -1;
    }
    get minLengthMessage() {
        return this._minLengthMessage.replace('##@LABLE@##', this.label);
    }
    set minLengthMessage(minLengthMessage) {
        this._minLengthMessage = minLengthMessage || '##@LABLE@## length should be atleast ' + this._minLength;
    }
    get maxLength() {
        return this._maxLength;
    }
    set maxLength(maxLength) {
        this._maxLength = maxLength || -1;
    }
    get maxLengthMessage() {
        return this._maxLengthMessage.replace('##@LABLE@##', this.label);
    }
    set maxLengthMessage(maxLengthMessage) {
        this._maxLengthMessage = maxLengthMessage || '##@LABLE@## length should not exceed ' + this._maxLength;
    }
    get min() {
        return this._min;
    }
    set min(_min) {
        this._min = _min || -1;
    }
    get minMessage() {
        return this._minMessage.replace('##@LABLE@##', this.label);
    }
    set minMessage(minMessage) {
        this._minMessage = minMessage || '##@LABLE@##  should be atleast ' + this._min;
    }
    get max() {
        return this._max;
    }
    set max(max) {
        this._max = max || -1;
    }
    get maxMessage() {
        return this._maxMessage.replace('##@LABLE@##', this.label);
    }
    set maxMessage(_maxMessage) {
        this._maxMessage = _maxMessage || '##@LABLE@## should not exceed ' + this._max;
    }
    get pattern() {
        return this._pattern;
    }
    set pattern(pattern) {
        this._pattern = pattern;
    }
    get patternMessage() {
        return this._patternMessage.replace('##@LABLE@##', this.label);
    }
    set patternMessage(patternMessage) {
        this._patternMessage = patternMessage || '##@LABLE@## expected pattern not match';
    }
    get controlClasses() {
        return this._controlClasses.join(' ');
    }
    set controlClasses(controlClasses) {
        this._controlClasses = controlClasses || [];
    }
    get lableClasses() {
        return this._lableClasses.join(' ');
    }
    set lableClasses(lableClasses) {
        this._lableClasses = lableClasses || [];
    }
    get controlClassesOnError() {
        return this._controlClassesOnError.join(' ');
    }
    set controlClassesOnError(controlClassesOnError) {
        this._controlClassesOnError = controlClassesOnError || [];
    }
    get lableClassesOnError() {
        return this._lableClassesOnError.join(' ');
    }
    set lableClassesOnError(lableClassesOnError) {
        this._lableClassesOnError = lableClassesOnError || [];
    }
    get dataObject() {
        return this._dataObject;
    }
    set dataObject(dataObject) {
        if (!dataObject) {
            throw Error('Form Data object missing');
        }
        this._dataObject = dataObject;
    }
    get formControl() {
        return this._formControl;
    }
    set formControl(formControl) {
        this._formControl = formControl;
    }
    get enable() {
        if (this.enableBy && this.enableBy.length) {
            return this.processEnable();
        }
        return this._enable;
    }
    set enable(enable) {
        this._enable = enable;
    }
    get isSubmited() {
        return this._isSubmited;
    }
    set isSubmited(isSubmited) {
        this._isSubmited = isSubmited;
    }
    /**
     * Getter helpText
     * @return {String}
     */
    get helpText() {
        return this._helpText;
    }
    /**
     * Getter helpTextClasses
     * @return {String}
     */
    get helpTextClasses() {
        return this._helpTextClasses;
    }
    /**
     * Getter readOnly
     * @return {boolean }
     */
    get readOnly() {
        if (this.readOnlyBy && this.readOnlyBy.length) {
            return this.processReadOnly();
        }
        return this._readOnly;
    }
    /**
     * Setter helpText
     * @param {String} value
     */
    set helpText(value) {
        this._helpText = value;
    }
    /**
     * Setter helpTextClasses
     * @param {String} value
     */
    set helpTextClasses(value) {
        this._helpTextClasses = value;
    }
    /**
     * Setter readOnly
     * @param {boolean } value
     */
    set readOnly(value) {
        this._readOnly = value;
    }
    /**
     * Getter validationConfig
     * @return {validationConfig}
     */
    get validationConfig() {
        return this._validationConfig;
    }
    /**
     * Setter validationConfig
     * @param {validationConfig} value
     */
    set validationConfig(value) {
        this._validationConfig = value;
    }
    /**
     * Getter labelConfig
     * @return {LabelConfig}
     */
    get labelConfig() {
        return this._labelConfig;
    }
    /**
     * Setter labelConfig
     * @param {LabelConfig} value
     */
    set labelConfig(value) {
        this._labelConfig = value;
    }
    /**
     * Getter checkedValue
     * @return {any}
     */
    get checkedValue() {
        return this._checkedValue;
    }
    /**
     * Setter checkedValue
     * @param {any} value
     */
    set checkedValue(value) {
        this._checkedValue = value;
    }
    /**
     * Getter unCheckedValue
     * @return {any}
     */
    get unCheckedValue() {
        return this._unCheckedValue;
    }
    /**
     * Setter unCheckedValue
     * @param {any} value
     */
    set unCheckedValue(value) {
        this._unCheckedValue = value;
    }
    buildFormControl(util) {
        let validatorsList = [];
        let validatorFnList = [];
        let validatorAsynchFnList = [];
        if (this.isRequired) {
            validatorsList.push(forms_1.Validators.required);
        }
        if (this.minLength > 0 && this.controlType !== control_types_1.ControlTypes.NUMBER) {
            validatorsList.push(forms_1.Validators.minLength(this.minLength));
        }
        if (this.maxLength > 0 && this.controlType !== control_types_1.ControlTypes.NUMBER) {
            validatorsList.push(forms_1.Validators.maxLength(this.maxLength));
        }
        //**min and max validation for number start
        if (this.min > 0 && this.controlType === control_types_1.ControlTypes.NUMBER) {
            validatorsList.push((c) => {
                if (c.value < this.min) {
                    let returnObj = {};
                    returnObj['min'] = {
                        valid: false
                    };
                    return returnObj;
                }
                return null;
            });
        }
        if (this.max > 0 && this.controlType === control_types_1.ControlTypes.NUMBER) {
            validatorsList.push((c) => {
                if (c.value > this.max) {
                    let returnObj = {};
                    returnObj['max'] = {
                        valid: false
                    };
                    return returnObj;
                }
                return null;
            });
        }
        //##min and max validation for number end
        //** check box required validation start
        if (this.isRequired && (this.controlType == control_types_1.ControlTypes.CHECKBOX || this.controlType == control_types_1.ControlTypes.SELECT_DROPDOWN)) {
            this.customvalidators.push({
                validationKey: 'required',
                validationMessage: this.requiredMessage,
                validationFn: (val) => {
                    if (!val) {
                        return false;
                    }
                    return true;
                }
            });
        }
        //## check box required validation end
        if (this.pattern) {
            validatorsList.push(forms_1.Validators.pattern(this.pattern));
        }
        for (let i = 0; i < this.customvalidators.length; i++) {
            let fnObject = this.customvalidators[i];
            validatorsList.push((c) => {
                if (fnObject.validationFn && fnObject.validationKey) {
                    if (fnObject.validationFn(c.value, c)) {
                        return null;
                    }
                    else {
                        let returnObj = {};
                        returnObj['customvali_' + fnObject.validationKey] = {
                            valid: false
                        };
                        return returnObj;
                    }
                    ;
                }
            });
        }
        for (let i = 0; i < this.asynchValidators.length; i++) {
            let fnObject = this.asynchValidators[i];
            validatorFnList.push((c) => {
                this.setAsynchValidationFlag(fnObject.validationKey, 'pending');
                return new Promise((resolve, reject) => {
                    if (fnObject.validationFn && fnObject.validationKey) {
                        fnObject.validationFn(c.value, c, (res) => {
                            this.setAsynchValidationFlag(fnObject.validationKey, 'completed');
                            if (res) {
                                return resolve(null);
                            }
                            else {
                                let returnObj = {};
                                returnObj['customasynchvali_' + fnObject.validationKey] = {
                                    valid: false
                                };
                                return resolve(returnObj);
                            }
                        });
                    }
                });
            });
        }
        this.formControl = new forms_1.FormControl(this.dataObject[this.valueProperty], forms_1.Validators.compose(validatorsList), validatorFnList);
        util.addControl(this.valueProperty, this.formControl, () => {
            this.isSubmited = true;
        });
        setTimeout(() => {
            this.enable = true;
        }, 200);
    }
    setAsynchValidationFlag(validationKey, value) {
        for (let i = 0; i < this.asynchValidators.length; i++) {
            let item = this.asynchValidators[i];
            if (item.validationKey === validationKey) {
                item.currentStatus = value;
            }
        }
    }
}
exports.BaseControl = BaseControl;
class CustomValidation {
    constructor() {
        this.validationMessage = '';
        this.validationKey = '';
    }
}
exports.CustomValidation = CustomValidation;
class CustomAsychValidation {
    constructor() {
        this.validationMessage = '';
        this.validationKey = '';
        this.currentStatus = '';
    }
}
exports.CustomAsychValidation = CustomAsychValidation;
//# sourceMappingURL=base.js.map