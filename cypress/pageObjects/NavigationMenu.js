import SettingsPage from "./ProfilePage";

class NavigationMenu {
    getSettingsItemLink = () => cy.get('.container-portal_content-container > .container-portal__tabs > .container-portal__tabs_bottom > .nav-link-default[href="/settings"]');

    clickSettingsItemLink () {
        this.getSettingsItemLink().click();

        return SettingsPage;
    }
}
export default NavigationMenu;