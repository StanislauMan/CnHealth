class HealthSystemUsers {

    getSearchField = () => cy.get('.ant-input')

    checkSearchField() {
        this.getSearchField().should('be.visible').and('be.enabled')

        return this;
    }

}
export default HealthSystemUsers