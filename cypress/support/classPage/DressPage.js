/// <reference types="cypress"/>

class DressPage{
    clickOnDress(){
        cy.get('.product-name[title="Blouse"]').click();
    }
}

export default DressPage;