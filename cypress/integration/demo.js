/// reference types="cypress"/>

describe('Sample Suite', () => {
    it('Sample test', () => {
        cy.visit('http://automationpractice.com/index.php?id_product=2&controller=product#/size-s/color-white');
        cy.get('#color_11').click();
        cy.get('#color_8').click();
        cy.get('.exclusive > span').click();
    
    });
});