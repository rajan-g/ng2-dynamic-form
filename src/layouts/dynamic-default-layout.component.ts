import { Component, Input, OnInit } from "@angular/core";
import { BaseLayout } from "./base";
import { FormConfig } from "../configs/configs";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'df-default-layout',
  templateUrl: './src/layouts/dynamic-default-layout.component.html'
})
export class DynamicDefaultLayoutComponent implements OnInit{
  @Input('layout') layout:BaseLayout;
  @Input('formConfig') formConfig:FormConfig;
  @Input('dynaForm') dynaForm:FormGroup;
  @Input('dataObject') dataObject:BaseLayout;
  enableLayout: boolean = false;
  ngOnInit() {
    if(!this.layout.formConfig) {
      this.layout.formConfig = this.formConfig;
    }
    this.enableLayout = true;
  }
}