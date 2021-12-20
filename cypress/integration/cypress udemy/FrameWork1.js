/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>

import 'cypress-iframe'

describe('Framework 1', () => {
    let data;
    before(function () {
        // "this" points at the test context object
        cy.fixture('user').then((user) => {
            // "this" is still the test context object
            data = user;
        })
    })
    it('Verify iFrame spec', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find('a[href*="mentorship"]').eq(0).click();
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2);
    })
    it('Verify fixtures', () => {
        cy.log(data.password);
        cy.log(data.name);

    })
    it('Verify angular element', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('input[name="name"]:nth-child(2)').type(data.name);
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', data.name);
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2');
        cy.get('#inlineRadio3').should('be.disabled');
    })
    it('Veryfy customized for reusing code', () => {
        cy.get(':nth-child(2) > .nav-link').click();
        cy.selectProduct(data.phoneName);
        cy.selectProduct(data.phoneName2);


        // select multiple by json array
        data.phoneName3.forEach(element => {
            cy.selectProduct(element);
        });
    })
})