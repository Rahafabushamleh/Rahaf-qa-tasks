/// <reference types = "cypress" />


describe('Login Functionality', () => {


    it('Verify that all fields in Create New Account form are visible', () => {
        cy.visit("/customer/account/create/")
        cy.contains("span","Create New Customer Account").should("be.visible")
        cy.contains("span","Personal Information").should("be.visible")
        cy.contains("First Name").should("be.visible")
        cy.get("#firstname").should("be.visible")
        cy.contains("span","Last Name").should("be.visible")
        cy.get("#lastname").should("be.visible")
        cy.contains("span","Sign-in Information").should("be.visible")
        cy.contains("span","Email").should("be.visible")
        cy.get("#email_address").should("be.visible")
        cy.contains("span","Password").should("be.visible")
        cy.get("#password").should("be.visible")
        cy.get("#password-strength-meter").should("be.visible")
        .and("contain","Password Strength")
        cy.contains("span","No Password ").should("be.visible")
        cy.contains("span","Confirm Password").should("be.visible")
        cy.get("#password-confirmation").should("be.visible")
        cy.get("[type=submit]").last().should("be.visible")

        cy.get(".fieldset.create.account").should("have.attr","data-hasrequired","* Required Fields")


    });


    it.only('Check Functionality of Create New Account button - Only happy scenario', () => {
        cy.visit("/customer/account/create/")
        const emailNum=Math.floor(Math.random()*1000)
        cy.get("#firstname").type("Rahaf")
        cy.get("#lastname").type("Abushamleh")
        cy.get("#email_address").type("rahaf"+emailNum+"@gmail.com")
        cy.get("#password").type("rhf098/R")
        cy.get("#password-confirmation").type("rhf098/R")
        cy.get("button").contains("Create an Account").click()
        cy.wait(1000)//الحملة الي تحت هاي بتوخد وقت لتطلع ما بتطلع ورا بس انتقل للصفحة التالية ، فاعطيته وقت زيادة مشان ما يعمل فيل
        cy.get("[role=alert").should("be.visible").and("contain","Thank you for registering with Main Website Store.")
        cy.get(".page-title").should("contain","My Account")
        cy.get(".logged-in").first().should("contain","Welcome, Rahaf Abushamleh!")
        cy.url().should('eq',"https://magento.softwaretestingboard.com/customer/account/")
        //الرابط بجيبه من صفحة السايبرس موجود فوق مكان ما فينا نجيب السيليكتور

    });
    

   
   
    
    
});

