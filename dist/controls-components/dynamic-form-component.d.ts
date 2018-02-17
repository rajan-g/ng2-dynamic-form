import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormData } from '../control-meta/FormData';
import { PropertyHandler } from '../control-meta/PropertyHandler';
import { SelectControl } from './select-control';
export declare class DynaFormComponent implements OnInit {
    private fb;
    private propertyHandler;
    formData: FormData;
    selectCtls: Array<SelectControl>;
    enableForm: boolean;
    utilInfos: any;
    dynaForm: FormGroup;
    originalInputData: any;
    controls: {};
    util: any;
    constructor(fb: FormBuilder, propertyHandler: PropertyHandler);
    ngOnInit(): void;
    sendResult(): void;
    isRadiosValid(): boolean;
    setCheckBoxValue(): void;
    setSelectBoxValues(): void;
    setCustomizedDataObject(): void;
    composeResultData(): void;
}
