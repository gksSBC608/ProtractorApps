import {browser, element, by} from "protractor"

describe('Fill form', async() => {

it('launch website', async()=>{
    await browser.get('https://rahulshettyacademy.com/angularpractice/');
    
})

it('enter positive data to form', async()=>{
    element(by.name('name')).sendKeys("Test Data");
    element(by.name('email')).sendKeys("test.data@app.com");
    element(by.css("*[type='password']")).sendKeys("TestData");
    element(by.id('exampleCheck1')).click();
    element(by.css("select[id='exampleFormControlSelect1']")).click();
    await browser.sleep(4000);
    //select/option[text()='Male']
    await element(by.xpath("//select/option[text()='Male']")).click();
    await browser.sleep(3500);
    await element(by.css("input[value='option2']")).click();
    await element(by.css("input[type='date']")).sendKeys("11/02/1989");
    await element(by.css("input[type='submit']")).click();
    element(by.css("div.alert.alert-success.alert-dismissible")).getText().then( (text : string) =>{
        console.log(text);
    })


    await browser.sleep(3500);
})

})