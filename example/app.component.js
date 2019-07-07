"use strict";
/*
 * @author RAJAN G
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const FormStyles_1 = require("../dist/control-meta/FormStyles");
const control_types_1 = require("../dist/control-meta/control-types");
const configs_1 = require("../src/configs/configs");
let AppComponent = class AppComponent {
    constructor() {
        //    data: any = new Object({ firstName: 'Rajan', active:'inactive',role:{parent:{id:[1, 2]}}});
        this.data = { "firstName": "Rajan", "active": "active", "role": { "parent": { "id": [1, 2] } }, "lastName": "Gunasekaran", "userName": "rajan", "Email": "rajan@gmail.com", "age": 33, "mobile": "3333333333", "gender": { "category": "male" } };
        this.validationConfig = {
            possition: configs_1.ValidationPosition.bottom
        };
        this.controls1 = [
            {
                label: 'First name1',
                valueProperty: 'firstName1',
                controlType: control_types_1.ControlTypes.TEXTBOX,
                isRequired: true,
                minlength: 4,
                maxLength: 10,
                readOnly: false
            },
            {
                label: 'Last Name1',
                valueProperty: 'lastName1',
                controlType: control_types_1.ControlTypes.TEXTBOX,
                isRequired: true,
                minlength: 4,
                maxLength: 10,
            }
        ];
        this.controls2 = [
            {
                label: 'First name2',
                valueProperty: 'firstName2',
                controlType: control_types_1.ControlTypes.TEXTBOX,
                isRequired: true,
                minlength: 4,
                maxLength: 10,
                hideBy: [(formControls) => {
                        if (formControls['firstName1'].value) {
                            return false;
                        }
                        return true;
                    }]
            },
            {
                label: 'Last Name2',
                valueProperty: 'lastName2',
                controlType: control_types_1.ControlTypes.TEXTBOX,
                isRequired: true,
                minlength: 4,
                maxLength: 10,
            }
        ];
        this.controls3 = [
            {
                label: 'First name3',
                valueProperty: 'user.info.firstName3',
                controlType: control_types_1.ControlTypes.TEXTBOX,
                isRequired: true,
                minlength: 4,
                maxLength: 10
            },
            {
                label: 'Last Name3',
                valueProperty: 'user.info.lastName3',
                controlType: control_types_1.ControlTypes.TEXTBOX,
                isRequired: true,
                minlength: 4,
                maxLength: 10,
            }
        ];
        this.controls = [
            {
                label: 'First name',
                valueProperty: 'firstName',
                controlType: control_types_1.ControlTypes.TEXTBOX,
                isRequired: true,
                minlength: 4,
                maxLength: 10
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
                placeHolder: 'User name',
                controlType: control_types_1.ControlTypes.TEXTBOX,
                isRequired: true,
                minlength: 4,
                maxLength: 10,
                customvalidators: [{
                        validationKey: 'username',
                        validationMessage: 'Username not valid',
                        validationFn: (val) => {
                            if (!val || val.indexOf('rajan') === -1) {
                                return false;
                            }
                            return true;
                        }
                    }],
            },
            {
                label: 'Email',
                valueProperty: 'Email',
                controlType: control_types_1.ControlTypes.EMAIL,
                isRequired: true,
                asynchValidators: [{
                        validationKey: 'email',
                        validationMessage: 'email not valid',
                        validationFn: (val, control, cb) => {
                            setTimeout(() => {
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
                valueProperty: 'gender.category',
                controlType: control_types_1.ControlTypes.RADIO,
                isRequired: true,
                options: [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]
            },
            {
                label: 'Role',
                valueProperty: 'role.parent.id',
                controlType: control_types_1.ControlTypes.SELECT_DROPDOWN,
                isRequired: true,
                multiselect: true,
                defaultSelectMessage: '--Select Role--',
                optionValueProperty: 'parent.id',
                optionDisplayProperty: 'name',
                options: [
                    { name: 'Admin', parent: { id: 1 } },
                    { name: 'Manager', parent: { id: 2 } },
                    { name: 'Delivery Head', parent: { id: 3 } },
                    { name: 'Software Engineer', parent: { id: 4 } }
                ]
            }
        ];
        //            this.fromData = new FromData('sampleform', this.controls, this.data, (formData:any) => {
        //                console.log('form data', formData)
        //            })
        this.formData = {
            name: 'sampleform',
            formConfig: {
                type: 'vertical',
                validationConfig: this.validationConfig
            },
            formStyle: FormStyles_1.FormStyles.BOOTSTRAP_VERTICAL,
            theme: FormStyles_1.FormStyles.THEME_BOOTSTRAP,
            layout: {
                type: 'tab',
                layoutConfig: { title: '<div class="text-center text-primary"><h3>User Info </h3></div>' },
                items: [{
                        "type": "default",
                        "fileds": this.controls1,
                        "layoutConfig": {
                            "title": "Tab 1"
                        }
                    },
                    {
                        "type": "default",
                        "fileds": this.controls2,
                        "layoutConfig": {
                            "title": "Tab 2"
                        }
                    },
                    {
                        // "readOnly": true,
                        enableBy: [(formControls) => {
                                if (formControls['firstName1'].value) {
                                    return false;
                                }
                                return true;
                            }],
                        "type": "default",
                        "fileds": this.controls3,
                        "layoutConfig": {
                            "title": "Tab 3"
                        },
                        "nextButtonText": "Complete"
                    }
                ]
            },
            fileds: this.controls,
            dataObject: this.data,
            cb: (formData) => {
                console.log('form data', formData);
            }
        };
        // setTimeout(() => {
        //     this.formData.layout.items[2].readOnly = false;
        // }, 10000)
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: `
    <div *ngIf="formData">
    <df-bootstrap-form [formData]="formData" ></df-bootstrap-form>
    </div>
`,
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map