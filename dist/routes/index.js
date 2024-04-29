"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movieRouter_1 = __importDefault(require("./movieRouter"));
// movieRouter를 가져옵니다.
const apiRouter = (0, express_1.Router)();
// Define routes for the apiRouter
apiRouter.get('/', (_req, res) => {
    res.send('Welcome to the API');
});
// movies 경로에 대한 router를 설정합니다.
apiRouter.use('/movies', movieRouter_1.default);
exports.default = apiRouter;
//# sourceMappingURL=index.js.map