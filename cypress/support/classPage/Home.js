///<reference types="cypress"/>

class Home{
    moveElementToBlouse(){
        // cy.get('a[title="Women"]').invoke('show');
        cy.get('.submenu-container.clearfix.first-in-line-xs').eq(0).invoke('show');
        cy.get('a[title="Blouses"]').click();
    }
}

export default Home;