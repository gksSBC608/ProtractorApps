import { Before, After, Status, AfterAll } from "cucumber";
import { browser } from "protractor";

Before({},
  async () => {
    console.log("i will execute before any scenario");
    // await browser.manage().window().maximize();
     await browser.sleep(1890);

  })

Before({ tags: "@FullFlow" },
  () => {
    //  browser.manage().window().maximize();
  })

Before({ tags: "@WrongEntry" },
  async () => {
    await browser.get('https://rahulshettyacademy.com/angularpractice/');
  })


Before({ tags: "@SubmitForm" },
  async () => {
    // browser.manage().window().maximize();
    //console.log("Maximizing the browser window");
    await browser.get('https://rahulshettyacademy.com/angularpractice/');
  })

After(async function (scenario) {
  // This hook will be executed before scenarios tagged with @foo
 // console.log("Test is completed");
  if (scenario.result.status === Status.FAILED) {
    //code to take screesnhot
    const screenshot = await browser.takeScreenshot();

    this.attach(screenshot, "image/png");
  }

});

AfterAll(async () => {

  await browser.quit();

})
