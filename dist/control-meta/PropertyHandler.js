"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PropertyHandler {
    getValueByProperty(object, property) {
        try {
            let notations = property.split('.');
            let current = JSON.parse(JSON.stringify(object));
            if (notations && notations[0] == '') {
                return current;
            }
            for (let key of notations) {
                if (!current[key]) {
                    return null;
                }
                current = current[key];
            }
            return current;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    setValueByProperty(object, property, value) {
        try {
            let notations = property.split('.');
            let current = object;
            if (notations && notations[0] == '') {
                object = value;
                return;
            }
            else if (notations.length == 1) {
                object[property] = value;
                return;
            }
            for (let key of notations) {
                current = current[key];
            }
            current = value;
            return;
        }
        catch (e) {
            console.log(e);
        }
        return;
    }
    buildPropertyWithValue(object, property, value) {
        try {
            let notations = property.split('.');
            let current = object;
            if (notations && notations[0] == '') {
                object = value;
                return object;
            }
            else if (notations.length == 1) {
                object[property] = value;
                return object;
            }
            for (let i = 0; i < notations.length; i++) {
                let key = notations[i];
                if (!current[key] && i < notations.length - 1) {
                    current[key] = {};
                }
                if (current[key] && typeof current[key] === 'object') {
                    current = current[key];
                }
                else {
                    current[key] = value;
                }
            }
            return object;
        }
        catch (e) {
            console.log(e);
        }
        return;
    }
}
exports.PropertyHandler = PropertyHandler;
//# sourceMappingURL=PropertyHandler.js.map