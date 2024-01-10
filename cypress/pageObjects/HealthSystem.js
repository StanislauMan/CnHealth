class HealthSystem {

    getHealthSystemTitle = () => cy.get('.hs-details__title')

    checkHealthSystemTitle() {
        this.getHealthSystemTitle().should('be.visible')

        return this;
    }

}
export default HealthSystem