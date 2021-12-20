/// <reference types="cypress"/>

describe('Hooks Spec', () => {
    before(() => {
        // runs once before all tests in the block
        cy.log('*********This is setup Block*************');
    })

    beforeEach(() => {
        // runs before each test in the block
        cy.log('*********This is Login Block*************');
     })

    afterEach(() => {
        // runs after each test in the block
        cy.log('*********This is Logout Block*************');
    })

    after(() => {
        // runs once after all tests in the block
        cy.log('*********This is Tear Down Block*************');
    })

    it('Searching', () => {
        cy.log('*********This is Searching Block*************');
    })
    it('Advanced Searching', () => {
        cy.log('*********This is Advanced Searching Block*************');
    })
    it('Listing Products', () => {
        cy.log('*********This is Listing Block*************');
    })
    it('Verify Hooks', () => {
        cy.log('*********This is Verify Hooks Block*************');
    })
})