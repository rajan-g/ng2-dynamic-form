/* 
 * @author RAJAN G
 */

import { Component } from '@angular/core';
import { FromData } from '../src/control-meta/FormData';
import { FormStyles } from '../src/control-meta/FormStyles';
import { ControlTypes } from '../src/control-meta/control-types';

@Component({
    selector: 'my-app',
    template: `
    <div *ngIf="fromData">
    <dynaform [formData]="fromData" ></dynaform>
    </div>
`,
})
export class AppComponent {
    fromData: FromData;
    data: any = new Object({ firstName: 'Rajan', active:'inactive',role:4});
    controls: Array<any> = [
        {
            label: 'First name',
            valueProperty: 'firstName',
            controlType: ControlTypes.TEXTBOX,
            isRequired: true,
            minlength: 4,
            maxLength: 10,
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
            }]
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
                validationFn: (val: string, control:any, cb:any) => {
                    setTimeout(() => {
                        if (!val || val.indexOf('@gmail.com') == -1) {
                            cb(false);
                        }else {
                            cb(true);
                        }
                    },4000)
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
            valueProperty: 'gender',
            controlType: ControlTypes.RADIO,
            isRequired: true,
            options: [{label: 'Male', value:'male'}, {label: 'Female', value:'female'}]
        },
        {
            label: 'Role',
            valueProperty: 'role',
            controlType: ControlTypes.SELECT_DROPDOWN,
            isRequired: true,
            defaultSelectMessage: '--Select Role--',
            optionValueProperty: 'parent.id',
            optionDisplayProperty: 'name',
            options: [
            {name: 'Admin', parent:{ id:'1'}},
            {name: 'Manager',  parent:{ id:'2'}},
            {name: 'Delivery Head', parent:{ id:'3'}},
            {name: 'Software Engineer', parent:{ id:'4'}}
            ]
        }
    ];
    constructor() {
        //            this.fromData = new FromData('sampleform', this.controls, this.data, (formData:any) => {
        //                console.log('form data', formData)
        //            })
        this.fromData = {
            formName: 'sampleform',
            formStyle: FormStyles.BOOTSTRAP_HORIZONTAL,
            theme: FormStyles.THEME_BOOTSTRAP,
            controls: this.controls,
            dataObject: this.data,
            cb: (formData: any) => {
                console.log('form data', formData)
            }

        }
    }
}
