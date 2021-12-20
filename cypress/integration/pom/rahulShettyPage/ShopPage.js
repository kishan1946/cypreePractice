class ShopPage{
    getShop(){
        return cy.get(':nth-child(2) > .nav-link');
    }
    getProduct(data){
        data.phoneName3.forEach(element => {
            cy.selectProduct(element);
        });
    }
}
export default ShopPage;