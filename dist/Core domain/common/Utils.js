"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    static generateUniqueId() {
        const id = () => Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        return id().repeat(8).toLocaleLowerCase();
    }
}
exports.Utils = Utils;
