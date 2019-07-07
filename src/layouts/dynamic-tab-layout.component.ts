import { Component, Input, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { BaseLayout } from "./base";
import { FormConfig } from "../configs/configs";
import { TabProcessBase } from "./tab-process-base";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'df-tab-layout',
  templateUrl: './src/layouts/dynamic-tab-layout.component.html'
})
export class DynamicTabLayoutComponent extends TabProcessBase   implements OnInit {
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
    for(let i=0; i<this.layout.items.length; i++) {
      this.layout.items[i] = new TabProcessBase(this.layout.items[i]);
    }
    this.enableLayout = true;

  }
}