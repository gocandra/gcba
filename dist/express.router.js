"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var home_controller_1 = __importDefault(require("./controllers/home.controller"));
var ExpressRouter = /** @class */ (function () {
    function ExpressRouter(app) {
        this.router = express_1.Router();
        this.app = app;
    }
    ExpressRouter.prototype.init = function () {
        this.router.get('/', home_controller_1.default.getDefault);
        this.app.use('/', this.router);
    };
    return ExpressRouter;
}());
exports.default = ExpressRouter;
