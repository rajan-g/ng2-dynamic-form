"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("../configs/configs");
class BaseForm {
    constructor() {
        this._fileds = [];
        this._formConfig = new configs_1.FormConfig();
    }
    /**
     * Getter name
     * @return {string}
     */
    get name() {
        return this._name;
    }
    /**
     * Getter fileds
     * @return {Array<BaseControl> }
     */
    get fileds() {
        return this._fileds;
    }
    /**
     * Getter formConfig
     * @return {FormConfig}
     */
    get formConfig() {
        return this._formConfig;
    }
    /**
     * Getter layout
     * @return {BaseLayout}
     */
    get layout() {
        return this._layout;
    }
    /**
     * Setter name
     * @param {string} value
     */
    set name(value) {
        this._name = value;
    }
    /**
     * Setter fileds
     * @param {Array<BaseControl> } value
     */
    set fileds(value) {
        this._fileds = value;
    }
    /**
     * Setter formConfig
     * @param {FormConfig} value
     */
    set formConfig(value) {
        this._formConfig = value;
    }
    /**
     * Setter layout
     * @param {BaseLayout} value
     */
    set layout(value) {
        this._layout = value;
    }
    /**
     * Getter dataObject
     * @return {any}
     */
    get dataObject() {
        return this._dataObject;
    }
    /**
     * Setter dataObject
     * @param {any} value
     */
    set dataObject(value) {
        this._dataObject = value;
    }
    /**
     * Getter callBack
     * @return {Function}
     */
    get callBack() {
        return this._callBack;
    }
    /**
     * Setter callBack
     * @param {Function} value
     */
    set callBack(value) {
        this._callBack = value;
    }
    /**
     * Getter controls
     * @return {any}
     */
    get controls() {
        return this._controls;
    }
    /**
     * Setter controls
     * @param {any} value
     */
    set controls(value) {
        this._controls = value;
    }
}
exports.BaseForm = BaseForm;
//# sourceMappingURL=base.js.map