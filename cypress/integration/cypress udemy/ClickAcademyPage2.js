/// <reference types="cypress"/>

describe('Click Academy Page 2',()=>{
    it('Verify Allert',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('[value="Alert"]').click();
        cy.on('window:alert',(str)=>{
            expect(str).to.equals('Hello , share this practice page and share your knowledge');
        })
        cy.get('[value="Confirm"]').click();
        cy.on('window:confirm',(str)=>{
            expect(str).to.equals('Hello , Are you sure you want to confirm?');
        })
    })
    it('Verify Alert by name',()=>{
        cy.get('#name').type('Kumar');
        cy.get('[value="Alert"]').click();
        cy.on('window:alert',(str)=>{
            expect(str).to.equals('Hello Kumar, share this practice page and share your knowledge');
        })
        cy.get('#name').type('Kumar');
        cy.get('[value="Confirm"]').click();
        cy.on('window:confirm',(str)=>{
            expect(str).to.equals('Hello Kumar, Are you sure you want to confirm?');
        })
    })
    it('switch Tab & navigate browser',()=>{
        cy.get('#opentab').invoke('removeAttr','target').click().title().should('eq','Rahul Shetty Academy'); // invoke use to remove target from dom using jquerry
        cy.go('back').title().should('eq','Practice Page');
        cy.url().should('eq','https://rahulshettyacademy.com/AutomationPractice/');
        cy.go('forward').title().should('eq','Rahul Shetty Academy');
        cy.url().should('eq','https://www.rahulshettyacademy.com/#/index');
        cy.go(-1); //backward
        cy.get('#openwindow').click()
    })
    it('Verify handling webTable',()=>{
        cy.get('fieldset > #product > tbody > tr > td:nth-child(2)').each(($el,index,$list)=>{
            const text=$el.text();
            if (text.includes('Python')) {
                // cy.get('fieldset > #product > tbody > tr > td:nth-child(2)').eq(index).next().then((price)=>{
                //     const priceText=price.text();
                //     expect(priceText).to.equal('25');
                // })

                
                cy.wrap($el).next().then((price)=>{
                    const priceText=price.text();
                    expect(priceText).to.equal('25');
                })
            }
        })
    })
    it('Verify Mouse Hover',()=>{
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('eq','https://rahulshettyacademy.com/AutomationPractice/#top');


        cy.contains('Reload').click({force:true});
        cy.url().should('eq','https://rahulshettyacademy.com/AutomationPractice/');
    })
})