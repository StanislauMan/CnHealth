import TwoFaPage from "./TwoFaPage";

class LoginPage {
    getEmailField = () => cy.get('#email');
    getPasswordField = () => cy.get('#password');
    getLoginBtn = () => cy.get('button[type="submit"]');

    typeUserEmail (email) {
        this.getEmailField().type(email);

        return this;
    }

    typeUserPassword(password) {
        this.getPasswordField().type(password);

        return this;
    }

    checkLoginBtnIsDisabled() {
        this.getLoginBtn().should('be.disabled');

        return this;
    }

    checkLoginBtnIsNotDisabled() {
        this.getLoginBtn().should('not.be.disabled');

        return this;
    }

    clickLoginBtn() {
        this.getLoginBtn().click();
        
        return TwoFaPage;
    }
}
export default LoginPage;