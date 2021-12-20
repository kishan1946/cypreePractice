class HomePage{
    getEditBox(){
        return cy.get('input[name="name"]:nth-child(2)');
    }
    getTwoWayDataBinding(){
        return cy.get(':nth-child(4) > .ng-untouched');
    }
    getEntrepreneaur(){
        return cy.get('#inlineRadio3');
    }
}
export default HomePage;