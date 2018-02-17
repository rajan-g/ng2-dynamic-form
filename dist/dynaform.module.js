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
const dynamic_form_component_1 = require("./controls-components/dynamic-form-component");
const PropertyHandler_1 = require("./control-meta/PropertyHandler");
const text_control_1 = require("./controls-components/text-control");
const number_control_1 = require("./controls-components/number-control");
const checkbox_control_1 = require("./controls-components/checkbox-control");
const radio_control_1 = require("./controls-components/radio-control");
const email_control_1 = require("./controls-components/email-control");
const select_control_1 = require("./controls-components/select-control");
const validation_messages_block_1 = require("./controls-components/validation-messages-block");
let DynaFormModule = DynaFormModule_1 = class DynaFormModule {
    static forRoot() { return { ngModule: DynaFormModule_1, providers: [PropertyHandler_1.PropertyHandler] }; }
};
DynaFormModule = DynaFormModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [dynamic_form_component_1.DynaFormComponent, text_control_1.TextControl,
            number_control_1.NumberControl, checkbox_control_1.CheckBoxControl,
            radio_control_1.RadioControl, email_control_1.EmailControl,
            select_control_1.SelectControl,
            validation_messages_block_1.DynaValidationBlock],
        exports: [dynamic_form_component_1.DynaFormComponent, text_control_1.TextControl,
            number_control_1.NumberControl, checkbox_control_1.CheckBoxControl,
            radio_control_1.RadioControl, email_control_1.EmailControl,
            select_control_1.SelectControl,
            validation_messages_block_1.DynaValidationBlock],
        providers: [PropertyHandler_1.PropertyHandler]
    })
], DynaFormModule);
exports.DynaFormModule = DynaFormModule;
var DynaFormModule_1;
//# sourceMappingURL=dynaform.module.js.map