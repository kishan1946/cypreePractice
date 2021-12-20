/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>

import 'cypress-iframe'
describe('Alert Spec', () => {
  it.only('Verify popup', () => {
    // cy.visit('https://www.google.com');
    // cy.get('.gLFyf').type('https://mail.rediff.com/cgi-bin/login.cgi');
    // cy.get('.FPdoLc > center > .gNO89b').first().click({force:true});
    // cy.get('#rso > div:nth-child(1) > div > div:nth-child(1) > div > div > div > div.yuRUbf > a > h3').click({force:true});
    cy.visit("https://mail.rediff.com/cgi-bin/login.cgi");
    // cy.frameLoaded('body:nth-child(2) > iframe:nth-child(5)');
    // cy.title().should('eq', 'mail.rediff.com')
    cy.iframe().find('input[type="submit"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Please enter a valid user name');
    })
  })

  it('Verify alert popup which needs to confrim', () => {
    // If the allert popup global type which needs to confirm
    cy.visit('http://testautomationpractice.blogspot.com/');
    cy.get('#HTML9 > .widget-content > button').click();
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Press a button!');
    })
  })

  it('Verify table present in dom', () => {
    cy.visit('http://testautomationpractice.blogspot.com/');
    cy.get('.widget-content > table').contains('td','Learn Selenium').should('be.visible');

    // Extract value from specific row and table
    cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Java').should('be.visible');
  })
  it('Verify book name Master In Java in author name Amod',()=>{
    cy.get('table[name="BookTable"]>tbody>tr td:nth-child(2)').each(($e,index,$list)=>{
      let text=$e.text();
      if(text.includes('Amod')){
        cy.get('table[name="BookTable"]>tbody>tr td:nth-child(1)').eq(index).
        then((bname)=>{
          let bookName=bname.text();
          expect(bookName).to.equal("Master In Java");
        })
      }
    })
  })
})