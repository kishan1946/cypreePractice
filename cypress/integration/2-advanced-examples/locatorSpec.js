/// <reference types="cypress" />
describe('Locating Elements', () => {
    it('Verify types of locators', () => {
      cy.visit('https://demo.nopcommerce.com/');
      cy.get('#small-searchterms').type("Apple MacBook Pro 13-inch");
      cy.get('.button-1.search-box-button[type="submit"]').click();
      cy.get('.button-2.product-box-add-to-cart-button[type="button"]').click();
      cy.get('.button-1.add-to-cart-button[type="button"]').click();
    //   cy.wait(2000);
      cy.get('.cart-label').click();
      cy.get('.product-unit-price').contains('$1,800.00');
    })
  })