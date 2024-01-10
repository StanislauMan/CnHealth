///<reference types='cypress' />

import communityUsers from '../fixtures/communityUsers.json';
import login from '../fixtures/login.json';


describe('Login to the CognusHealth', () => {

    it.only('Test login using a command.js', () => {
        cy.login(communityUsers.vicePresident, Cypress.env('PASSWORD'));
    })
})