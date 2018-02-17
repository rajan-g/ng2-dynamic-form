import { FormStyles} from './FormStyles';
export class FormData {
    formName:string;
    controls:Array<any>;
    dataObject:Object;   
    formStyle:string;
    theme:string;
    cb:any;   
    constructor(formName:string, controls:Array<any>, dataObject:any , cb:any) {
        this.formName = formName;
        this.controls = controls;
        this.dataObject = dataObject;
        this.cb = cb;
    }
}