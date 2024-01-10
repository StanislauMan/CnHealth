import landing from "../fixtures/landing.json";

class LandingPage {
    getCogHealthHeaderLogo = () => cy.get('.landing-page__header__logo');
    getAboutBtnHeader = () => cy.get('.typography').contains('About');
    getWhoWeServeBtnHeader = () => cy.get('.typography').contains('Who we serve');
    getContactUsBtnHeader = () => cy.get('.typography').contains('Contact us');
    getLogInBtn = () => cy.get("button[type='button']").contains('Log in');
    getContactUsBtn = () => cy.get("button[type='button']").contains('Contact Us');
    getContactUsBtnForm = () => cy.get('button[type="submit"]');
    getContactUsForm = () => cy.get('#contact-us');
    getLandingPageFooter = () => cy.get('.landing-page__footer');
    getWhoWeServeText = () => cy.get('.landing-page__who-we-are__title');
    getAboutText = () => cy.get('.landing-page__banner__action__title');
    getFirtsnameInput = () => cy.get('#first_name');
    getLastnameInput = () => cy.get('#last_name');
    getEmailInput = () => cy.get('#email');
    getPhoneInput = () => cy.get('#phone_number');
    getOrganizationInput = () => cy.get('#organization_name');
    getInquiryInput = () => cy.get('#text');

    
    checkAboutBtnHeader () {
        this.getAboutBtnHeader().should('be.visible');

        return this;
    };

    checkWhoWeServeBtnHeader () {
        this.getWhoWeServeBtnHeader().should('be.visible');

        return this;
    };

    checkContactUsBtnHeader () {
        this.getContactUsBtnHeader().should('be.visible');

        return this;
    };

    checkCogHealthHeaderLogo () {
        this.getCogHealthHeaderLogo().should('be.visible');

        return this;
    };

    checkLogInBtn () {
        this.getLogInBtn().should('be.visible');

        return this;
    };

    clickAboutBtnHeader () {
        this.getAboutBtnHeader().click();
        this.getAboutText().should('have.text', 'Build your own Community of Value Based Contracting');
        
        return this;
    };

    clickWhoWeServeBtnHeader () {
        this.getWhoWeServeBtnHeader().click();
        this.getWhoWeServeText().should('have.text' ,'Who we serve');

        return this;
    };

    clickContactUsBtnHeader () {
        this.getContactUsBtnHeader().click();
        cy.wait(3000);
        this.getContactUsForm().should('be.visible');

        return this;
    }

    
}
export default LandingPage; 