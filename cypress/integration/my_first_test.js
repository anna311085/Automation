///<reference types="cypress"/>

it('wwechamions test', function()
{
    cy.viewport(1280, 720)
    cy.visit('https://wwechampions.com')
   // cy.get('.icon-users-group').click()
    cy.get('.right-sidebar-layout__header > :nth-child(1) > :nth-child(1)').click()
   

    cy.get('.scopely-login > .d-flex > .font-weight-semi-bold').click()
    cy.get('#input28').type('sergey.chavushyan+6@inomma.com{enter}')
    cy.get('#input36').type('094706476Ch{enter}')
    cy.contains('Sign in').click()
   
    cy.wait(12000)
    cy.get('[data-id="account_profile_settings_show_button"]').click()
     cy.wait(5000)
     cy.contains('Change Avatar').click()
     cy.get('.ml-10').click()
     cy.get('[data-id="select_5_frame"]').click()
     cy.wait(12000)
     cy.get('.w-100 > .h5',{timeout:6000}).click()
     cy.wait(12000)
     cy.get('[data-id="account_profile_settings_show_button"]').click()
     cy.contains('Logout').click()

    
})