"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class TabProcessBase extends base_1.BaseLayout {
    constructor(obj) {
        super(obj);
        this._currentActiveTab = 0;
    }
    onTabSelect(index) {
        this.currentActiveTab = index;
    }
    /**
     * Getter currentActiveTab
     * @return {number }
     */
    get currentActiveTab() {
        return this._currentActiveTab;
    }
    /**
      * Setter currentActiveTab
      * @param {number } value
      */
    set currentActiveTab(value) {
        this._currentActiveTab = value;
    }
}
exports.TabProcessBase = TabProcessBase;
//# sourceMappingURL=tab-process-base.js.map