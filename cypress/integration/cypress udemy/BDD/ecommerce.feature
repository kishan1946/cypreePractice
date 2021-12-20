Feature: end to end ecommerce validation

    application regression
    Scenario: Ecommerce products delivery
    Given I open ECommerce page
    When I add items to cart
    And Validate the total price
    Then select the country submit verify Thankyou