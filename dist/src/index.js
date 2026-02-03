"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PeopleAccount_1 = require("../classes/PeopleAccount");
//import { CompanyAccount } from '../classes/CompanyAccount';
var peopleAccount = new PeopleAccount_1.PeopleAccount(1, 'Gustavo', 1);
peopleAccount.deposit(100);
peopleAccount.withdraw(50);
peopleAccount.showActualBalance();
