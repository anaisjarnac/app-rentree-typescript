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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var wilder_1 = require("./controllers/wilder");
var Wilder_1 = __importDefault(require("./models/Wilder"));
dotenv_1.default.config();
var runServer = function () { return __awaiter(void 0, void 0, void 0, function () {
    var MONGO_URL, app, PORT;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                MONGO_URL = process.env.MONGO_URL;
                if (!MONGO_URL) {
                    throw Error("A MONGO_URL must be provided in environment.");
                }
                return [4 /*yield*/, mongoose_1.default.connect(MONGO_URL, { autoIndex: true })];
            case 1:
                _a.sent();
                // eslint-disable-next-line no-console
                console.log("Connected to database");
                return [4 /*yield*/, Wilder_1.default.init()];
            case 2:
                _a.sent();
                app = (0, express_1.default)();
                app.use(express_1.default.urlencoded({ extended: true }));
                app.use(express_1.default.json());
                app.get("/wilders", wilder_1.getAllWilders);
                app.post("/wilders", wilder_1.createWilder);
                app.put("/wilders/:name", wilder_1.updateWilder);
                app.delete("/wilders/:name", wilder_1.deleteWilder);
                app.use(function (req, res) {
                    res
                        .status(404)
                        .json({ success: false, result: "Ressource does not exist." });
                });
                PORT = 3001;
                app.listen(PORT, function () {
                    // eslint-disable-next-line no-console
                    console.log("Example app listening at http://localhost:" + PORT);
                });
                return [2 /*return*/];
        }
    });
}); };
runServer();
