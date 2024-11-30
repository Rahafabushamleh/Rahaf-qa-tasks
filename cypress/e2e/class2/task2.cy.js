/// <reference types = "cypress" />

describe('Cart Functionality', () => {
    before(()=>{
        cy.visit("/")
        cy.get("#search").type("hoodie{enter}")
        cy.contains("Hero Hoodie").last().click()
        cy.get("[option-label=L]").click();
        cy.get("#option-label-color-93-item-52").click()
        cy.get("#qty").clear().type("3")
        cy.get("#product-addtocart-button").click()
    })

    it('Validate that the user can update products from the shopping cart .', () => {
        cy.visit("/")
        cy.get(".action.showcart").click()
        cy.contains("View and Edit Cart").click({force: true})
        cy.get("[title='Edit item parameters']").click();
        cy.get("[option-label=M]").click();
        cy.get("#qty").clear().type("2")
        cy.get("#product-updatecart-button").click()
        cy.get(".counter-number").should("contain","2")
        cy.get(".success.message").should("contain", "Hero Hoodie was updated in your shopping cart.")        
    }); 

    it('Validate that the user can submit a review on the product page .',()=>{
        cy.visit("/")
        cy.get(".product-image-photo").first().click()
        cy.get(".action.add").click()
        cy.wait(3000)
        cy.get("[title='3 stars']").click({force: true})
        cy.get("#nickname_field").clear().type("Rahaf")
        cy.get("#summary_field").clear().type("Good product !")
        cy.get("#review_field").clear().type("What a versatile shirt! Not only does it feel very soft compared to my old worn out polos, but it also does the job promised.")
        cy.contains("Submit Review").click()
        cy.get(".success.message").should("contain", "You submitted your review for moderation.")
    })
    
    
});