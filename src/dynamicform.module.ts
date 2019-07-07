import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }          from '@angular/forms';


import { DynamicDefaultLayoutComponent } from './layouts/dynamic-default-layout.component';
import { DynamicColumnLayoutComponent } from './layouts/dynamic-column-layout.component';
import { DynamicTabLayoutComponent } from './layouts/dynamic-tab-layout.component';
import { DynaValidationBlock } from './controls/validation-message';


import { DynamicForm } from './forms/dynamic-form.component';
import { BootstrapVertical } from './forms/bootstrap-vertical-form.component';
import { BootstrapDefault } from './forms/bootstrap-default-form.component';

import { PropertyHandler } from './control-meta/PropertyHandler';


// import { TextControl } from './controls-components/text-control';
// import { NumberControl } from './controls-components/number-control';
// import { CheckBoxControl } from './controls-components/checkbox-control';
// import { RadioControl } from './controls-components/radio-control';
// import { EmailControl } from './controls-components/email-control';
// import { SelectControl } from './controls-components/select-control';
// import { DynaValidationBlock } from './controls-components/validation-messages-block';

@NgModule({
  imports:      [ CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ DynamicForm, BootstrapVertical,BootstrapDefault,
    DynamicDefaultLayoutComponent,DynamicColumnLayoutComponent, DynamicTabLayoutComponent,
    DynaValidationBlock
                  ],
  exports: [ DynamicForm, BootstrapVertical, BootstrapDefault,
    DynamicDefaultLayoutComponent, DynamicColumnLayoutComponent, DynamicTabLayoutComponent,
    DynaValidationBlock],
  providers:[PropertyHandler]
})
export class DynamicFormModule {
  static forRoot(): ModuleWithProviders { return {ngModule: DynamicFormModule, providers: [PropertyHandler]}; }
}