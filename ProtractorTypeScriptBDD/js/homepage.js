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
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Fill form', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        it('launch website', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.get('https://rahulshettyacademy.com/angularpractice/')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('enter positive data to form', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.element(protractor_1.by.name('name')).sendKeys("Test Data");
                        protractor_1.element(protractor_1.by.name('email')).sendKeys("test.data@app.com");
                        protractor_1.element(protractor_1.by.css("*[type='password']")).sendKeys("TestData");
                        protractor_1.element(protractor_1.by.id('exampleCheck1')).click();
                        protractor_1.element(protractor_1.by.css("select[id='exampleFormControlSelect1']")).click();
                        return [4 /*yield*/, protractor_1.browser.sleep(4000)];
                    case 1:
                        _a.sent();
                        //select/option[text()='Male']
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//select/option[text()='Male']")).click()];
                    case 2:
                        //select/option[text()='Male']
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(3500)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.css("input[value='option2']")).click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.css("input[type='date']")).sendKeys("11/02/1989")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.css("input[type='submit']")).click()];
                    case 6:
                        _a.sent();
                        protractor_1.element(protractor_1.by.css("div.alert.alert-success.alert-dismissible")).getText().then(function (text) {
                            console.log(text);
                        });
                        return [4 /*yield*/, protractor_1.browser.sleep(3500)];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9ob21lcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUErQztBQUUvQyxRQUFRLENBQUMsV0FBVyxFQUFFOztRQUV0QixFQUFFLENBQUMsZ0JBQWdCLEVBQUU7Ozs0QkFDakIscUJBQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsaURBQWlELENBQUMsRUFBQTs7d0JBQXBFLFNBQW9FLENBQUM7Ozs7YUFFeEUsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLDZCQUE2QixFQUFFOzs7O3dCQUM5QixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQy9DLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3dCQUN4RCxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDM0Qsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ3hDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ2xFLHFCQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBekIsU0FBeUIsQ0FBQzt3QkFDMUIsOEJBQThCO3dCQUM5QixxQkFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFBOzt3QkFEakUsOEJBQThCO3dCQUM5QixTQUFpRSxDQUFDO3dCQUNsRSxxQkFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXpCLFNBQXlCLENBQUM7d0JBQzFCLHFCQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUF2RCxTQUF1RCxDQUFDO3dCQUN4RCxxQkFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBQTs7d0JBQWxFLFNBQWtFLENBQUM7d0JBQ25FLHFCQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUFyRCxTQUFxRCxDQUFDO3dCQUN0RCxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBRSxVQUFDLElBQWE7NEJBQ3ZGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3RCLENBQUMsQ0FBQyxDQUFBO3dCQUdGLHFCQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBekIsU0FBeUIsQ0FBQzs7OzthQUM3QixDQUFDLENBQUE7OztLQUVELENBQUMsQ0FBQSJ9