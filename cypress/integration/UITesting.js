///<reference types="cypress"/>
import DressPage from "../support/classPage/DressPage";
import Home from "../support/classPage/Home";
import AddToCartPage from "../support/classPage/AddToCartPage";

describe('UI Testing',()=>{
    it('Visit page',()=>{
        cy.visit('http://automationpractice.com/index.php');
        cy.title().should('eq','My Store');
    })
    it('Verify Home Page UI',()=>{
        const home=new Home();
        home.moveElementToBlouse();
    })
    it('Verify Dress Page',()=>{
        const dress=new DressPage();
        dress.clickOnDress();
    })
    it('Verify Add to cart page',()=>{
        const addToCart=new AddToCartPage();
        addToCart.checkColorRadioButton();
        // addToCart.checkColorRadioButton();
    })
})