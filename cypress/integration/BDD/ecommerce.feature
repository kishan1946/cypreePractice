Feature: end to end ecommerce validation

    application regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open ECommerce page
    When I add items to cart
    And Validate the total price
    Then select the country submit verify Thankyou

    @Smoke
    Scenario: Filling the form to shop
    Given I open ECommerce page
    When I fill the form details
        |name |gender|
        |Kumar|Male  |
    And Validate the form behaviour
    Then select the shop page