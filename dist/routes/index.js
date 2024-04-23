"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiRouter = (0, express_1.Router)();
// Define routes for the apiRouter
apiRouter.get('/', (_req, res) => {
    res.send('Welcome to the API');
});
apiRouter.get('/data', (_req, res) => {
    res.json({ message: "Here's some data" });
});
exports.default = apiRouter;
//# sourceMappingURL=index.js.map