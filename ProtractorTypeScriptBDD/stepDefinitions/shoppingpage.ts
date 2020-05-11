import { When, Then, Given } from "cucumber";
import { ShoppingPage } from "../pageObjects/shoppingpage";
import { element, by, ElementFinder, browser } from "protractor";

import chai from "chai";

chai.use(require('chai-smoothie'));

const expect = chai.expect;

let fetchRandomElementFromArr = (arr_names: string[]): string => {
    let randomValue = arr_names[Math.floor(Math.random() * arr_names.length)];
    return randomValue;
}

When('Add buttons are clicked {string} times', async (param: number) => {
    // Write code here that turns the phrase above into concrete actions
    //await console.log("Inside Add buttons are clicked " + param + " times");
    // let sh = new ShoppingPage();
    // sh.obtain_locator_of_add_button();

    let el_count = (await element.all(by.css("div.card-body h4.card-title a")).count());
    let arr_names = new Array(el_count);
    // console.log("arr_names.length");
    // console.log(arr_names.length);

    let i = 0;
    await element.all(by.css("div.card-body h4.card-title a")).map(
        function (elm: any) {
            return elm.getText();
        }).then(function (texts) {
            texts.forEach(function (text) {
                //console.log(text);
                arr_names[i] = text;
                i += 1;
            });

        });

    // arr_names.forEach( function ( el: string){
    //     console.log("Hello "+el)
    //     console.log("hey")
    // })



    for (let i = 0; i < param; i++) {

        let str_name = fetchRandomElementFromArr(arr_names);
        // console.log(str_name);  
        let xpath = "//a[text()='" + str_name + "']/parent::h4/parent::div/parent::div //button";
        await element(by.xpath(xpath)).click();
        await browser.sleep(6000);

    }

});

Then('Checkout button contains {string} in its text', async (param) => {
    // Write code here that turns the phrase above into concrete actions
    await element(by.partialLinkText('Checkout')).getText().then(async (text) => {
        //await console.log(text);
        let flag = text.includes("" + param);
        expect(flag).to.equal(true);
    });

});

When('Click on {string} anchor link', async (anchor_string) => {
    if (anchor_string === "Shop") {
        await element(by.linkText(anchor_string)).click();
    }
    else if (anchor_string === "Checkout") {
        await element(by.partialLinkText('Checkout')).click();
    }
});

let extractPart = (str: string): string => {
    return str.substr(3).trim();
}

Then('Total amount is displayed correctly', async () => {

    let price_css = "table.table.table-hover tr td:nth-child(4) strong";
    let el_count = (await element.all(by.css(price_css)).count());
    let total_price = 0;
    await element.all(by.css(price_css)).map(
        function (elm: any) {
            return elm.getText();
        }).then(function (texts) {
            texts.forEach(function (price_text: any) {
                let price = price_text.slice(3).trim();
               // console.log(price);
                total_price += Number(price);
            });

        });
    let xpath_total_price = "(//h3[text()='Total']/parent::td/parent::tr/td)[5]";
    await element(by.xpath(xpath_total_price)).getText().then(async (pr_text) => {
        let price = Number(pr_text.slice(3).trim());
       // console.log("price calculated is: " + total_price);
       // console.log("price extracted using xpath is " + price);
        expect(price).to.equal(total_price);
    })

});

Then('"{int}" number of items displayed in {string} page', async (number_of_items, page_name) => {

    // if(page_name === "Checkout"){
    //     let price_css = "table.table.table-hover tr:nth-child(1) td:nth-child(2) input";
    //    await element(by.css(price_css)).getText().then( async(t) => {
    //         console.log("price is: "+t);
    //    } )
    //    // let el_count = (await element.all(by.css(price_css)).count());
    //    // expect(el_count).to.equal(number_of_items);
    //     await browser.sleep(5200);
    // }

});

Then('{string} is displayed on {string}', async (text, page) => {

    if (page === "shopping home page") {
        let content = (await element(by.css("div.list-group a:nth-child(1)")).getText());
        expect(text).to.equal(content);
    }
});