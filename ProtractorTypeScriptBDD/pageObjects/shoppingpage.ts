import { ElementFinder, element, by } from "protractor";

export class ShoppingPage {
    arr_names: string[];
    add_button: ElementFinder;

    constructor() {
        //this.add_button = 8;
        this.arr_names = new Array(10);
        this.add_button = element(by.css("input[type='search']"));
    }

    obtain_locator_of_add_button(): void {
        // div.card-body h4.card-title a
        console.log("Inside obtain_locator_of_add_button");
        element.all(by.css("div.card-body h4.card-title a")).count().then(
            async (count) => {
                await console.log(count + " number of elements present")

            });
        console.log("Inside obtain_locator_of_add_button after promise completes");

    }

}