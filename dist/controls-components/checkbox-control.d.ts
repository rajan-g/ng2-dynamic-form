import { OnInit } from '@angular/core';
import { BaseControl } from '../control-meta/base';
export declare class CheckBoxControl extends BaseControl implements OnInit {
    controlMeta: CheckBoxControl;
    util: any;
    dynaForm: any;
    dataObject: Object;
    utilInfos: Object;
    self: any;
    _checkedValue: any;
    _unCheckedValue: any;
    ngOnInit(): void;
    checkedValue: any;
    unCheckedValue: any;
}
