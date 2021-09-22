"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require("mongoose"), Schema = _a.Schema, model = _a.model;
var WilderSchema = new Schema({
    name: { type: String, unique: true },
    city: String,
    skills: [{ title: String, votes: Number }],
});
var WilderModel = model("wilder", WilderSchema);
exports.default = WilderModel;
