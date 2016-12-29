/*
 * @author RAJAN G
 */
System.register(['@angular/core', '../src/control-meta/FormStyles', '../src/control-meta/control-types'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, FormStyles_1, control_types_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (FormStyles_1_1) {
                FormStyles_1 = FormStyles_1_1;
            },
            function (control_types_1_1) {
                control_types_1 = control_types_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.data = new Object({ firstName: 'Rajan', active: 'inactive', role: 4 });
                    this.controls = [
                        {
                            label: 'First name',
                            valueProperty: 'firstName',
                            controlType: control_types_1.ControlTypes.TEXTBOX,
                            isRequired: true,
                            minlength: 4,
                            maxLength: 10,
                        },
                        {
                            label: 'Last Name',
                            valueProperty: 'lastName',
                            controlType: control_types_1.ControlTypes.TEXTBOX,
                            isRequired: true,
                            minlength: 4,
                            maxLength: 10,
                        },
                        {
                            label: 'Username',
                            valueProperty: 'userName',
                            controlType: control_types_1.ControlTypes.TEXTBOX,
                            isRequired: true,
                            minlength: 4,
                            maxLength: 10,
                            customvalidators: [{
                                    validationKey: 'username',
                                    validationMessage: 'Username not valid',
                                    validationFn: function (val) {
                                        if (!val || val.indexOf('rajan') === -1) {
                                            return false;
                                        }
                                        return true;
                                    }
                                }]
                        },
                        {
                            label: 'Email',
                            valueProperty: 'Email',
                            controlType: control_types_1.ControlTypes.EMAIL,
                            isRequired: true,
                            asynchValidators: [{
                                    validationKey: 'email',
                                    validationMessage: 'email not valid',
                                    validationFn: function (val, control, cb) {
                                        setTimeout(function () {
                                            if (!val || val.indexOf('@gmail.com') == -1) {
                                                cb(false);
                                            }
                                            else {
                                                cb(true);
                                            }
                                        }, 4000);
                                    }
                                }]
                        },
                        {
                            label: 'Age',
                            valueProperty: 'age',
                            controlType: control_types_1.ControlTypes.NUMBER,
                            isRequired: true,
                            min: 5,
                            max: 100,
                        },
                        {
                            label: 'Mobile',
                            valueProperty: 'mobile',
                            controlType: control_types_1.ControlTypes.TEXTBOX,
                            isRequired: true,
                            minlength: 10,
                            maxLength: 12,
                            pattern: '[0-9]{10}'
                        },
                        {
                            label: 'isActive',
                            valueProperty: 'active',
                            controlType: control_types_1.ControlTypes.CHECKBOX,
                            isRequired: true,
                            checkedValue: 'active',
                            unCheckedValue: 'inactive'
                        },
                        {
                            label: 'Gender',
                            valueProperty: 'gender',
                            controlType: control_types_1.ControlTypes.RADIO,
                            isRequired: true,
                            options: [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]
                        },
                        {
                            label: 'Role',
                            valueProperty: 'role',
                            controlType: control_types_1.ControlTypes.SELECT_DROPDOWN,
                            isRequired: true,
                            defaultSelectMessage: '--Select Role--',
                            optionValueProperty: 'parent.id',
                            optionDisplayProperty: 'name',
                            options: [
                                { name: 'Admin', parent: { id: '1' } },
                                { name: 'Manager', parent: { id: '2' } },
                                { name: 'Delivery Head', parent: { id: '3' } },
                                { name: 'Software Engineer', parent: { id: '4' } }
                            ]
                        }
                    ];
                    //            this.fromData = new FromData('sampleform', this.controls, this.data, (formData:any) => {
                    //                console.log('form data', formData)
                    //            })
                    this.fromData = {
                        formName: 'sampleform',
                        formStyle: FormStyles_1.FormStyles.BOOTSTRAP_HORIZONTAL,
                        theme: FormStyles_1.FormStyles.THEME_BOOTSTRAP,
                        controls: this.controls,
                        dataObject: this.data,
                        cb: function (formData) {
                            console.log('form data', formData);
                        }
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div *ngIf=\"fromData\">\n    <dynaform [formData]=\"fromData\" ></dynaform>\n    </div>\n",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map