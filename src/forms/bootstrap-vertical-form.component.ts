import { BaseForm } from "./base";
import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormConfig } from "../configs/configs";

@Component({
  selector: 'df-bootstrap-form-vertical',
  templateUrl: './src/forms/bootstrap-vertical-form.component.html'
})
export class BootstrapVertical extends BaseForm implements OnInit{
  @Input('controls') controls:Array<any>;
  @Input('dataObject') dataObject:any;
  @Input('dynaForm') dynaForm:FormGroup;
  @Input('formConfig') formConfig:FormConfig;
  enable:boolean = false;
  ngOnInit() {
    this.enable = true;
  }
}