/// <reference types="cypress"/>

import HomePage from "../../support/rahulShettyPage/HomePage";
import ShopPage from "../../support/rahulShettyPage/ShopPage";
import CheckOutPage from "../../support/rahulShettyPage/CheckOutPage";

describe('Page Object Model', () => {
    let data;
    before(function () {
        // "this" points at the test context object
        cy.fixture('user').then((user) => {
            // "this" is still the test context object
            data = user;
        })
    })
    it('visit',()=>{
        cy.visit(Cypress.env('url')+'/angularpractice/');
    })
    it('Verify POM', () => {
        const homePage = new HomePage();
        const shopPage = new ShopPage();
        const checkOutPage=new CheckOutPage();

        homePage.getEditBox().type(data.name);
        homePage.getTwoWayDataBinding().should('have.value',data.name);
        homePage.getEntrepreneaur().should('be.disabled');
        homePage.getEditBox().should('have.attr','minlength','2');

        shopPage.getShop().click();
        shopPage.getProduct(data);

        checkOutPage.getCheckout().click();
        let sum=0;
        checkOutPage.getPrice().each(($el,index,$list)=>{
            const price=$el.text().split(" ");
            // cy.log(price[1].trim());
            sum=sum+Number(price[1]);
        })
        // .then(()=>{
        //     cy.log(sum);
        // })
        checkOutPage.getAmount().then(element=>{
            const txt=element.text().split(" ");
            let price=txt[1].trim();
            // cy.log(price,typeof(price));
            // cy.log(sum,typeof(sum));
            expect(sum).to.equal(Number(price));
        });
        checkOutPage.getCheckoutButton().click();
        Cypress.config('defaultCommandTimeout',10000);
        checkOutPage.writeLocationDetails(data.country).click();
        checkOutPage.clickCheckBoxForTndC().click({force:true});
        checkOutPage.clickPurchase().click();
        // text includes some more character which is not visible on dom
        checkOutPage.verifySuccessfull().then(element=>{
            expect(element.text().includes('Success! Thank you! Your order will be delivered in next few weeks :-).')).to.be.true;
        });
    })
})