System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ControlTypes;
    return {
        setters:[],
        execute: function() {
            ControlTypes = (function () {
                function ControlTypes() {
                }
                ControlTypes.TEXTBOX = "textbox";
                ControlTypes.EMAIL = "email";
                ControlTypes.NUMBER = "number";
                ControlTypes.CHECKBOX = "checkbox";
                ControlTypes.DATE = "date";
                ControlTypes.CHECKBOX_GROUP = "checkbox";
                ControlTypes.RADIO = "radio";
                ControlTypes.SELECT_DROPDOWN = "select";
                ControlTypes.AUTO_COMPLETE = "autocomplete";
                return ControlTypes;
            }());
            exports_1("ControlTypes", ControlTypes);
        }
    }
});
//# sourceMappingURL=control-types.js.map