"use strict";
exports.__esModule = true;
var blackjack_1 = require("./blackjack");
var slots_1 = require("./slots");
var casino_1 = require("./casino");
var blackjack1 = new blackjack_1.Blackjack(52, 1000, "Black", 3, 100);
var slots1 = new slots_1.Slots("Slots Fuit", 1, 500, true, 1000);
var casino1 = new casino_1.Casino("Casino Las Flores", slots1, blackjack1);
console.log(casino1);
