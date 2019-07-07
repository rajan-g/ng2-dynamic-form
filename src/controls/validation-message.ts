import {Component, Input, AfterViewInit}from '@angular/core';
@Component ({
    selector: 'df-validation-block',
    templateUrl: './src/controls/validation-message.html'
})
export class DynaValidationBlock implements AfterViewInit{
    @Input('self') self:any;
    @Input('dynaForm') dynaForm:any;
    enable = false;
    ngAfterViewInit() {
        setTimeout(()=> {
        this.enable = true;
    }, 1000)
    }
}