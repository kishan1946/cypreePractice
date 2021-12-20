/// <reference types="cypress"/>

import LoginPage from '../pageObject/LoginPage'

describe('POM spec',()=>{
    let users;
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('user').then((user) => {
            // "this" is still the test context object
            users = user
        })
    })
    it('Verify Login Test',()=>{
        const lp=new LoginPage();
        lp.visit();
        lp.fillEmail(users.email);
        lp.fillPassword(users.password);
        cy.title().should('eq','Dashboard / nopCommerce administration');
    })
})