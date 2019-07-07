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
const core_1 = require("@angular/core");
const base_1 = require("./base");
const configs_1 = require("../configs/configs");
const forms_1 = require("@angular/forms");
let DynamicDefaultLayoutComponent = class DynamicDefaultLayoutComponent {
    constructor() {
        this.enableLayout = false;
    }
    ngOnInit() {
        if (!this.layout.formConfig) {
            this.layout.formConfig = this.formConfig;
        }
        this.enableLayout = true;
    }
};
__decorate([
    core_1.Input('layout'),
    __metadata("design:type", base_1.BaseLayout)
], DynamicDefaultLayoutComponent.prototype, "layout", void 0);
__decorate([
    core_1.Input('formConfig'),
    __metadata("design:type", configs_1.FormConfig)
], DynamicDefaultLayoutComponent.prototype, "formConfig", void 0);
__decorate([
    core_1.Input('dynaForm'),
    __metadata("design:type", forms_1.FormGroup)
], DynamicDefaultLayoutComponent.prototype, "dynaForm", void 0);
__decorate([
    core_1.Input('dataObject'),
    __metadata("design:type", base_1.BaseLayout)
], DynamicDefaultLayoutComponent.prototype, "dataObject", void 0);
DynamicDefaultLayoutComponent = __decorate([
    core_1.Component({
        selector: 'df-default-layout',
        templateUrl: './src/layouts/dynamic-default-layout.component.html'
    })
], DynamicDefaultLayoutComponent);
exports.DynamicDefaultLayoutComponent = DynamicDefaultLayoutComponent;
//# sourceMappingURL=dynamic-default-layout.component.js.map