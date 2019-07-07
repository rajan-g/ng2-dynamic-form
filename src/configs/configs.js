"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FormConfig {
    constructor() {
        this._type = "vertical";
    }
    /**
     * Getter type
     * @return {String}
     */
    get type() {
        return this._type;
    }
    /**
     * Getter labelConfig
     * @return {LabelConfig}
     */
    get labelConfig() {
        return this._labelConfig;
    }
    /**
     * Getter validationConfig
     * @return {validationConfig}
     */
    get validationConfig() {
        return this._validationConfig;
    }
    /**
     * Setter type
     * @param {String} value
     */
    set type(value) {
        this._type = value;
    }
    /**
     * Setter labelConfig
     * @param {LabelConfig} value
     */
    set labelConfig(value) {
        this._labelConfig = value;
    }
    /**
     * Setter validationConfig
     * @param {validationConfig} value
     */
    set validationConfig(value) {
        this._validationConfig = value;
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
    /**
     * Getter getResult
     * @return {Function}
     */
    get getResult() {
        return this._getResult;
    }
    /**
     * Setter getResult
     * @param {Function} value
     */
    set getResult(value) {
        this._getResult = value;
    }
}
exports.FormConfig = FormConfig;
class LabelConfig {
    constructor() {
        this._position = "left"; // label can be left, immediate left, center,
        this._helpTextPossition = "right"; //can be left or right
        this._requiredIcon = "*"; // it can be a html or plain text
        this._requiredIconPossition = "left"; //ca
    }
    /**
     * Getter position
     * @return {String }
     */
    get position() {
        return this._position;
    }
    /**
     * Getter classes
     * @return {String}
     */
    get classes() {
        return this._classes;
    }
    /**
     * Getter helpTextIcon
     * @return {String}
     */
    get helpTextIcon() {
        return this._helpTextIcon;
    }
    /**
     * Getter helpTextPossition
     * @return {String }
     */
    get helpTextPossition() {
        return this._helpTextPossition;
    }
    /**
     * Getter requiredIcon
     * @return {String }
     */
    get requiredIcon() {
        return this._requiredIcon;
    }
    /**
     * Getter requiredIconPossition
     * @return {String }
     */
    get requiredIconPossition() {
        return this._requiredIconPossition;
    }
    /**
     * Setter position
     * @param {String } value
     */
    set position(value) {
        this._position = value;
    }
    /**
     * Setter classes
     * @param {String} value
     */
    set classes(value) {
        this._classes = value;
    }
    /**
     * Setter helpTextIcon
     * @param {String} value
     */
    set helpTextIcon(value) {
        this._helpTextIcon = value;
    }
    /**
     * Setter helpTextPossition
     * @param {String } value
     */
    set helpTextPossition(value) {
        this._helpTextPossition = value;
    }
    /**
     * Setter requiredIcon
     * @param {String } value
     */
    set requiredIcon(value) {
        this._requiredIcon = value;
    }
    /**
     * Setter requiredIconPossition
     * @param {String } value
     */
    set requiredIconPossition(value) {
        this._requiredIconPossition = value;
    }
}
exports.LabelConfig = LabelConfig;
class ValidationConfig {
    constructor() {
        this._possition = ValidationPosition.right;
        this._validHighLight = false;
        this._invalidHighLight = false;
        this._validationEvent = ValidationEvent.blur;
        this._messageEnableBeforDirty = false;
    }
    /**
     * Getter possition
     * @return {ValidationPosition }
     */
    get possition() {
        return this._possition;
    }
    /**
     * Setter possition
     * @param {ValidationPosition } value
     */
    set possition(value) {
        this._possition = value;
    }
    /**
     * Getter classes
     * @return {String}
     */
    get classes() {
        return this._classes;
    }
    /**
     * Setter classes
     * @param {String} value
     */
    set classes(value) {
        this._classes = value;
    }
    /**
     * Getter validHighLight
     * @return {boolean }
     */
    get validHighLight() {
        return this._validHighLight;
    }
    /**
     * Setter validHighLight
     * @param {boolean } value
     */
    set validHighLight(value) {
        this._validHighLight = value;
    }
    /**
     * Getter invalidHighLight
     * @return {boolean }
     */
    get invalidHighLight() {
        return this._invalidHighLight;
    }
    /**
     * Setter invalidHighLight
     * @param {boolean } value
     */
    set invalidHighLight(value) {
        this._invalidHighLight = value;
    }
    /**
     * Getter validHighLightColor
     * @return {String}
     */
    get validHighLightColor() {
        return this._validHighLightColor;
    }
    /**
     * Setter validHighLightColor
     * @param {String} value
     */
    set validHighLightColor(value) {
        this._validHighLightColor = value;
    }
    /**
     * Getter invalidHighLightColor
     * @return {String}
     */
    get invalidHighLightColor() {
        return this._invalidHighLightColor;
    }
    /**
     * Setter invalidHighLightColor
     * @param {String} value
     */
    set invalidHighLightColor(value) {
        this._invalidHighLightColor = value;
    }
    /**
     * Getter validationEvent
     * @return {ValidationEvent }
     */
    get validationEvent() {
        return this._validationEvent;
    }
    /**
     * Setter validationEvent
     * @param {ValidationEvent } value
     */
    set validationEvent(value) {
        this._validationEvent = value;
    }
    /**
     * Getter messageEnableBeforDirty
     * @return {boolean }
     */
    get messageEnableBeforDirty() {
        return this._messageEnableBeforDirty;
    }
    /**
     * Setter messageEnableBeforDirty
     * @param {boolean } value
     */
    set messageEnableBeforDirty(value) {
        this._messageEnableBeforDirty = value;
    }
}
exports.ValidationConfig = ValidationConfig;
var ValidationPosition;
(function (ValidationPosition) {
    ValidationPosition["top"] = "top";
    ValidationPosition["bottom"] = "bottom";
    ValidationPosition["right"] = "right";
})(ValidationPosition = exports.ValidationPosition || (exports.ValidationPosition = {}));
var ValidationEvent;
(function (ValidationEvent) {
    ValidationEvent["keyup"] = "keyup";
    ValidationEvent["keydown"] = "keydown";
    ValidationEvent["focus"] = "focus";
    ValidationEvent["blur"] = "blur";
})(ValidationEvent = exports.ValidationEvent || (exports.ValidationEvent = {}));
//# sourceMappingURL=configs.js.map