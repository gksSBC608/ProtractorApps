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
cucumber_1.Given('Navigate to ProtoCommerce website', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); });
cucumber_1.When('Launch {string}', function (url) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, protractor_1.browser.get(url)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('{string} is displayed', function (element_text) {
    protractor_1.element(protractor_1.by.css("nav a.navbar-brand")).getText().then(function (text) {
        console.log(text);
        expect(text).to.equal(element_text);
    });
});
cucumber_1.Given('Input text box for entering Name is displayed', function () {
});
cucumber_1.When('Enter {string} to {string} textbox', function (input_text, textbox) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!('Name' === textbox)) return [3 /*break*/, 8];
                // element(by.name('name')).sendKeys(input_text);
                // label[text()='Name']/parent::div/input
                return [4 /*yield*/, console.log("Going to enter " + input_text)];
            case 1:
                // element(by.name('name')).sendKeys(input_text);
                // label[text()='Name']/parent::div/input
                _a.sent();
                return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//label[text()='Name']/parent::div/input")).clear()];
            case 2:
                _a.sent();
                return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//label[text()='Name']/parent::div/input")).sendKeys(input_text)];
            case 3:
                _a.sent();
                return [4 /*yield*/, console.log("Going to click on Name label")];
            case 4:
                _a.sent();
                return [4 /*yield*/, protractor_1.browser.sleep(2100)];
            case 5:
                _a.sent();
                return [4 /*yield*/, protractor_1.browser.driver.findElement(protractor_1.by.xpath("//label[text()='Name']"))];
            case 6: 
            //await  element(by.xpath("//label[text()='Name']")).click();
            return [4 /*yield*/, (_a.sent()).click()];
            case 7:
                //await  element(by.xpath("//label[text()='Name']")).click();
                _a.sent();
                _a.label = 8;
            case 8: return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('Error messgae {string} is displayed for {string} field', function (message, textbox) {
    if ('Name' === textbox) {
        protractor_1.element(protractor_1.by.css("div.alert.alert-danger")).getText().then(function (text) {
            console.log("Error message is:- " + text);
            expect(text).to.equal(message);
        });
    }
});
cucumber_1.Given('Form is filled', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                protractor_1.element(protractor_1.by.name('name')).clear();
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
                return [4 /*yield*/, protractor_1.browser.sleep(1600)];
            case 3:
                _a.sent();
                return [4 /*yield*/, protractor_1.element(protractor_1.by.css("input[value='option2']")).click()];
            case 4:
                _a.sent();
                return [4 /*yield*/, protractor_1.element(protractor_1.by.css("input[type='date']")).sendKeys("11/02/1989")];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Given('Form is filled and submitted', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                protractor_1.element(protractor_1.by.name('name')).clear();
                protractor_1.element(protractor_1.by.name('name')).sendKeys("Test Data");
                protractor_1.element(protractor_1.by.name('email')).sendKeys("test.data@app.com");
                protractor_1.element(protractor_1.by.css("*[type='password']")).sendKeys("TestData");
                protractor_1.element(protractor_1.by.id('exampleCheck1')).click();
                protractor_1.element(protractor_1.by.css("select[id='exampleFormControlSelect1']")).click();
                return [4 /*yield*/, protractor_1.browser.sleep(2000)];
            case 1:
                _a.sent();
                //select/option[text()='Male']
                return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//select/option[text()='Male']")).click()];
            case 2:
                //select/option[text()='Male']
                _a.sent();
                return [4 /*yield*/, protractor_1.browser.sleep(1500)];
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
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('Submit button is clicked', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, protractor_1.element(protractor_1.by.css("input[type='submit']")).click()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('Success message {string} is displayed', function (message) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        protractor_1.element(protractor_1.by.css("div.alert.alert-success.alert-dismissible")).getText().then(function (text) {
            console.log(text);
            var flag = text.includes(message);
            var result = true;
            //expect(text).to.equal(message);
            console.log("flag is " + flag);
            expect(flag).to.equal(result);
            //expect(text).to.contain.text('The Form has been submitted');
        });
        return [2 /*return*/];
    });
}); });
cucumber_1.Given('Condition {int} in Given', function (int) {
    // Given('Condition {float} in Given', function (float) {
    // Write code here that turns the phrase above into concrete actions
});
cucumber_1.When('Condition {int} in When', function (int) {
    // When('Condition {float} in When', function (float) {
    // Write code here that turns the phrase above into concrete actions
});
cucumber_1.Then('Second Assertion in Then', function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2Vfc3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvaG9tZXBhZ2Vfc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBNkM7QUFDN0MseUNBQWlEO0FBQ2pELDhDQUF3QjtBQUV4QixjQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBRW5DLElBQU0sTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFFM0IsZ0JBQUssQ0FBQyxtQ0FBbUMsRUFBRTs7OztLQUcxQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsaUJBQWlCLEVBQUUsVUFBTyxHQUFHOzs7b0JBQ2hDLHFCQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFBOztnQkFBdEIsU0FBc0IsQ0FBQzs7OztLQUN4QixDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsdUJBQXVCLEVBQUUsVUFBVSxZQUFZO0lBRWxELG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBWTtRQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxDQUFBO0FBRUosQ0FBQyxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLCtDQUErQyxFQUFFO0FBRXZELENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLG9DQUFvQyxFQUFFLFVBQU8sVUFBa0IsRUFBRSxPQUFlOzs7O3FCQUUvRSxDQUFBLE1BQU0sS0FBSyxPQUFPLENBQUEsRUFBbEIs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