"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const env_config_1 = require("./config/env.config");
const app = (0, express_1.default)();
const port = env_config_1.config.PORT;
// Create the router for API routes
app.use('/api', routes_1.default);
app.get('/', (_req, res) => {
    return res.send('Express Typescript on Vercel');
});
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map