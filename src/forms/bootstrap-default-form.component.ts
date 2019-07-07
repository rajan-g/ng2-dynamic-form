import { BaseForm } from "./base";
import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormConfig } from "../configs/configs";

@Component({
  selector: 'df-bootstrap-form-default',
  templateUrl: './src/forms/bootstrap-dafault-form.component.html'
})
export class BootstrapDefault extends BaseForm {
  @Input('controls') controls:Array<any>;
  @Input('dataObject') dataObject:any;
  @Input('dynaForm') dynaForm:FormGroup;
  @Input('formConfig') formConfig:FormConfig;
}