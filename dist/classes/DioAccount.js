"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DioAccount = void 0;
var readline = require("node:readline/promises");
var node_process_1 = require("node:process");
var DioAccount = /** @class */ (function () {
    function DioAccount(accountNumber, name) {
        var _this = this;
        this.balance = 0;
        this.status = 'Ativo';
        this.setName = function (name) {
            _this.name = name;
            console.log("O nome do cliente ".concat(_this.name, " foi alterado para ").concat(name));
        };
        this.getName = function () {
            return _this.name;
        };
        this.deposit = function (value) { return __awaiter(_this, void 0, void 0, function () {
            var rl, depositValue, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.validateStatus() === 'Inativo') {
                            console.log('Conta inativa. Não é possível depositar');
                            return [2 /*return*/];
                        }
                        rl = readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
                        _a = Number;
                        return [4 /*yield*/, rl.question("Digite o valor do deposito: ")];
                    case 1:
                        depositValue = _a.apply(void 0, [_b.sent()]);
                        this.balance += depositValue;
                        console.log("Dep\u00F3sito de ".concat(depositValue, " realizado com sucesso"));
                        rl.close();
                        return [2 /*return*/];
                }
            });
        }); };
        this.withdraw = function (value) {
            if (_this.validateStatus() === 'Inativo') {
                console.log('Conta inativa. Não é possível sacar');
                return;
            }
            if (value > _this.balance) {
                console.log('Saldo insuficiente. Não é possível sacar');
                return;
            }
            _this.balance -= value;
            console.log("Saque de ".concat(value, " realizado com sucesso"));
        };
        this.getBalance = function () {
            return _this.balance;
        };
        this.validateStatus = function () {
            if (_this.status === 'Ativo') {
                return 'Ativo';
            }
            throw new Error('Conta inativa ou inválida');
        };
        this.showActualBalance = function () {
            console.log("Saldo atual: ".concat(_this.balance));
        };
        this.accountNumber = accountNumber;
        this.name = name;
    }
    return DioAccount;
}());
exports.DioAccount = DioAccount;
;
