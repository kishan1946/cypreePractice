/// <reference types="cypress"/>

describe('Green Kart',()=>{
    it('Verify serach and ui',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.get('.product:visible').should('have.length',4);
        // parent child chaining
        cy.get('.products').find('.product').should('have.length',4);
        // capturing 2nd product out of 4
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
        // same way to add to cart using css
        cy.get('.products').find('.product').eq(2).find('button').click();
    })
    it('verify add to cart through "each" dynamically',()=>{
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const text=$el.find('h4.product-name').text();
            if (text.includes('Cashews')) {
                cy.wrap($el).find('button').click();
                // $el.find('button').click();
            }
        })
        cy.get('.brand').then((loggoElement)=>{
            cy.log(loggoElement.text());
        })
    })
    it('Verify serach and ui using alias',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.get('.product:visible').should('have.length',4);
        // parent child chaining
        cy.get('.products').as('productsLocator');
        cy.get('@productsLocator').find('.product').should('have.length',4);
        // capturing 2nd product out of 4
        cy.get('@productsLocator').find('.product').eq(1).contains('ADD TO CART').click();
        // same way to add to cart using css
        cy.get('@productsLocator').find('.product').eq(2).find('button').click();

        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
    })
})