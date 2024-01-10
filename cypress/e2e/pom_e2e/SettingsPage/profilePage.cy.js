///<reference types='cypress' />

import NavigationMenu from "../../../pageObjects/NavigationMenu";
import ProfilePage from "../../../pageObjects/ProfilePage";
import HealthSystemUsers from "../../../pageObjects/HealthSystemUsers";
import HealthSystem from "../../../pageObjects/HealthSystem";
import profilePageData from '../../../fixtures/profilePage.json';

describe('Profile page edit', () => {

    beforeEach(() => {
        cy.login(Cypress.env('VicePr'), Cypress.env('PASSWORD'));
        cy.visit('/dashboard');
        
    });

    const navigationMenu = new NavigationMenu();
    const profilePage = new ProfilePage();
    const healthSystemUsers = new HealthSystemUsers();
    const healthSystem = new HealthSystem();

    it('Verify the Profile page attributes', () => {
        navigationMenu.clickSettingsItemLink()
        profilePage.checkSettingsPageTitle()
                   .checkTabsBar()
                   .checkUserAvatarHover()
    });

    it('Verify the Profile page fields', () => {
        navigationMenu.clickSettingsItemLink()
        profilePage.checkFirstNameField()
                   .checkLastNameField()
                   .checkEmailField()
                   .checkPhoneNumberField()
                   .checkRoleField()
                   .checkHealthSystemField()
                   .checkAnnualSavingsField(profilePageData.annualTooltipText);

    })


    it('Verify that the "Descard changes" modal appears', () => {
        navigationMenu.clickSettingsItemLink()
        profilePage.checkDiscardChangesModalAppears()
    })


    it('Verify the unsaved changes by "Discard changes" modal', () => {
        navigationMenu.clickSettingsItemLink();
        profilePage.checkCancelBtn();
    })


    it('Verify the "Back to edit" button', () => {
        navigationMenu.clickSettingsItemLink();
        profilePage.checkBackToEditBtn('test body');
    })
    

    it('Verify the error appears when the input fields are empty', () => {
        navigationMenu.clickSettingsItemLink();
        profilePage.checkInputFieldError()
    })


    it('Verify that the user can upload a user avatar', () => {
        navigationMenu.clickSettingsItemLink()
        profilePage.checkUserAvatarUpload('cypress\\fixtures\\images\\pexels-1.45mb.jpg')

    })

    it('Verify that the "Health System users" page is opened', () => {
        navigationMenu.clickSettingsItemLink()
        profilePage.clickHealthSystemUsersTab()
        healthSystemUsers.checkSearchField()
    })


    it('Verify that "Health System" tab is opened', () => {
        navigationMenu.clickSettingsItemLink()
        profilePage.clickHealthSystemTab()
        healthSystem.checkHealthSystemTitle()
    })

});