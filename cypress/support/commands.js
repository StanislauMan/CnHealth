// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-real-events";
import dashboardPage from '../fixtures/dashboardPage.json';
import LoginPage from '../pageObjects/LoginPage';
import TwoFaPage from '../pageObjects/TwoFaPage';

Cypress.Commands.add('loginToAdmin', () => {
  cy.visit('/admin');
  cy.get("input[name='username']").type(Cypress.env('ADMIN_EMAIL'));
  cy.get("input[name='password']").type(Cypress.env('PASSWORD'));
  cy.get("input[type='submit']").click();
  cy.title().should('include', 'Welcome to Cognushealth admin panel');
});


const loginPage = new LoginPage();
const twoFaPage = new TwoFaPage();

Cypress.Commands.add('loginToWeb', (userEmail, devPassword) => {
  cy.visit('/login');
  loginPage.checkLoginBtnIsDisabled()
    .typeUserEmail(userEmail)
    .typeUserPassword(devPassword)
    .checkLoginBtnIsNotDisabled()
    .clickLoginBtn();

  cy.wait(2000);
  cy.request('/admin/apps/actionsmscode/')
    .then(html => {
      const otpLine = html.body.match(/>\d{6}</);
      return otpLine[0].substring(1, 7);
    }).then(otp => {
      twoFaPage.typeTwoFaCode(otp);
    })
  cy.url().should('be.eql', dashboardPage.url);
  cy.get('.container__title').should('be.visible');
});


Cypress.Commands.add('login', (email, password) => {
  cy.session([email, password], () => {
    cy.loginToAdmin();
    cy.loginToWeb(email, password);
  }, {
    cacheAcrossSpecs: true
  })
})