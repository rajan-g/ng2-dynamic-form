/*
 * Author Rajan Gunasekaran
 */
System.register(['@angular/forms', './control-types'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var forms_1, control_types_1;
    var BaseControl, CustomValidation;
    return {
        setters:[
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (control_types_1_1) {
                control_types_1 = control_types_1_1;
            }],
        execute: function() {
            BaseControl = (function () {
                function BaseControl() {
                    this._minLength = -1;
                    this._min = -1;
                    this._enable = false;
                    this._isSubmited = false;
                }
                BaseControl.prototype.init = function (meta, util, dataObject) {
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
                };
                Object.defineProperty(BaseControl.prototype, "label", {
                    get: function () {
                        return this._label || 'Label Not Defined';
                    },
                    set: function (label) {
                        this._label = label;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "valueProperty", {
                    get: function () {
                        return this._valueProperty;
                    },
                    set: function (valueProperty) {
                        if (!valueProperty) {
                            throw Error("valueProperty not be undefined for label of" + this.label + ", control type of " + this._controlType);
                        }
                        this._valueProperty = valueProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "controlType", {
                    get: function () {
                        return this._controlType;
                    },
                    set: function (controlType) {
                        this._controlType = controlType || control_types_1.ControlTypes.TEXTBOX;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "customvalidators", {
                    get: function () {
                        return this._customvalidators;
                    },
                    set: function (customvalidators) {
                        this._customvalidators = customvalidators || [];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "isRequired", {
                    get: function () {
                        return this._isRequired;
                    },
                    set: function (isRequired) {
                        this._isRequired = isRequired;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "requiredMessage", {
                    get: function () {
                        return this._requiredMessage.replace('##@LABLE@##', this.label);
                    },
                    set: function (requiredMessage) {
                        this._requiredMessage = requiredMessage || '##@LABLE@## is required';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "minLength", {
                    get: function () {
                        return this._minLength;
                    },
                    set: function (_minlength) {
                        this._minLength = _minlength || -1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "minLengthMessage", {
                    get: function () {
                        return this._minLengthMessage.replace('##@LABLE@##', this.label);
                    },
                    set: function (minLengthMessage) {
                        this._minLengthMessage = minLengthMessage || '##@LABLE@## length should be atleast ' + this._minLength;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "maxLength", {
                    get: function () {
                        return this._maxLength;
                    },
                    set: function (maxLength) {
                        this._maxLength = maxLength || -1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "maxLengthMessage", {
                    get: function () {
                        return this._maxLengthMessage.replace('##@LABLE@##', this.label);
                    },
                    set: function (maxLengthMessage) {
                        this._maxLengthMessage = maxLengthMessage || '##@LABLE@## length should not exceed ' + this._maxLength;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "min", {
                    get: function () {
                        return this._min;
                    },
                    set: function (_min) {
                        this._min = _min || -1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "minMessage", {
                    get: function () {
                        return this._minMessage.replace('##@LABLE@##', this.label);
                    },
                    set: function (minMessage) {
                        this._minMessage = minMessage || '##@LABLE@##  should be atleast ' + this._min;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "max", {
                    get: function () {
                        return this._max;
                    },
                    set: function (max) {
                        this._max = max || -1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "maxMessage", {
                    get: function () {
                        return this._maxMessage.replace('##@LABLE@##', this.label);
                    },
                    set: function (_maxMessage) {
                        this._maxMessage = _maxMessage || '##@LABLE@## should not exceed ' + this._max;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "pattern", {
                    get: function () {
                        return this._pattern;
                    },
                    set: function (pattern) {
                        this._pattern = pattern;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "patternMessage", {
                    get: function () {
                        return this._patternMessage.replace('##@LABLE@##', this.label);
                    },
                    set: function (patternMessage) {
                        this._patternMessage = patternMessage || '##@LABLE@## expected pattern not match';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "controlClasses", {
                    get: function () {
                        return this._controlClasses.join(' ');
                    },
                    set: function (controlClasses) {
                        this._controlClasses = controlClasses || [];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "lableClasses", {
                    get: function () {
                        return this._lableClasses.join(' ');
                    },
                    set: function (lableClasses) {
                        this._lableClasses = lableClasses || [];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "controlClassesOnError", {
                    get: function () {
                        return this._controlClassesOnError.join(' ');
                    },
                    set: function (controlClassesOnError) {
                        this._controlClassesOnError = controlClassesOnError || [];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "lableClassesOnError", {
                    get: function () {
                        return this._lableClassesOnError.join(' ');
                    },
                    set: function (lableClassesOnError) {
                        this._lableClassesOnError = lableClassesOnError || [];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "dataObject", {
                    get: function () {
                        return this._dataObject;
                    },
                    set: function (dataObject) {
                        if (!dataObject) {
                            throw Error('Form Data object missing');
                        }
                        this._dataObject = dataObject;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "formControl", {
                    get: function () {
                        return this._formControl;
                    },
                    set: function (formControl) {
                        this._formControl = formControl;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "enable", {
                    get: function () {
                        return this._enable;
                    },
                    set: function (enable) {
                        this._enable = enable;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseControl.prototype, "isSubmited", {
                    get: function () {
                        return this._isSubmited;
                    },
                    set: function (isSubmited) {
                        this._isSubmited = isSubmited;
                    },
                    enumerable: true,
                    configurable: true
                });
                BaseControl.prototype.buildFormControl = function (util) {
                    var _this = this;
                    var validatorsList = [];
                    var validatorFnList = [];
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
                        validatorsList.push(function (c) {
                            if (c.value < _this.min) {
                                var returnObj = {};
                                returnObj['min'] = {
                                    valid: false
                                };
                                return returnObj;
                            }
                            return null;
                        });
                    }
                    if (this.max > 0 && this.controlType === control_types_1.ControlTypes.NUMBER) {
                        validatorsList.push(function (c) {
                            if (c.value > _this.max) {
                                var returnObj = {};
                                returnObj['max'] = {
                                    valid: false
                                };
                                return returnObj;
                            }
                            return null;
                        });
                    }
                    //##min and max validation for number end
                    if (this.pattern) {
                        validatorsList.push(forms_1.Validators.pattern(this.pattern));
                    }
                    var _loop_1 = function(i) {
                        var fnObject = this_1.customvalidators[0];
                        validatorsList.push(function (c) {
                            if (fnObject.validationFn && fnObject.validationKey) {
                                if (fnObject.validationFn(c.value, c)) {
                                    return null;
                                }
                                else {
                                    var returnObj = {};
                                    returnObj['customvali_' + fnObject.validationKey] = {
                                        valid: false
                                    };
                                    return returnObj;
                                }
                                ;
                            }
                        });
                    };
                    var this_1 = this;
                    for (var i = 0; i < this.customvalidators.length; i++) {
                        _loop_1(i);
                    }
                    this.formControl = new forms_1.FormControl(this.dataObject[this.valueProperty], forms_1.Validators.compose(validatorsList), validatorFnList[0]);
                    util.addControl(this.valueProperty, this.formControl, function () {
                        _this.isSubmited = true;
                    });
                    setTimeout(function () {
                        _this.enable = true;
                    }, 200);
                };
                return BaseControl;
            }());
            exports_1("BaseControl", BaseControl);
            CustomValidation = (function () {
                function CustomValidation() {
                    this.validationMessage = '';
                    this.validationKey = '';
                }
                return CustomValidation;
            }());
        }
    }
});
//# sourceMappingURL=base.js.map