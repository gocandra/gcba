"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HomeController = /** @class */ (function () {
    function HomeController() {
    }
    HomeController.getDefault = function (req, res, next) {
        res.send('ESTO ES UN ENDPOINT DE PRUEBA!');
    };
    return HomeController;
}());
exports.default = HomeController;
