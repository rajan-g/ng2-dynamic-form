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
const PropertyHandler_1 = require("../control-meta/PropertyHandler");
const control_types_1 = require("../control-meta/control-types");
const text_control_1 = require("../controls/text-control");
const configs_1 = require("../configs/configs");
const base_2 = require("../layouts/base");
let DynamicForm = class DynamicForm extends base_1.BaseForm {
    constructor(fb, propertyHandler) {
        super();
        this.fb = fb;
        this.propertyHandler = propertyHandler;
        this.enableForm = false;
        this.controls = {};
        this.util = {
            addControl: (name, formControl, isSubmitedCb) => {
                this.dynaForm.addControl(name, formControl);
                this.controls[name] = {
                    enableError: isSubmitedCb
                };
            }
        };
        this.dynaForm = this.fb.group({});
    }
    ngOnInit() {
        if (!this.formData) {
            throw Error("formData missing");
        }
        if (!this.formData.name) {
            throw Error("formName missing");
        }
        if (!this.formData.fileds) {
            throw Error("controls missing");
        }
        if (!this.formData.dataObject) {
            throw Error("dataObject missing");
        }
        //build form controls
        let controls = this.formData.fileds;
        this.formData.formConfig = this.formData.formConfig || new configs_1.FormConfig();
        this.formConfig.controls = this.controls;
        if (controls && controls.length) {
            this.addControls(controls);
        }
        if (this.formData && this.formData.layout) {
            this.iterateLayout(this.formData.layout);
        }
        //  this.formData.formStyle =this.formData.formStyle || FormStyles.BOOTSTRAP_VERTICAL;
        //  this.formData.theme = this.formData.theme || FormStyles.THEME_BOOTSTRAP;
        //  this.utilInfos.formStyle = this.formData.formStyle;
        this.setCustomizedDataObject();
        this.enableForm = true;
    }
    generateId() {
        return Math.random().toString().split('.')[1];
    }
    iterateLayout(layout) {
        if (!layout.id) {
            layout.id = this.generateId();
        }
        if (layout.fileds && layout.fileds.length) {
            this.addControls(layout.fileds);
        }
        layout.formGroup = this.dynaForm;
        if (layout.items && layout.items.length) {
            for (var i = 0; i < layout.items.length; i++) {
                let item = layout.items[i];
                item.formGroup = this.dynaForm;
                item = new base_2.BaseLayout(item);
                if (!item.id) {
                    item.id = this.generateId();
                }
                if (!layout.formConfig) {
                    item.formConfig = this.formData.formConfig;
                }
                if (!item.layoutConfig) {
                    item.layoutConfig = new base_2.LayoutConfig();
                }
                this.iterateLayout(item);
            }
        }
    }
    addControls(controls) {
        for (let i = 0; i < controls.length; i++) {
            let item = controls[i];
            item.formConfig = this.formConfig;
            item.formGroup = this.dynaForm;
            switch (item.controlType) {
                case 'textbox':
                case 'email':
                case 'number':
                    controls[i] = new text_control_1.TextControl(controls[i], this.util, this.formData.dataObject);
                    if (!controls[i].validationConfig) {
                        controls[i].validationConfig = this.formData.formConfig.validationConfig || new configs_1.ValidationConfig();
                    }
                    if (!controls[i].labelConfig) {
                        controls[i].labelConfig = this.formData.formConfig.labelConfig || new configs_1.LabelConfig();
                    }
                    break;
            }
        }
    }
    sendResult() {
        if (!this.dynaForm.valid || !this.isRadiosValid()) {
            for (let key in this.controls) {
                this.controls[key]['enableError']();
            }
            return;
        }
        this.setCheckBoxValue();
        // this.setSelectBoxValues();  //TODO
        this.composeResultData();
        this.formData.callBack(this.originalInputData);
    }
    isRadiosValid() {
        for (let i = 0; i < this.formData.fileds.length; i++) {
            //checkbox unchecked value setup
            let ctl = this.formData.fileds[i];
            if (ctl.controlType === control_types_1.ControlTypes.RADIO) {
                if (!this.dynaForm.controls[ctl.valueProperty].value) {
                    return false;
                }
            }
        }
        return true;
    }
    setCheckBoxValue() {
        for (let i = 0; i < this.formData.fileds.length; i++) {
            //checkbox unchecked value setup
            let ctl = this.formData.fileds[i];
            if (ctl.controlType === control_types_1.ControlTypes.CHECKBOX) {
                if (this.dynaForm.controls[ctl.valueProperty].value) {
                    this.formData.dataObject[ctl.valueProperty] = ctl.checkedValue || true;
                }
                else {
                    this.formData.dataObject[ctl.valueProperty] = ctl.unCheckedValue || false;
                }
            }
        }
    }
    ;
    /* TODO
    
    *setSelectBoxValues() {
        for (let i = 0; i < this.selectCtls.length; i++) {
            let ctl = this.selectCtls['_results'][i];
            if (ctl.multiselect) {
                this.formData.dataObject[ctl.valueProperty] = ctl.selectedList ;
            }else {
                this.formData.dataObject[ctl.valueProperty] =  JSON.parse(ctl.dataObject[ctl.valueProperty]) ;
            }
        }
    }*/
    setCustomizedDataObject() {
        let originalInputData = this.formData.dataObject;
        let controls = this.formData.fileds;
        let customDataObject = {};
        for (let i = 0; i < controls.length; i++) {
            let prop = controls[i]['valueProperty'];
            let value = this.propertyHandler.getValueByProperty(originalInputData, prop);
            customDataObject[prop] = value;
            originalInputData = this.propertyHandler.buildPropertyWithValue(originalInputData, prop, value);
        }
        this.originalInputData = originalInputData;
        this.formData.dataObject = customDataObject;
    }
    composeResultData() {
        let originalInputData = this.originalInputData;
        let controls = this.formData.fileds;
        let customDataObject = this.formData.dataObject;
        ;
        for (let i = 0; i < controls.length; i++) {
            let prop = controls[i]['valueProperty'];
            let value = customDataObject[prop];
            customDataObject[prop] = value;
            originalInputData = this.propertyHandler.buildPropertyWithValue(originalInputData, prop, value);
        }
        this.originalInputData = originalInputData;
    }
};
__decorate([
    core_1.Input('formData'),
    __metadata("design:type", base_1.BaseForm)
], DynamicForm.prototype, "formData", void 0);
DynamicForm = __decorate([
    core_1.Component({
        selector: 'df-bootstrap-form',
        templateUrl: './src/forms/dynamic-form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, PropertyHandler_1.PropertyHandler])
], DynamicForm);
exports.DynamicForm = DynamicForm;
//# sourceMappingURL=dynamic-form.component.js.map