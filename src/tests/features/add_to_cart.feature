Feature: Add to cart
    As a standard user
    A user can add products to the shopping cart
    And a user can review his selections before checkout

    Scenario: Add a product to cart
    Given A web browser is at the inventory page
    When A user clicks "Add to cart" button for the product "Sauce Labs Backpack"
    Then A cart badge should display "1" 
    And the "Remove" button should appear for the product "Sauce Labs Backpack"

#     Scenario: Add multiple products to cart
#     Given A user adds the following products:
#         | Sauce Labs Backpack |
#         | Sauce Labs Bike Light |
#         | Sauce Labs Bolt T-Shirt |
#         | Sauce Labs Fleece Jacket |
#     Then A cart badge should display the number "4"
#     And all added items should appear in the cart