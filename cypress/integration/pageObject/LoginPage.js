///<reference types="cypress"/>

class LoginPage{
    visit(){
        cy.visit('https://admin-demo.nopcommerce.com/login');
    }
    fillEmail(value){
        const email=cy.get('#Email').clear().type(value);
        return this;
    }
    fillPassword(value){
        const password=cy.get('.password').clear().type(value).type('{enter}');
        return this;
    }
}
export default LoginPage