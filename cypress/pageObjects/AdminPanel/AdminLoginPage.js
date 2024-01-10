import AdminWelcomePage from "./AdminWelcomePage";

class AdminLoginPage {
    getAdminEmailField = () => cy.get("input[name='username']");
    getAdminPasswordField = () => cy.get("input[name='password']");
    getLoginBtn = () => cy.get("input[type='submit']");

    typeAdminEmail(email) {
        this.getAdminEmailField().type(email);

        return this;
    }

    typeAdminPassword(password) {
        this.getAdminPasswordField().type(password);

        return this;
    } 

    clickLoginBtn() {
        this.getLoginBtn().click();

        return AdminWelcomePage;
    }
}
export default AdminLoginPage;