Feature:Test the fatures on shoping page

        @Shopping
        Scenario Outline: Add items to cart
            Given Launch "https://rahulshettyacademy.com/angularpractice/shop"
             When Add buttons are clicked "<num_click>" times
             Then Checkout button contains "<num_click>" in its text

        Examples:
                  | num_click |
                  | 3 |
                  | 1 |

        @Shopping
        Scenario: Clicking on Shop menu option opens shopping page
            Given Launch "https://rahulshettyacademy.com/angularpractice/"
             When Click on "Shop" anchor link
             Then "Category 1" is displayed on "shopping home page"

      
        @Shopping
        Scenario Outline: Total sum of the items in cart is displayed correctly
            Given Launch "https://rahulshettyacademy.com/angularpractice/shop"
             When Add buttons are clicked "<num_click>" times
              And Click on "Checkout" anchor link
             Then "<num_click>" number of items displayed in "Checkout" page
              And Total amount is displayed correctly

        Examples:
                  | num_click |
                  | 1 |
                  | 3 |