"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map