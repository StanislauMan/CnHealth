///<reference types='cypress' />

import NavigationMenu from "../../pageObjects/NavigationMenu";
import SettingsPage from "../../pageObjects/ProfilePage";

describe('Settings edit', () => {

    beforeEach(() => {
        cy.login(Cypress.env('VicePr'), Cypress.env('PASSWORD'));
        cy.visit('/dashboard');
        
    });

    const navigationMenu = new NavigationMenu();
    const settingsPage = new SettingsPage();

    it('Open Settings page', () => {
        navigationMenu.clickSettingsItemLink()
        settingsPage.checkSettingsPageTitle()
                    .checkTabsBar();
    });

});