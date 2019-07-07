/* 
 * @author RAJAN G
 */

import { Component } from '@angular/core';
import { FormData } from '../dist/control-meta/FormData';
import { FormStyles } from '../dist/control-meta/FormStyles';
import { ControlTypes } from '../dist/control-meta/control-types';
import { ValidationConfig, ValidationPosition } from '../src/configs/configs';
import { BaseLayout } from '../src/layouts/base';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'my-app',
    template: `
    <div *ngIf="formData">
    <df-bootstrap-form [formData]="formData" ></df-bootstrap-form>
    </div>
`,
})
export class AppComponent {

    formData: any;
    //    data: any = new Object({ firstName: 'Rajan', active:'inactive',role:{parent:{id:[1, 2]}}});
    data: any = { "firstName": "Rajan", "active": "active", "role": { "parent": { "id": [1, 2] } }, "lastName": "Gunasekaran", "userName": "rajan", "Email": "rajan@gmail.com", "age": 33, "mobile": "3333333333", "gender": { "category": "male" } };
    validationConfig: ValidationConfig = <ValidationConfig>{
        possition: ValidationPosition.bottom
    }
    controls1: Array<any> = [
        {
            label: 'First name1',
            valueProperty: 'firstName1',
            controlType: ControlTypes.TEXTBOX,
            isRequired: true,
            minlength: 4,
            maxLength: 10,
            readOnly: false
        },
        {
            label: 'Last Name1',
            valueProperty: 'lastName1',
            controlType: ControlTypes.TEXTBOX,
            isRequired: true,
            minlength: 4,
            maxLength: 10,
            // readOnlyBy: [(formControls: any) => {
            //     if(!formControls['firstName1'].value) {
            //     return true;
            //     }
            //     return false;
            // }]
            
        }]
    controls2: Array<any> = [
        {
            label: 'First name2',
            valueProperty: 'firstName2',
            controlType: ControlTypes.TEXTBOX,
            isRequired: true,
            minlength: 4,
            maxLength: 10,
            hideBy: [(formControls: any) => {
                if(formControls['firstName1'].value) {
                return false;
                }
                return true;
            }]
        },
        {
            label: 'Last Name2',
            valueProperty: 'lastName2',
            controlType: ControlTypes.TEXTBOX,
            isRequired: true,
            minlength: 4,
            maxLength: 10,
        }]
    controls3: Array<any> = [
        {
            label: 'First name3',
            valueProperty: 'user.info.firstName3',
            controlType: ControlTypes.TEXTBOX,
            isRequired: true,
            minlength: 4,
            maxLength: 10
        },
        {
            label: 'Last Name3',
            valueProperty: 'user.info.lastName3',
            controlType: ControlTypes.TEXTBOX,
            isRequired: true,
            minlength: 4,
            maxLength: 10,
        }]
    controls: Array<any> = [
        {
            label: 'First name',
            valueProperty: 'firstName',
            controlType: ControlTypes.TEXTBOX,
            isRequired: true,
            minlength: 4,
            maxLength: 10
        },
        {
            label: 'Last Name',
            valueProperty: 'lastName',
            controlType: ControlTypes.TEXTBOX,
            isRequired: true,
            minlength: 4,
            maxLength: 10,
        },
        {
            label: 'Username',
            valueProperty: 'userName',
            placeHolder: 'User name',
            controlType: ControlTypes.TEXTBOX,
            isRequired: true,
            minlength: 4,
            maxLength: 10,
            customvalidators: [{
                validationKey: 'username',
                validationMessage: 'Username not valid',
                validationFn: (val: string) => {
                    if (!val || val.indexOf('rajan') === -1) {
                        return false
                    }
                    return true;
                }
            }],
            // enableBy: [(formControls: any) => {
            //     if(!formControls['firstName'].value && !formControls['lastName'].value) {
            //     return false;
            //     }
            //     return true;
            // }]
        }
        ,
        {
            label: 'Email',
            valueProperty: 'Email',
            controlType: ControlTypes.EMAIL,
            isRequired: true,
            asynchValidators: [{
                validationKey: 'email',
                validationMessage: 'email not valid',
                validationFn: (val: string, control: any, cb: any) => {
                    setTimeout(() => {
                        if (!val || val.indexOf('@gmail.com') == -1) {
                            cb(false);
                        } else {
                            cb(true);
                        }
                    }, 4000)
                }
            }]

        },
        {
            label: 'Age',
            valueProperty: 'age',
            controlType: ControlTypes.NUMBER,
            isRequired: true,
            min: 5,
            max: 100,
        }
        ,
        {
            label: 'Mobile',
            valueProperty: 'mobile',
            controlType: ControlTypes.TEXTBOX,
            isRequired: true,
            minlength: 10,
            maxLength: 12,
            pattern: '[0-9]{10}'
        }
        ,
        {
            label: 'isActive',
            valueProperty: 'active',
            controlType: ControlTypes.CHECKBOX,
            isRequired: true,
            checkedValue: 'active',
            unCheckedValue: 'inactive'
        },
        {
            label: 'Gender',
            valueProperty: 'gender.category',
            controlType: ControlTypes.RADIO,
            isRequired: true,
            options: [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]
        },
        {
            label: 'Role',
            valueProperty: 'role.parent.id',
            controlType: ControlTypes.SELECT_DROPDOWN,
            isRequired: true,
            multiselect: true, // if it is true value property should be a array
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
    constructor() {
        //            this.fromData = new FromData('sampleform', this.controls, this.data, (formData:any) => {
        //                console.log('form data', formData)
        //            })
        this.formData = {
            name: 'sampleform',
            formConfig: {
                type: 'vertical',
                validationConfig: this.validationConfig
            },
            formStyle: FormStyles.BOOTSTRAP_VERTICAL,
            theme: FormStyles.THEME_BOOTSTRAP,
            layout: {
                type: 'tab',
                layoutConfig: {title: '<div class="text-center text-primary"><h3>User Info </h3></div>'},
                onSubmit: (formGroup: FormGroup) => {
                    console.info(formGroup);
                },
                items: [{
                    "type": "default",  // it can be column, pannel, tab, accordion, steps
                    "fileds":this.controls1, //you can use reference name of global form or you can derrive new,
                    "layoutConfig": {
                      "title": "Tab 1"
                    }
                  },
                  {
                    "type": "default",  // it can be column, pannel, tab, accordion, steps
                    "fileds":this.controls2, //you can use reference name of global form or you can derrive new,
                    "layoutConfig": {
                      "title": "Tab 2"
                    }
                  },
                  {
                    // "readOnly": true,
                    enableBy: [(formControls: any) => {
                        if(formControls['firstName1'].value) {
                        return true;
                        }
                        return false;
                    }],
                    "type": "default",  // it can be column, pannel, tab, accordion, steps
                    "fileds":this.controls3, //you can use reference name of global form or you can derrive new,
                    "layoutConfig": {
                      "title": "Tab 3"
                    },
                    "nextButtonText": "Complete"
                  }
                ]
            },
            fileds: this.controls,
            dataObject: this.data,
            cb: (formData: any) => {
                console.log('form data', formData)
            }

        }

        // setTimeout(() => {
        //     this.formData.layout.items[2].readOnly = false;
        // }, 10000)
    }
}
