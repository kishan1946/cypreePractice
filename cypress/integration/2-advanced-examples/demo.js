/// <reference types="cypress"/>

const DomParser = require('dom-parser');
const parse = new DomParser();
describe('Sample', () => {
    it('Sample test', () => {
        cy.request('GET', 'https://mail.rediff.com/cgi-bin/login.cgi').then(
            (response) => {
                const body = response.body;
                const doc = parse.parseFromString(body);
                console.log(doc.getElementById('login1'));
                console.log((doc.getElementById('login1')).attributes);
            }
        )
    })
})