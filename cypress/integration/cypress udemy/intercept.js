///<reference types="cypress"/>

describe('Intercept', () => {
    it('Intercept', () => {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, {
            statusCode: 200,
            body: [
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": "2301"
                }
            ]
        }).as('bookretrievals');
        cy.get('.btn.btn-primary').click();
        cy.wait('@bookretrievals').should(({request,response})=>{
            cy.get('tr').should('have.length',response.body.length+1);
        });
        cy.get('p').should('have.text','Oops only 1 Book available');
    })
    it('Intercept', () => {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',(req)=>{
            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
            req.continue((res)=>{
                // expect(res.statusCode).to.equal(403)
            })
        }).as("dummyURL");
        cy.get('.btn.btn-primary').click();
        cy.wait('@dummyURL')
    })
    it('api testing using post',()=>{
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',{
            "name":"Learn Cypress Automation with Javascript",
            "isbn" :"bcdkk3",
            "aisle" : "2289s4",
            "author" : "John Wick"
        }).then(response=>{
            expect(response.body).to.have.property("Msg","successfully added");
            expect(response.status).to.eq(200);
        })
    })
})