class TwoFaPage {
    getTwoFaField = () => cy.get('.fa-code-input:nth-child(1)');

    typeTwoFaCode(otp){
        this.getTwoFaField().type(otp);

    
    } 
}
export default TwoFaPage;