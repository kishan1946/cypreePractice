describe('My Test Suit', () => {
    it('Verify title of the page-positive', () => {
      cy.visit('https://demo.nopcommerce.com/')
      cy.title().should('eq','nopCommerce demo store')
    })
    it('Verify title of the page-negative', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce store')
      })
  })