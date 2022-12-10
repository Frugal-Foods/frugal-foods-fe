describe('Frugal Foods E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it.skip('should show user the home page', () => {
    cy.contains('h3', 'Find Grocery Stores Near You')
  })

  it('should not show a different page', () => {
    cy.get()
      .should('not.exist', 'hello world')
  })

  it('Should have Find Stores button', () => {
    cy.contains('.find-store-container > button', 'Find Stores')
  })
})

// cy.intercept('POST', 'https://frugal-foods-be.fly.dev/graphql', (req) => {
//   if (req.body.operationName === 'GetStores') {
//     req.alias = 'GetStores';
//     req.continue();
//   }
//  cy.visit('http://localhost:3000');
    // cy.wait('@GetStores')
// })