/// <reference types="cypress" />
import { Given ,When , Then, And } from "cypress-cucumber-preprocessor/steps";

Given("The user opens Magento website",()=>{
    cy.visit("/")
})

When("The user clicks on What's New on the navbar",()=>{
    cy.contains("What's New").click()
})

Then("Categories in the New In Women section will be printed",()=>{
    cy.get("ul.items").eq(1).find("li.item").then((items)=>{
        const numberOfCategories = items.length;
        let numPrintedCategories= 0;
        cy.wrap(items).each((item, index) => {
            cy.wrap(item)
            .invoke('text')
            .then((text)=>{
                // categoriesText.push(text.trim());
                cy.log(`Category ${index + 1}: ${text}`)
                numPrintedCategories++;
            });
        }).then(() => {
                cy.wrap(numPrintedCategories).should('eq', numberOfCategories);  
            });
        });
      });