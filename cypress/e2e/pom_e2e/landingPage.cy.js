///<reference types='cypress' />

import LandingPage from "../../pageObjects/LandingPage";

describe('LandingPage', () => {

    beforeEach(() => cy.visit('/'))

    const landingPage = new LandingPage();

    it('Verify header items', () => {
        landingPage.checkCogHealthHeaderLogo()
                   .checkAboutBtnHeader()
                   .checkWhoWeServeBtnHeader()
                   .checkContactUsBtnHeader()
                   .checkLogInBtn();
    });

    it('Verify the landing page content', () => {
        landingPage.clickAboutBtnHeader()
                   .clickWhoWeServeBtnHeader()
                   .clickContactUsBtnHeader();
    });

});