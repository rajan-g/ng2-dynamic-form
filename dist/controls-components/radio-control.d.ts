import { OnInit } from '@angular/core';
import { BaseControl } from '../control-meta/base';
export declare class RadioControl extends BaseControl implements OnInit {
    controlMeta: RadioControl;
    util: any;
    dynaForm: any;
    dataObject: Object;
    utilInfos: Object;
    self: any;
    _options: Array<any>;
    ngOnInit(): void;
    options: Array<any>;
}
