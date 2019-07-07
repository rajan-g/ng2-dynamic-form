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
const tab_process_base_1 = require("./tab-process-base");
const forms_1 = require("@angular/forms");
let DynamicTabLayoutComponent = class DynamicTabLayoutComponent extends tab_process_base_1.TabProcessBase {
    constructor() {
        super(...arguments);
        this.enableLayout = false;
        this.columNumber = 0;
    }
    ngOnInit() {
        if (!this.layout.formConfig) {
            this.layout.formConfig = this.formConfig;
        }
        this.columNumber = Math.trunc(12 / this.layout.items.length);
        for (let i = 0; i < this.layout.items.length; i++) {
            this.layout.items[i] = new tab_process_base_1.TabProcessBase(this.layout.items[i]);
        }
        this.enableLayout = true;
    }
};
__decorate([
    core_1.Input('layout'),
    __metadata("design:type", base_1.BaseLayout)
], DynamicTabLayoutComponent.prototype, "layout", void 0);
__decorate([
    core_1.Input('formConfig'),
    __metadata("design:type", configs_1.FormConfig)
], DynamicTabLayoutComponent.prototype, "formConfig", void 0);
__decorate([
    core_1.Input('dynaForm'),
    __metadata("design:type", forms_1.FormGroup)
], DynamicTabLayoutComponent.prototype, "dynaForm", void 0);
__decorate([
    core_1.Input('dataObject'),
    __metadata("design:type", base_1.BaseLayout)
], DynamicTabLayoutComponent.prototype, "dataObject", void 0);
DynamicTabLayoutComponent = __decorate([
    core_1.Component({
        selector: 'df-tab-layout',
        templateUrl: './src/layouts/dynamic-tab-layout.component.html'
    })
], DynamicTabLayoutComponent);
exports.DynamicTabLayoutComponent = DynamicTabLayoutComponent;
//# sourceMappingURL=dynamic-tab-layout.component.js.map