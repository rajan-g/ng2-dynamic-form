"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nextandprevious_1 = require("./nextandprevious");
class BaseLayout extends nextandprevious_1.NextandPrevious {
    constructor(obj) {
        super();
        this._type = LAYOUTS.default;
        this._fileds = [];
        this._items = [];
        this._enable = true;
        this._readOnly = false;
        for (let key in obj) {
            this[key] = obj[key];
        }
    }
    /**
     * Getter type
     * @return {LAYOUTS }
     */
    get type() {
        return this._type;
    }
    /**
     * Getter fileds
     * @return {Array<BaseControl> }
     */
    get fileds() {
        return this._fileds;
    }
    /**
     * Getter items
     * @return {Array<BaseLayout> }
     */
    get items() {
        return this._items;
    }
    /**
     * Getter layoutConfig
     * @return {LayoutConfig}
     */
    get layoutConfig() {
        return this._layoutConfig;
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
     * @param {LAYOUTS } value
     */
    set type(value) {
        this._type = value;
    }
    /**
     * Setter fileds
     * @param {Array<BaseControl> } value
     */
    set fileds(value) {
        this._fileds = value;
    }
    /**
     * Setter items
     * @param {Array<BaseLayout> } value
     */
    set items(value) {
        this._items = value;
    }
    /**
     * Setter layoutConfig
     * @param {LayoutConfig} value
     */
    set layoutConfig(value) {
        this._layoutConfig = value;
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
     * Getter id
     * @return {String}
     */
    get id() {
        if (!this._id) {
            this.id = (Math.floor((Math.random() * 10) + 1) + '').split('.')[1];
        }
        return this._id;
    }
    /**
     * Setter id
     * @param {String} value
     */
    set id(value) {
        this._id = value;
    }
    /**
     * Getter enable
     * @return {boolean}
     */
    get enable() {
        if (this.enableBy && this.enableBy.length) {
            return this.processEnable();
        }
        return this._enable;
    }
    /**
     * Getter readOnly
     * @return {boolean}
     */
    get readOnly() {
        let result = this._readOnly;
        if (this.readOnlyBy && this.readOnlyBy.length) {
            result = this.processReadOnly();
        }
        this.fileds.forEach((filed) => {
            filed.readOnly = result;
        });
        return result;
    }
    /**
     * Setter enable
     * @param {boolean} value
     */
    set enable(value) {
        this._enable = value;
    }
    /**
     * Setter readOnly
     * @param {boolean} value
     */
    set readOnly(value) {
        this.fileds.forEach((filed) => {
            filed.readOnly = value;
        });
        this._readOnly = value;
    }
}
exports.BaseLayout = BaseLayout;
class LayoutConfig {
    constructor() {
        this._enableNext = false;
        this._hasNextButton = true;
        this._hasBackButton = true;
        this._hasNextButtonPossition = DirectionButton.butttom;
        this._hasBackButtonPossition = DirectionButton.top;
    }
    /**
     * Getter title
     * @return {String}
     */
    get title() {
        return this._title;
    }
    /**
     * Getter enableNext
     * @return {boolean }
     */
    get enableNext() {
        return this._enableNext;
    }
    /**
     * Getter hasNextButton
     * @return {boolean }
     */
    get hasNextButton() {
        return this._hasNextButton;
    }
    /**
     * Getter hasBackButton
     * @return {boolean }
     */
    get hasBackButton() {
        return this._hasBackButton;
    }
    /**
     * Getter hasNextButtonPossition
     * @return {DirectionButton }
     */
    get hasNextButtonPossition() {
        return this._hasNextButtonPossition;
    }
    /**
     * Getter hasBackButtonPossition
     * @return {DirectionButton }
     */
    get hasBackButtonPossition() {
        return this._hasBackButtonPossition;
    }
    /**
     * Getter stepHederClasses
     * @return {String}
     */
    get stepHederClasses() {
        return this._stepHederClasses;
    }
    /**
     * Getter stepBodyClasses
     * @return {String}
     */
    get stepBodyClasses() {
        return this._stepBodyClasses;
    }
    /**
     * Setter title
     * @param {String} value
     */
    set title(value) {
        this._title = value;
    }
    /**
     * Setter enableNext
     * @param {boolean } value
     */
    set enableNext(value) {
        this._enableNext = value;
    }
    /**
     * Setter hasNextButton
     * @param {boolean } value
     */
    set hasNextButton(value) {
        this._hasNextButton = value;
    }
    /**
     * Setter hasBackButton
     * @param {boolean } value
     */
    set hasBackButton(value) {
        this._hasBackButton = value;
    }
    /**
     * Setter hasNextButtonPossition
     * @param {DirectionButton } value
     */
    set hasNextButtonPossition(value) {
        this._hasNextButtonPossition = value;
    }
    /**
     * Setter hasBackButtonPossition
     * @param {DirectionButton } value
     */
    set hasBackButtonPossition(value) {
        this._hasBackButtonPossition = value;
    }
    /**
     * Setter stepHederClasses
     * @param {String} value
     */
    set stepHederClasses(value) {
        this._stepHederClasses = value;
    }
    /**
     * Setter stepBodyClasses
     * @param {String} value
     */
    set stepBodyClasses(value) {
        this._stepBodyClasses = value;
    }
}
exports.LayoutConfig = LayoutConfig;
var LAYOUTS;
(function (LAYOUTS) {
    LAYOUTS["default"] = "default";
    LAYOUTS["column"] = "column";
    LAYOUTS["pannel"] = "pannel";
    LAYOUTS["accordion"] = "accordion";
    LAYOUTS["tab"] = "tab";
    LAYOUTS["steps"] = "steps";
})(LAYOUTS || (LAYOUTS = {}));
var DirectionButton;
(function (DirectionButton) {
    DirectionButton["top"] = "top";
    DirectionButton["butttom"] = "butttom";
    DirectionButton["left"] = "left";
    DirectionButton["right"] = "right";
})(DirectionButton || (DirectionButton = {}));
//# sourceMappingURL=base.js.map