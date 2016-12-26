System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var DynaValidationBlock;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DynaValidationBlock = (function () {
                function DynaValidationBlock() {
                }
                __decorate([
                    core_1.Input('self'), 
                    __metadata('design:type', Object)
                ], DynaValidationBlock.prototype, "self", void 0);
                DynaValidationBlock = __decorate([
                    core_1.Component({
                        selector: 'dyna-validation-block',
                        template: "\n    <div *ngIf=\"self\"> \n    <span class=\"text-danger\" *ngIf=\"self.isRequired && self.dynaForm.controls[self.valueProperty]._errors && self.dynaForm.controls[self.valueProperty]._errors.required && self.isSubmited\">{{self.requiredMessage}}</span>\n    <span class=\"text-danger\" *ngIf=\"self.isRequired && self.controlType === 'radio' && !self.dynaForm.controls[self.valueProperty].value && self.isSubmited\">{{self.requiredMessage}}</span>\n    <span class=\"text-danger\" *ngIf=\"self.dynaForm.controls[self.valueProperty]._errors && !self.dynaForm.controls[self.valueProperty]._errors.required && self.dynaForm.controls[self.valueProperty]._errors.minlength && self.isSubmited\">{{self.minLengthMessage}}. </span>\n    <span class=\"text-danger\" *ngIf=\"self.dynaForm.controls[self.valueProperty]._errors && !self.dynaForm.controls[self.valueProperty]._errors.required && self.dynaForm.controls[self.valueProperty]._errors.maxlength && self.isSubmited\">{{self.maxLengthMessage}}. </span>\n    <span class=\"text-danger\" *ngIf=\"self.dynaForm.controls[self.valueProperty]._errors && !self.dynaForm.controls[self.valueProperty]._errors.required && self.dynaForm.controls[self.valueProperty]._errors.pattern && self.isSubmited\">{{self.patternMessage}}. </span>\n    <span class=\"text-danger\" *ngIf=\"self.dynaForm.controls[self.valueProperty]._errors && !self.dynaForm.controls[self.valueProperty]._errors.required && self.dynaForm.controls[self.valueProperty]._errors.min && self.isSubmited\">{{self.minMessage}}. </span>\n    <span class=\"text-danger\" *ngIf=\"self.dynaForm.controls[self.valueProperty]._errors && !self.dynaForm.controls[self.valueProperty]._errors.required && self.dynaForm.controls[self.valueProperty]._errors.max && self.isSubmited\">{{self.maxMessage}}. </span>\n    <span class=\"text-danger\" *ngFor=\"let cust of self.customvalidators\">\n    <span class=\"text-danger\" *ngIf=\"self.dynaForm.controls[self.valueProperty]._errors && !self.dynaForm.controls[self.valueProperty]._errors.required && self.dynaForm.controls[self.valueProperty]._errors['customvali_'+cust.validationKey] && self.isSubmited\">{{cust.validationMessage || 'custom error message missing'}}. </span>\n    </span>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], DynaValidationBlock);
                return DynaValidationBlock;
            }());
            exports_1("DynaValidationBlock", DynaValidationBlock);
        }
    }
});
//# sourceMappingURL=validation-messages-block.js.map