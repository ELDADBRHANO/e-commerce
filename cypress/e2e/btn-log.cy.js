describe('Tests for btn', () => {
  it('check btn txt', () => {
    cy.visit('http://localhost:3000')
    cy.get('.d-grid.mt-3 > .btn').contains("Log In")
  })

  it("check if btn have class",()=>{
    cy.visit('http://localhost:3000')
    cy.get('.d-grid.mt-3 > .btn')
    .should('have.class', 'btn btn-primary')
  })
})