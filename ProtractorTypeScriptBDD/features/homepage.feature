Feature:Test the fatures on home page

        Scenario: Launching the website opens a form
            Given Navigate to ProtoCommerce website
             When Launch "https://rahulshettyacademy.com/angularpractice/"
             Then "ProtoCommerce" is displayed
        
        
        @WrongEntry
        Scenario Outline: Form displays error message for wrong entry
            Given Input text box for entering Name is displayed
             When Enter "<text>" to "Name" textbox
             Then Error messgae "Name should be at least 2 characters" is displayed for "Name" field

        Examples:
                  | text |
                  | h  |
                  | # |

        @SubmitForm
        Scenario: Submit Form
            Given Form is filled
             When Submit button is clicked
             Then Success message "Success! The Form has been submitted successfully!." is displayed

        @FullFlow
        Scenario: Full Flow
            Given Launch "https://rahulshettyacademy.com/angularpractice/"
              And Condition 2 in Given
             When Form is filled and submitted
              And Condition 2 in When
             Then Success message "Success! The Form has been submitted successfully!." is displayed
              And Second Assertion in Then
    