"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HomeController = /** @class */ (function () {
    function HomeController() {
    }
    HomeController.getDefault = function (req, res, next) {
        res.send('Hello World!');
    };
    return HomeController;
}());
exports.default = HomeController;
