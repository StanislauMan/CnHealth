import AdminSmsCodePage from "./AdminSmsCodePage";

class AdminWelcomePage {
    getActionSmsCodeMenuItem = () => cy.get('a[href="/admin/apps/actionsmscode/"]').contains('Action sms codes');


    clickActionSmsCodeMenuItem() {
        this.getActionSmsCodeMenuItem().click();

        return AdminSmsCodePage;
    }
}
export default AdminWelcomePage;