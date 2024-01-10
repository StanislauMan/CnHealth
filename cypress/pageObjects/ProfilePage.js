import HealthSystemUsers from "./HealthSystemUsers";
import HealthSystem from "./HealthSystem";

class ProfilePage {

    getSettingsPageTitle = () => cy.get('.container__title');
    getProfileTab = () => cy.get('.ant-menu-item').contains('Profile');
    getHealthSystemUsersTab = () => cy.get('.ant-menu-item').contains('Health System users');
    getHealthSystemTab = () => cy.get('li.ant-menu-item:nth-child(8)');
    getUserAvatar = () => cy.get('.ant-upload-select-picture-card')
    getUserAvatarHover = () => cy.get('.user-form_avatar_hover-cover');
    getUserAvatarUpload = () => cy.get('input[id="avatar"]');
    getUserAvatarImg = () => cy.get('.ant-upload > .ant-avatar-group > .ant-avatar > img');
    getFirstNameField = () => cy.get('#first_name');
    getFirstNameFieldError = () => cy.get('.ant-form-item-explain-error').contains('First');
    getLastNameField = () => cy.get('#last_name');
    getLastNameFieldError = () => cy.get('.ant-form-item-explain-error').contains('Last');
    getEmailField = () => cy.get('#email');
    getPhoneNumberField = () => cy.get('#phone_number');
    getRoleField = () => cy.get('#role');
    getHealthSystemField = () => cy.get('#health_system');
    getAnnualSavingsField = () => cy.get('#target_amount');
    getAnnualSavingsIcon = () => cy.get('.user-form_goal_label > svg');
    getAnnualSavingsTooltip = () => cy.get('.ant-tooltip-open');
    getAnnualSavingsTooltipText = () => cy.get('.ant-tooltip-inner');
    getContactPersonDetails = () => cy.get('.hs-details_icon-name');
    getCancelBtn = () => cy.get('button[type="button"]').contains('cancel');
    getSaveBtn = () => cy.get('button[type="submit"]');
    getDiscardChangesModal = () => cy.get('.ant-modal-content');
    getBackToEditBtn = () => cy.get('button[type="button"]').contains('back to edit');
    getDiscardChangesBtn = () => cy.get('button[type="button"]').contains('discard changes');


    checkSettingsPageTitle() {
        this.getSettingsPageTitle().should('be.visible');

        return this;
    }

    checkTabsBar () {
        this.getProfileTab().should('be.visible');
        this.getHealthSystemUsersTab().should('be.visible');
        this.getHealthSystemTab().should('be.visible');

        return this;
    }

    checkUserAvatarHover() {
        this.getUserAvatarHover().should('not.be.visible');
        this.getUserAvatar().realHover();
        this.getUserAvatarHover().should('be.visible');

        return this;
    }

    checkUserAvatarUpload(imgPath) {
        const imgName = imgPath.substring(imgPath.lastIndexOf('\\') + 1)
        cy.intercept('POST', '/api/v1/files/profile_image/').as('profileImage')
        this.getUserAvatarUpload().selectFile(imgPath, {force: true})
        cy.wait('@profileImage')
        this.getUserAvatarImg().should('have.attr', 'src').and('include', imgName)

        return this;
    }

    checkFirstNameField() {
        this.getFirstNameField().should('be.visible').and('be.enabled');

        return this;
    }

    checkLastNameField() {
        this.getLastNameField().should('be.visible').and('be.enabled');

        return this;
    }

    checkEmailField() {
        this.getEmailField().should('be.visible').and('be.disabled');

        return this;
    }

    checkPhoneNumberField() {
        this.getPhoneNumberField().should('be.visible').and('be.disabled');

        return this;
    }

    checkRoleField() {
        this.getRoleField().should('be.visible').and('be.disabled');

        return this;
    }

    checkHealthSystemField() {
        this.getHealthSystemField().should('be.visible').and('be.disabled');

        return this;
    }

    checkAnnualSavingsField(tooltipText) {
        this.getAnnualSavingsField().should('be.visible').and('be.disabled');
        this.getAnnualSavingsTooltip().should('not.exist');
        this.getAnnualSavingsIcon().realHover();
        this.getAnnualSavingsTooltip().should('exist');
        this.getAnnualSavingsTooltipText().should('have.text', tooltipText);
        
        return this;
    }

    checkDiscardChangesModalAppears() {
        this.getFirstNameField().type('t');
        this.getCancelBtn().click();
        this.getDiscardChangesModal().should('be.visible');

        return this;
    }


    checkCancelBtn(fieldData) {
        this.getFirstNameField().then($txt => {
            fieldData = $txt.val();
        }).then(() => {
            this.checkDiscardChangesModalAppears();
            this.getDiscardChangesBtn().click();
        }).then(() => {
            this.getFirstNameField().should('have.value', fieldData);
        });

        return this;
    }


    checkBackToEditBtn(text) {
        this.getLastNameField()
            .clear()
            .type(text)
        this.getCancelBtn().click();
        this.getBackToEditBtn().click();
        this.getLastNameField().should('have.value', text);

        return this;
    }


    checkInputFieldError () {
        this.getFirstNameField().clear()
        this.getFirstNameFieldError().should('be.visible')

        this.getLastNameField().clear()
        this.getLastNameFieldError().should('be.visible')

        return this;
    }

    clickHealthSystemUsersTab() {
        this.getHealthSystemUsersTab().click()

        return HealthSystemUsers;
    }
    
    clickHealthSystemTab() {
        this.getHealthSystemTab().click()

        return HealthSystem;
    }
}
export default ProfilePage;