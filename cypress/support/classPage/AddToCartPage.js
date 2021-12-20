/// <reference types="cypress"/>

class AddToCartPage {
    checkColorRadioButton() {
        cy.get('#color_11').click();
        cy.get('#color_8').click();
        function clickAgain() {
            cy.get('button[name="Submit"]').as('button');
            cy.get('@button').click();
        }
        clickAgain();
        // clickAgain();

    }
}


export default AddToCartPage;