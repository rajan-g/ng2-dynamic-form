"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TrilDownBase {
    processEnable() {
        let final = true;
        if (this._enableBy && this.enableBy.length) {
            for (let i = 0; i < this.enableBy.length; i++) {
                let item = this.enableBy[i];
                if (item && item.call && this.formGroup && this.formGroup.controls) {
                    let result = item(this.formGroup.controls);
                    if (!result) {
                        final = false;
                    }
                }
            }
        }
        return final;
    }
    processReadOnly() {
        let final = false;
        if (this._readOnlyBy && this._readOnlyBy.length) {
            for (let i = 0; i < this.readOnlyBy.length; i++) {
                let item = this.readOnlyBy[i];
                if (item && item.call && this.formGroup && this.formGroup.controls) {
                    let result = item(this.formGroup.controls);
                    if (result) {
                        final = true;
                    }
                }
            }
        }
        return final;
    }
    /**
     * Getter enableBy
     * @return {Array<any>}
     */
    get enableBy() {
        return this._enableBy;
    }
    /**
     * Getter readOnlyBy
     * @return {Array<any>}
     */
    get readOnlyBy() {
        return this._readOnlyBy;
    }
    /**
     * Getter formConfig
     * @return {FormConfig}
     */
    get formConfig() {
        return this._formConfig;
    }
    /**
     * Getter formGroup
     * @return {FormGroup}
     */
    get formGroup() {
        return this._formGroup;
    }
    /**
     * Setter enableBy
     * @param {Array<any>} value
     */
    set enableBy(value) {
        this._enableBy = value;
    }
    /**
     * Setter readOnlyBy
     * @param {Array<any>} value
     */
    set readOnlyBy(value) {
        this._readOnlyBy = value;
    }
    /**
     * Setter formConfig
     * @param {FormConfig} value
     */
    set formConfig(value) {
        this._formConfig = value;
    }
    /**
     * Setter formGroup
     * @param {FormGroup} value
     */
    set formGroup(value) {
        this._formGroup = value;
    }
}
exports.TrilDownBase = TrilDownBase;
//# sourceMappingURL=trildown.js.map