///<reference types="cypress"/>

describe('Click Academy Page', () => {
    it('Verify checkBox', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get('input[type="checkbox"]').check(['option1', 'option3']);
    })
    it('Verify dropDown', () => {
        cy.get('#dropdown-class-example').select('Option1').should('have.value', 'option1');
        cy.get('#dropdown-class-example').select('Option2');


        cy.get('#autocomplete').type('ind');
        cy.get('.ui-menu-item').each(($el, index, $list) => {
            const text = $el.text();
            if (text == 'India') {
                cy.wrap($el).click();
                // $el.find('button').click();
            }
        })
        cy.get('#autocomplete').should('have.value', 'India');
    })
    it('Verify visibility in dom', () => {
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');
    })
    it('Verify Radio Button', () => {
        cy.get('input[value="radio1"]').click().should('be.checked');
        cy.get('input[value="radio2"]').check().should('be.checked');

        cy.get('.radioButton').each(($el, index, $list) => {
            cy.wrap($el).check();
        })
    })
})