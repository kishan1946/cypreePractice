/// <reference types="cypress" />
describe('UI Elements', () => {
    it('Verify inputbox and radio button', () => {
      cy.visit('http://demo.guru99.com/test/newtours/');
      cy.url().should('include','newtours');

      cy.get('input[name="userName"]').should('be.visible').should('be.enabled').type('mercury');
      cy.get('input[name="password"]').should('be.visible').should('be.enabled').type('mercury');

      cy.get('input[name="submit"]').should('be.visible').click();
      cy.title().should('eq','Login: Mercury Tours');

      cy.get(':nth-child(2) > [width="80"] > a').click();

      cy.get('input[value="roundtrip"]').should('be.visible').should('be.checked');
      cy.get('input[value="oneway"]').should('be.visible').click().should('be.checked');

      cy.get('input[value="roundtrip"]').should('be.visible').should('not.be.checked').click();
      cy.get('input[value="oneway"]').should('be.visible').should('not.be.checked').click();

      cy.get('input[name="findFlights"]').should('be.visible').click();
      cy.title().should('eq','Find a Flight: Mercury Tours:');
    })
    it('Verify hobbies checkbox and dropdown', ()=>{
        cy.visit('http://demo.automationtesting.in/Register.html');

        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket');
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies');
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey');

        cy.get('#checkbox1').uncheck().should('not.be.checked');
        cy.get('#checkbox2').uncheck().should('not.be.checked');
        cy.get('#checkbox3').uncheck().should('not.be.checked');

        cy.get('input[type="checkbox"]').check(['Cricket','Hockey']);

    })
    it('Drop down Test',()=>{
        cy.get('#Skills').select('Adobe InDesign').should('have.value','Adobe InDesign');
    })
    it('Multiple Drop down Test',()=>{
        cy.get('#msdd').click();
        cy.get('.ui-corner-all').contains('English').click();
        cy.get('.ui-corner-all').contains('Hindi').click();

        cy.get('span[role="combobox"]').click({force:true});
        cy.get('.select2-search__field').should('be.visible').should('be.enabled').type("India");
        cy.get('.select2-search__field').should('be.visible').should('be.enabled').type('{enter}');
    })
    it('verify date of birth',()=>{
        cy.get('#yearbox').select('2000').should('have.value','2000');
        cy.get('.form-control.ng-pristine.ng-untouched.ng-invalid.ng-invalid-required[placeholder="Month"]').select('August').should('have.value','August');
        cy.get('#daybox').select('5').should('have.value','5');
    })
  })