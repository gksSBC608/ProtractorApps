import { Given, When, Then } from "cucumber";
import { browser, element, by } from "protractor"
import chai from "chai";

chai.use(require('chai-smoothie'));

const expect = chai.expect;

Given('Navigate to ProtoCommerce website', async () => {
  // Write code here that turns the phrase above into concrete actions
  //await browser.get('https://rahulshettyacademy.com/angularpractice/');
});

When('Launch {string}', async (url) => {
  await browser.get(url);
});

Then('{string} is displayed', function (element_text) {

  element(by.css("nav a.navbar-brand")).getText().then((text: string) => {
    console.log(text);
    expect(text).to.equal(element_text);
  })

});

Given('Input text box for entering Name is displayed', function () {

});

When('Enter {string} to {string} textbox', async (input_text: string, textbox: string) => {

  if ('Name' === textbox) {
    // element(by.name('name')).sendKeys(input_text);
    // label[text()='Name']/parent::div/input
    await console.log("Going to enter " + input_text);
    await element(by.xpath("//label[text()='Name']/parent::div/input")).clear();
    await element(by.xpath("//label[text()='Name']/parent::div/input")).sendKeys(input_text);
    await console.log("Going to click on Name label");
    await browser.sleep(2100);
    //await  element(by.xpath("//label[text()='Name']")).click();
    await (await browser.driver.findElement(by.xpath("//label[text()='Name']"))).click();
  }

});

Then('Error messgae {string} is displayed for {string} field', function (message: string, textbox: string) {
  if ('Name' === textbox) {
    element(by.css("div.alert.alert-danger")).getText().then((text: string) => {
      console.log("Error message is:- " + text);
      expect(text).to.equal(message);
    })
  }
});

Given('Form is filled', async () => {
  element(by.name('name')).clear();
  element(by.name('name')).sendKeys("Test Data");
  element(by.name('email')).sendKeys("test.data@app.com");
  element(by.css("*[type='password']")).sendKeys("TestData");
  element(by.id('exampleCheck1')).click();
  element(by.css("select[id='exampleFormControlSelect1']")).click();
  await browser.sleep(4000);
  //select/option[text()='Male']
  await element(by.xpath("//select/option[text()='Male']")).click();
  await browser.sleep(1600);
  await element(by.css("input[value='option2']")).click();
  await element(by.css("input[type='date']")).sendKeys("11/02/1989");
});

Given('Form is filled and submitted', async () => {
  element(by.name('name')).clear();
  element(by.name('name')).sendKeys("Test Data");
  element(by.name('email')).sendKeys("test.data@app.com");
  element(by.css("*[type='password']")).sendKeys("TestData");
  element(by.id('exampleCheck1')).click();
  element(by.css("select[id='exampleFormControlSelect1']")).click();
  await browser.sleep(2000);
  //select/option[text()='Male']
  await element(by.xpath("//select/option[text()='Male']")).click();
  await browser.sleep(1500);
  await element(by.css("input[value='option2']")).click();
  await element(by.css("input[type='date']")).sendKeys("11/02/1989");
  await element(by.css("input[type='submit']")).click();
});

When('Submit button is clicked', async () => {
  await element(by.css("input[type='submit']")).click();
});

Then('Success message {string} is displayed', async (message: string) => {

  element(by.css("div.alert.alert-success.alert-dismissible")).getText().then((text: string) => {
    console.log(text);
    let flag = text.includes(message);
    let result = true;
    //expect(text).to.equal(message);
    console.log("flag is "+flag);
    expect(flag).to.equal(result);
    //expect(text).to.contain.text('The Form has been submitted');
  })

});

Given('Condition {int} in Given', function (int) {
  // Given('Condition {float} in Given', function (float) {
  // Write code here that turns the phrase above into concrete actions

});

When('Condition {int} in When', function (int) {
  // When('Condition {float} in When', function (float) {
  // Write code here that turns the phrase above into concrete actions

});

Then('Second Assertion in Then', function () {
  // Write code here that turns the phrase above into concrete actions
  // return 'pending';
});