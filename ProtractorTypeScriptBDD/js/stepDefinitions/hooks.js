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
var cucumber_1 = require("cucumber");
var protractor_1 = require("protractor");
cucumber_1.Before({}, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("i will execute before any scenario");
                // await browser.manage().window().maximize();
                return [4 /*yield*/, protractor_1.browser.sleep(1890)];
            case 1:
                // await browser.manage().window().maximize();
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Before({ tags: "@FullFlow" }, function () {
    //  browser.manage().window().maximize();
});
cucumber_1.Before({ tags: "@WrongEntry" }, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, protractor_1.browser.get('https://rahulshettyacademy.com/angularpractice/')];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Before({ tags: "@SubmitForm" }, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // browser.manage().window().maximize();
            //console.log("Maximizing the browser window");
            return [4 /*yield*/, protractor_1.browser.get('https://rahulshettyacademy.com/angularpractice/')];
            case 1:
                // browser.manage().window().maximize();
                //console.log("Maximizing the browser window");
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function () {
        var screenshot;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(scenario.result.status === cucumber_1.Status.FAILED)) return [3 /*break*/, 2];
                    return [4 /*yield*/, protractor_1.browser.takeScreenshot()];
                case 1:
                    screenshot = _a.sent();
                    this.attach(screenshot, "image/png");
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
});
cucumber_1.AfterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, protractor_1.browser.quit()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBMkQ7QUFDM0QseUNBQXFDO0FBRXJDLGlCQUFNLENBQUMsRUFBRSxFQUNQOzs7O2dCQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztnQkFDbEQsOENBQThDO2dCQUM3QyxxQkFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7Z0JBRDFCLDhDQUE4QztnQkFDN0MsU0FBeUIsQ0FBQzs7OztLQUU1QixDQUFDLENBQUE7QUFFSixpQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUMxQjtJQUNFLHlDQUF5QztBQUMzQyxDQUFDLENBQUMsQ0FBQTtBQUVKLGlCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQzVCOzs7b0JBQ0UscUJBQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsaURBQWlELENBQUMsRUFBQTs7Z0JBQXBFLFNBQW9FLENBQUM7Ozs7S0FDdEUsQ0FBQyxDQUFBO0FBR0osaUJBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUI7Ozs7WUFDRSx3Q0FBd0M7WUFDeEMsK0NBQStDO1lBQy9DLHFCQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLEVBQUE7O2dCQUZwRSx3Q0FBd0M7Z0JBQ3hDLCtDQUErQztnQkFDL0MsU0FBb0UsQ0FBQzs7OztLQUN0RSxDQUFDLENBQUE7QUFFSixnQkFBSyxDQUFDLFVBQWdCLFFBQVE7Ozs7Ozt5QkFHeEIsQ0FBQSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxpQkFBTSxDQUFDLE1BQU0sQ0FBQSxFQUF4Qyx3QkFBd0M7b0JBRXZCLHFCQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLEVBQUE7O29CQUEzQyxVQUFVLEdBQUcsU0FBOEI7b0JBRWpELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDOzs7Ozs7Q0FHeEMsQ0FBQyxDQUFDO0FBRUgsbUJBQVEsQ0FBQzs7O29CQUVQLHFCQUFNLG9CQUFPLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dCQUFwQixTQUFvQixDQUFDOzs7O0tBRXRCLENBQUMsQ0FBQSJ9