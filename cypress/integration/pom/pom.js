/// <reference types="cypress"/>

import HomePage from "../pom/rahulShettyPage/HomePage";
import ShopPage from "../pom/rahulShettyPage/ShopPage";
import CheckOutPage from "../pom/rahulShettyPage/CheckOutPage"

describe('Page Object Model', () => {
    beforeEach(function () {
        cy.fixture('user').then((data) => {
            this.data = data
        })
    })
    it('visit', () => {
        cy.visit(Cypress.env('url') + '/angularpractice/');
    })
    it('Verify POM', function() {
        const homePage = new HomePage();
        const shopPage = new ShopPage();
        const checkOutPage = new CheckOutPage();

        homePage.getEditBox().type(this.data.name);
        homePage.getTwoWayDataBinding().should('have.value', this.data.name);
        homePage.getEntrepreneaur().should('be.disabled');
        homePage.getEditBox().should('have.attr', 'minlength', '2');

        shopPage.getShop().click();
        shopPage.getProduct(this.data);

        checkOutPage.getCheckout().click();
        let sum = 0;
        checkOutPage.getPrice().each(($el, index, $list) => {
            const price = $el.text().split(" ");
            // cy.log(price[1].trim());
            sum = sum + Number(price[1]);
        })
        // .then(()=>{
        //     cy.log(sum);
        // })
        checkOutPage.getAmount().then(element => {
            const txt = element.text().split(" ");
            let price = txt[1].trim();
            // cy.log(price,typeof(price));
            // cy.log(sum,typeof(sum));
            expect(sum).to.equal(Number(price));
        });
        checkOutPage.getCheckoutButton().click();
        Cypress.config('defaultCommandTimeout', 10000);
        checkOutPage.writeLocationDetails(this.data.country).click();
        checkOutPage.clickCheckBoxForTndC().click({ force: true });
        checkOutPage.clickPurchase().click();
        // text includes some more character which is not visible on dom
        checkOutPage.verifySuccessfull().then(element => {
            expect(element.text().includes('Success! Thank you! Your order will be delivered in next few weeks :-).')).to.be.true;
        });
    })
})