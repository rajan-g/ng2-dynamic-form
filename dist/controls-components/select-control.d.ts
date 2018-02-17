import { OnInit } from '@angular/core';
import { BaseControl } from '../control-meta/base';
export declare class SelectControl extends BaseControl implements OnInit {
    controlMeta: SelectControl;
    util: any;
    dynaForm: any;
    dataObject: Object;
    utilInfos: Object;
    self: any;
    _options: Array<any>;
    _multiselect: boolean;
    _defaultSelectMessage: string;
    _optionValueProperty: string;
    _optionDisplayProperty: string;
    _selectedList: Array<any>;
    ngOnInit(): void;
    defaultSelectMessage: string;
    multiselect: boolean;
    optionValueProperty: string;
    optionDisplayProperty: string;
    options: Array<any>;
    isSelected(optItem: any): boolean;
    getValueByProperty(object: any, property: string): any;
    onChange($event: any): void;
    readonly selectedList: any[];
}
