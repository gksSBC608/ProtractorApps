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
var cucumber_1 = require("cucumber");
var protractor_1 = require("protractor");
var chai_1 = __importDefault(require("chai"));
chai_1.default.use(require('chai-smoothie'));
var expect = chai_1.default.expect;
var fetchRandomElementFromArr = function (arr_names) {
    var randomValue = arr_names[Math.floor(Math.random() * arr_names.length)];
    return randomValue;
};
cucumber_1.When('Add buttons are clicked {string} times', function (param) { return __awaiter(void 0, void 0, void 0, function () {
    var el_count, arr_names, i, i_1, str_name, xpath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, protractor_1.element.all(protractor_1.by.css("div.card-body h4.card-title a")).count()];
            case 1:
                el_count = (_a.sent());
                arr_names = new Array(el_count);
                i = 0;
                return [4 /*yield*/, protractor_1.element.all(protractor_1.by.css("div.card-body h4.card-title a")).map(function (elm) {
                        return elm.getText();
                    }).then(function (texts) {
                        texts.forEach(function (text) {
                            //console.log(text);
                            arr_names[i] = text;
                            i += 1;
                        });
                    })];
            case 2:
                _a.sent();
                i_1 = 0;
                _a.label = 3;
            case 3:
                if (!(i_1 < param)) return [3 /*break*/, 7];
                str_name = fetchRandomElementFromArr(arr_names);
                xpath = "//a[text()='" + str_name + "']/parent::h4/parent::div/parent::div //button";
                return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath(xpath)).click()];
            case 4:
                _a.sent();
                return [4 /*yield*/, protractor_1.browser.sleep(6000)];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6:
                i_1++;
                return [3 /*break*/, 3];
            case 7: return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('Checkout button contains {string} in its text', function (param) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // Write code here that turns the phrase above into concrete actions
            return [4 /*yield*/, protractor_1.element(protractor_1.by.partialLinkText('Checkout')).getText().then(function (text) { return __awaiter(void 0, void 0, void 0, function () {
                    var flag;
                    return __generator(this, function (_a) {
                        flag = text.includes("" + param);
                        expect(flag).to.equal(true);
                        return [2 /*return*/];
                    });
                }); })];
            case 1:
                // Write code here that turns the phrase above into concrete actions
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('Click on {string} anchor link', function (anchor_string) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(anchor_string === "Shop")) return [3 /*break*/, 2];
                return [4 /*yield*/, protractor_1.element(protractor_1.by.linkText(anchor_string)).click()];
            case 1:
                _a.sent();
                return [3 /*break*/, 4];
            case 2:
                if (!(anchor_string === "Checkout")) return [3 /*break*/, 4];
                return [4 /*yield*/, protractor_1.element(protractor_1.by.partialLinkText('Checkout')).click()];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
var extractPart = function (str) {
    return str.substr(3).trim();
};
cucumber_1.Then('Total amount is displayed correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
    var price_css, el_count, total_price, xpath_total_price;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                price_css = "table.table.table-hover tr td:nth-child(4) strong";
                return [4 /*yield*/, protractor_1.element.all(protractor_1.by.css(price_css)).count()];
            case 1:
                el_count = (_a.sent());
                total_price = 0;
                return [4 /*yield*/, protractor_1.element.all(protractor_1.by.css(price_css)).map(function (elm) {
                        return elm.getText();
                    }).then(function (texts) {
                        texts.forEach(function (price_text) {
                            var price = price_text.slice(3).trim();
                            // console.log(price);
                            total_price += Number(price);
                        });
                    })];
            case 2:
                _a.sent();
                xpath_total_price = "(//h3[text()='Total']/parent::td/parent::tr/td)[5]";
                return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath(xpath_total_price)).getText().then(function (pr_text) { return __awaiter(void 0, void 0, void 0, function () {
                        var price;
                        return __generator(this, function (_a) {
                            price = Number(pr_text.slice(3).trim());
                            // console.log("price calculated is: " + total_price);
                            // console.log("price extracted using xpath is " + price);
                            expect(price).to.equal(total_price);
                            return [2 /*return*/];
                        });
                    }); })];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('"{int}" number of items displayed in {string} page', function (number_of_items, page_name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); });
cucumber_1.Then('{string} is displayed on {string}', function (text, page) { return __awaiter(void 0, void 0, void 0, function () {
    var content;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(page === "shopping home page")) return [3 /*break*/, 2];
                return [4 /*yield*/, protractor_1.element(protractor_1.by.css("div.list-group a:nth-child(1)")).getText()];
            case 1:
                content = (_a.sent());
                expect(text).to.equal(content);
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmdwYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL3Nob3BwaW5ncGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUE2QztBQUU3Qyx5Q0FBaUU7QUFFakUsOENBQXdCO0FBRXhCLGNBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFFbkMsSUFBTSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUUzQixJQUFJLHlCQUF5QixHQUFHLFVBQUMsU0FBbUI7SUFDaEQsSUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFFLE9BQU8sV0FBVyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQTtBQUVELGVBQUksQ0FBQyx3Q0FBd0MsRUFBRSxVQUFPLEtBQWE7Ozs7b0JBTS9DLHFCQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFBOztnQkFBOUUsUUFBUSxHQUFHLENBQUMsU0FBa0UsQ0FBQztnQkFDL0UsU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUloQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNWLHFCQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FDMUQsVUFBVSxHQUFRO3dCQUNkLE9BQU8sR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUN6QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLO3dCQUNu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