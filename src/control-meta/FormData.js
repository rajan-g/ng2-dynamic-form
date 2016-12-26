System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FromData;
    return {
        setters:[],
        execute: function() {
            FromData = (function () {
                function FromData(formName, controls, dataObject, cb) {
                    this.formName = formName;
                    this.controls = controls;
                    this.dataObject = dataObject;
                    this.cb = cb;
                }
                return FromData;
            }());
            exports_1("FromData", FromData);
        }
    }
});
//# sourceMappingURL=FormData.js.map