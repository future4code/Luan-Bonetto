"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorPrinter {
    printError(messageError, date) {
        throw new Error(`${messageError} - ${date}`);
    }
}
exports.ErrorPrinter = ErrorPrinter;
//# sourceMappingURL=errorPrinter.js.map