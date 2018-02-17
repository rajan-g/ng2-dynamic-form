import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }          from '@angular/forms';
import { DynaFormComponent } from './controls-components/dynamic-form-component';
import { PropertyHandler } from './control-meta/PropertyHandler';
import { TextControl } from './controls-components/text-control';
import { NumberControl } from './controls-components/number-control';
import { CheckBoxControl } from './controls-components/checkbox-control';
import { RadioControl } from './controls-components/radio-control';
import { EmailControl } from './controls-components/email-control';
import { SelectControl } from './controls-components/select-control';
import { DynaValidationBlock } from './controls-components/validation-messages-block';

@NgModule({
  imports:      [ CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ DynaFormComponent, TextControl,
                  NumberControl, CheckBoxControl,
                  RadioControl,EmailControl,
                  SelectControl,
                  DynaValidationBlock ],
  exports: [ DynaFormComponent, TextControl,
             NumberControl, CheckBoxControl,
             RadioControl, EmailControl,
             SelectControl,
             DynaValidationBlock ],
  providers:[PropertyHandler]
})
export class DynaFormModule {
  static forRoot(): ModuleWithProviders { return {ngModule: DynaFormModule, providers: [PropertyHandler]}; }
}