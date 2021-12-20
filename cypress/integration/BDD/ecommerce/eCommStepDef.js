import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pom/rahulShettyPage/HomePage";
import CheckOutPage from "../../pom/rahulShettyPage/CheckOutPage";
import ShopPage from "../../pom/rahulShettyPage/ShopPage";

const homePage = new HomePage();
const shopPage = new ShopPage();
const checkOutPage = new CheckOutPage();
Given('I open ECommerce page', () => {
    cy.visit(Cypress.env('url') + '/angularpractice/');
})

When('I add items to cart', function () {
    shopPage.getShop().click();
    cy.log(this.data.name)
    shopPage.getProduct(this.data);

    checkOutPage.getCheckout().click();
})

And('Validate the total price', () => {
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
})

Then('select the country submit verify Thankyou', function () {
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


Given('I open ECommerce page', () => {
    cy.visit(Cypress.env('url') + '/angularpractice/');
})

When('I fill the form details', function (dataTable) {
    homePage.getEditBox().type(dataTable.rawTable[1][0]);
    homePage.getGender().select(dataTable.rawTable[1][1]);
})

And('Validate the form behaviour', function() {
    homePage.getTwoWayDataBinding().should('have.value', this.data.name);
    homePage.getEntrepreneaur().should('be.disabled');
    homePage.getEditBox().should('have.attr', 'minlength', '2');
})

Then('select the shop page', function () {
    shopPage.getShop().click();
})