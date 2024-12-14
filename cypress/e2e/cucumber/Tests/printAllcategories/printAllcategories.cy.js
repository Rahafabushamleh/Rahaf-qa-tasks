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
        for(let i=0;i<items.length;i++){
            cy.wrap(items[i])
            .invoke('text')
            .then((text)=>{
            cy.log(`Category ${i + 1}: ${text.trim()}`)
        })
    }
    })
})