/// <reference types="cypress" />

describe('Navigate Suite',()=>{
    it('Verify the navigation forward and backward',()=>{
        cy.visit('https://demo.nopCommerce.com/');
        cy.title().should('eq','nopCommerce demo store');
        cy.get('.ico-register').click();
        cy.title().should('eq','nopCommerce demo store. Register');

        cy.go('back');  //backward
        cy.title().should('eq','nopCommerce demo store');

        cy.go('forward');  //forward
        cy.title().should('eq','nopCommerce demo store. Register');

        cy.go(-1);  //backward
        cy.title().should('eq','nopCommerce demo store');

        cy.go(1);  //forward
        cy.title().should('eq','nopCommerce demo store. Register');

        cy.reload();  //reload 
        cy.title().should('eq','nopCommerce demo store. Register');
    })
})