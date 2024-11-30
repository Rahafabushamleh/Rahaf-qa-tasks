/// <reference types="cypress" />

describe('Cart Functionality', () => {
    
    it('Validate that the user can add products to the shopping cart', () => {
        cy.visit("/")
        cy.get("#search").type("bag{enter}")
        cy.get(".product-image-photo").first().click()
        cy.get("#qty").clear().type("2")
        cy.get("#product-addtocart-button").click()
        cy.get(".counter.qty").should("be.visible","2")
        cy.get(".success.message").should("contain", "You added Push It Messenger Bag to your ")

        
    });
    
});
