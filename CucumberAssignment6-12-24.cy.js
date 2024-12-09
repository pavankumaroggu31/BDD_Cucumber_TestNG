import { Given,And,Then } from "cypress-cucumber-preprocessor/steps/index";

Given('URL',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form?');
})

And("username and pasword",()=>{
    
    cy.get('[placeholder="First Name"]').type('Pavan');
    
    cy.get('[placeholder="Last Name"]').type('Kumar');

    cy.get('[placeholder="Last Name"]').type('pavan@gmail.com');
   
    cy.get('[placeholder="9876543210"]').type('9059007119');
   
    cy.get('[rows="2"]').type('This is Testing')

})

Then('click on button',()=>{
    cy.get('[value="submit"]').click();
})