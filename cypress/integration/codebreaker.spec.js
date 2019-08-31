describe('codebreaker testing',function(){
    it('Set secret',function(){
        //Arrange
        cy.visit('http://localhost:4200')

        //Act
        cy.get('*[name="inputCodebreaker"]')
            .type("1234")
        cy.get('#btnSetSecret').click()

        //Assert
        cy.get('lblSetSecret')
            .should('have.value','OK, let the game begin')
        
    })
    it('Guess',function(){
        //Arrange
        cy.visit('http://localhost:4200')

        //Act
        cy.get('*[name="inputCodebreaker"]')
            .type("1234")
        cy.get('#btnGuess').click()

        //Assert
        cy.get('lblSetSecret')
            .should('have.value','XXXX')
        
    })
})