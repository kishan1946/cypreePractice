class CheckOutPage{
    getCheckout(){
        return cy.get('.nav-link.btn.btn-primary');
    }
    getPrice(){
        return cy.get('tr td:nth-child(4) strong');
    }
    getAmount(){
        return cy.get('h3 > strong');
    }
    getCheckoutButton(){
        return cy.get('.btn.btn-success');
    }
    writeLocationDetails(country){
        cy.get('#country').type(country);
        return cy.contains('India');
    }
    clickCheckBoxForTndC(){
        return cy.get('#checkbox2');
    }
    clickPurchase(){
        return cy.get('.btn-lg');
    }
    verifySuccessfull(){
        return cy.get('.alert');
    }
}
export default CheckOutPage;