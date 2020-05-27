"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(req, res) {
    var user = CreateUser_1.default({
        email: 'caiovmborba@gmail.com',
        password: '123',
        techs: [
            'NodeJS',
            'ReactJS',
            'React Native',
            { title: 'JavaScript', experience: 100 },
        ],
    });
    return res.json({ message: 'Hello World!' });
}
exports.helloWorld = helloWorld;
