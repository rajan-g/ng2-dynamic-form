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
let AppComponent = class AppComponent {
    constructor() {
        //    data: any = new Object({ firstName: 'Rajan', active:'inactive',role:{parent:{id:[1, 2]}}});
        this.data = { "firstName": "Rajan", "active": "active", "role": { "parent": { "id": [1, 2] } }, "lastName": "rajan", "userName": "rajan", "Email": "rajan@gmail.com", "age": 33, "mobile": "3333333333", "gender": { "category": "male" } };
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
            formName: 'sampleform',
            formStyle: FormStyles_1.FormStyles.BOOTSTRAP_HORIZONTAL,
            theme: FormStyles_1.FormStyles.THEME_BOOTSTRAP,
            controls: this.controls,
            dataObject: this.data,
            cb: (formData) => {
                console.log('form data', formData);
            }
        };
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: `
    <div *ngIf="formData">
    <dynaform [formData]="formData" ></dynaform>
    </div>
`,
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map