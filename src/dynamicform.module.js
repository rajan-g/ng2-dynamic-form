"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const dynamic_default_layout_component_1 = require("./layouts/dynamic-default-layout.component");
const dynamic_column_layout_component_1 = require("./layouts/dynamic-column-layout.component");
const dynamic_tab_layout_component_1 = require("./layouts/dynamic-tab-layout.component");
const validation_message_1 = require("./controls/validation-message");
const dynamic_form_component_1 = require("./forms/dynamic-form.component");
const bootstrap_vertical_form_component_1 = require("./forms/bootstrap-vertical-form.component");
const bootstrap_default_form_component_1 = require("./forms/bootstrap-default-form.component");
const PropertyHandler_1 = require("./control-meta/PropertyHandler");
// import { TextControl } from './controls-components/text-control';
// import { NumberControl } from './controls-components/number-control';
// import { CheckBoxControl } from './controls-components/checkbox-control';
// import { RadioControl } from './controls-components/radio-control';
// import { EmailControl } from './controls-components/email-control';
// import { SelectControl } from './controls-components/select-control';
// import { DynaValidationBlock } from './controls-components/validation-messages-block';
let DynamicFormModule = DynamicFormModule_1 = class DynamicFormModule {
    static forRoot() { return { ngModule: DynamicFormModule_1, providers: [PropertyHandler_1.PropertyHandler] }; }
};
DynamicFormModule = DynamicFormModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [dynamic_form_component_1.DynamicForm, bootstrap_vertical_form_component_1.BootstrapVertical, bootstrap_default_form_component_1.BootstrapDefault,
            dynamic_default_layout_component_1.DynamicDefaultLayoutComponent, dynamic_column_layout_component_1.DynamicColumnLayoutComponent, dynamic_tab_layout_component_1.DynamicTabLayoutComponent,
            validation_message_1.DynaValidationBlock
        ],
        exports: [dynamic_form_component_1.DynamicForm, bootstrap_vertical_form_component_1.BootstrapVertical, bootstrap_default_form_component_1.BootstrapDefault,
            dynamic_default_layout_component_1.DynamicDefaultLayoutComponent, dynamic_column_layout_component_1.DynamicColumnLayoutComponent, dynamic_tab_layout_component_1.DynamicTabLayoutComponent,
            validation_message_1.DynaValidationBlock],
        providers: [PropertyHandler_1.PropertyHandler]
    })
], DynamicFormModule);
exports.DynamicFormModule = DynamicFormModule;
var DynamicFormModule_1;
//# sourceMappingURL=dynamicform.module.js.map