import { Component, Input, OnInit } from "@angular/core";
import { BaseLayout } from "./base";
import { FormConfig } from "../configs/configs";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'df-col-layout',
  templateUrl: './src/layouts/dynamic-column-layout.component.html'
})
export class DynamicColumnLayoutComponent implements OnInit {
  @Input('layout') layout:BaseLayout;
  @Input('formConfig') formConfig:FormConfig;
  @Input('dynaForm') dynaForm:FormGroup;
  @Input('dataObject') dataObject:BaseLayout;
  enableLayout:boolean = false;
  columNumber:number = 0;
  ngOnInit() {
    if(!this.layout.formConfig) {
      this.layout.formConfig = this.formConfig;
    }
    this.columNumber = Math.trunc(12/this.layout.items.length);
    this.enableLayout = true;

  }
}