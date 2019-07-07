"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const configs_1 = require("../configs/configs");
let BootstrapDefault = class BootstrapDefault extends base_1.BaseForm {
};
__decorate([
    core_1.Input('controls'),
    __metadata("design:type", Array)
], BootstrapDefault.prototype, "controls", void 0);
__decorate([
    core_1.Input('dataObject'),
    __metadata("design:type", Object)
], BootstrapDefault.prototype, "dataObject", void 0);
__decorate([
    core_1.Input('dynaForm'),
    __metadata("design:type", forms_1.FormGroup)
], BootstrapDefault.prototype, "dynaForm", void 0);
__decorate([
    core_1.Input('formConfig'),
    __metadata("design:type", configs_1.FormConfig)
], BootstrapDefault.prototype, "formConfig", void 0);
BootstrapDefault = __decorate([
    core_1.Component({
        selector: 'df-bootstrap-form-default',
        templateUrl: './src/forms/bootstrap-dafault-form.component.html'
    })
], BootstrapDefault);
exports.BootstrapDefault = BootstrapDefault;
//# sourceMappingURL=bootstrap-default-form.component.js.map