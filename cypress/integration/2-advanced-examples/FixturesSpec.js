///<reference types="cypress"/>

describe('Fixtures Spec', () => {
    let users;
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('user').then((user) => {
            // "this" is still the test context object
            users = user
        })
    })

    it('Verify Fixtures', () => {
        cy.visit('https://admin-demo.nopcommerce.com/login');
        cy.get('#Email').clear().type(users.email);
        cy.get('.password').clear().type(users.password).type('{enter}');


        // cy.get('#Email').clear().type('admin@yourstore.com');
        // cy.get('.password').clear().type('admin').type('{enter}');
        // cy.get('.button-1').click();
    })


    it('Add Customer',()=>{
        cy.login(users.email,users.password);

        cy.log('Adding customer');
    })
    it('Add Customer',()=>{
        cy.login(users.email,users.password);

        cy.log('editing customer');
    })

    it('has user', function () {
        // this.user exists
        cy.log('**************');
        cy.fixture('user').then((user) => {
            // "this" is still the test context object
            cy.log(user.email);
            cy.log(user.password)
        })
        cy.log(users.email);
        // expect(this.user.email).to.equal("admin@yourstore.com");
      })
    
    
})