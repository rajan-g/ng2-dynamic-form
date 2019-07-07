"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trildown_1 = require("./trildown");
class NextandPrevious extends trildown_1.TrilDownBase {
    constructor() {
        super(...arguments);
        this._hasNextButton = true;
        this._hasPreviousButton = true;
        this._nextButtonText = 'Next';
        this._previousButtonText = 'Back';
    }
    next(dynaForm, item, index) {
        if (this.isValid(dynaForm, item)) {
            this.buttonClick(index);
            if (this.hasOwnProperty('_currentActiveTab')) {
                let current = -1;
                let items = this['layout']['items'];
                for (let i = index + 1; i < items.length; i++) {
                    if (items[i].enable) {
                        current = i;
                        break;
                    }
                }
                if (current != -1) {
                    this['currentActiveTab'] = current;
                }
            }
        }
    }
    activatePrevious(index) {
        if (this.hasOwnProperty('_currentActiveTab')) {
            let current = -1;
            let items = this['layout']['items'];
            for (let i = index - 1; i >= 0; i--) {
                if (items.enable) {
                    current = i;
                    break;
                }
            }
            if (current != -1) {
                this['currentActiveTab'] = current;
            }
        }
    }
    buttonClick(index) {
        if (this['layout']['items'][index].onSubmit) {
            this['layout']['items'][index].onSubmit(this['layout'].formGroup);
        }
        if (this['layout'].onSubmit) {
            this['layout'].onSubmit(this['layout'].formGroup);
        }
    }
    isValid(dynaForm, item) {
        let isValid = true;
        item.fileds.forEach(field => {
            if (!dynaForm.controls[field.valueProperty].valid) {
                this['formConfig'].controls[field.valueProperty].enableError();
                isValid = false;
            }
        });
        return isValid;
    }
    /**
     * Getter hasNextButton
     * @return {boolean }
     */
    get hasNextButton() {
        return this._hasNextButton;
    }
    /**
     * Getter hasPreviousButton
     * @return {boolean }
     */
    get hasPreviousButton() {
        return this._hasPreviousButton;
    }
    /**
     * Getter nextButtonText
     * @return {String }
     */
    get nextButtonText() {
        return this._nextButtonText;
    }
    /**
     * Getter previousButtonText
     * @return {String }
     */
    get previousButtonText() {
        return this._previousButtonText;
    }
    /**
     * Setter hasNextButton
     * @param {boolean } value
     */
    set hasNextButton(value) {
        this._hasNextButton = value;
    }
    /**
     * Setter hasPreviousButton
     * @param {boolean } value
     */
    set hasPreviousButton(value) {
        this._hasPreviousButton = value;
    }
    /**
     * Setter nextButtonText
     * @param {String } value
     */
    set nextButtonText(value) {
        this._nextButtonText = value;
    }
    /**
     * Setter previousButtonText
     * @param {String } value
     */
    set previousButtonText(value) {
        this._previousButtonText = value;
    }
}
exports.NextandPrevious = NextandPrevious;
//# sourceMappingURL=nextandprevious.js.map