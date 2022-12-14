
describe('Frugal Foods E2E', () => {
  beforeEach(() => {
    cy.intercept('https://frugal-foods-be.fly.dev/graphql', {
      fixture: 'userStores.json'
    }).as('userStores')
    cy.visit('http://localhost:3000/')
  });

  it('should show user the home page', () => {
    cy.contains('h3', 'Find Grocery Stores Near You')
  })

  it('should show user a logo', () => {
    cy.get('.App').find("img").should('be.visible')
  })

  it('should not show a different page', () => {
    cy.get()
      .should('not.exist', 'hello world')
  })

  it('Should have Find Stores button', () => {
    cy.contains('.find-store-container > button', 'Find Stores')
  })
  
  it('Should have a stores button', () => {
    cy.contains('.stores','Stores')
  })

  it('Should contain a footer', () => {
    cy.contains('.footer > :nth-child(1)', 'Frugal Foods')
  })

  it('should allow user to get a store', () => {
    cy.intercept('https://frugal-foods-be.fly.dev/graphql', {
      fixture: "stores.json"
    }).as('stores')
    cy.get('input').type('80206');
    cy.get('.find-stores-btn').click()
    cy.intercept('https://frugal-foods-be.fly.dev/graphql', {
   fixture: "userStores.json"
 }).as('userStores')
    cy.get(':nth-child(1) > .individual-store-card')
    cy.get(':nth-child(1) > .individual-store-card > :nth-child(2)').contains("Test King Soopers - CAPITOL HILL")
    // cy.get(':nth-child(1) > .individual-store-card > :nth-child(3)').contains("Test King Soopers - MAYFAIR")
  })
 
})

  // it('should allow user to get a different store', () => {
  //   cy.intercept("POST", 'https://frugal-foods-be.fly.dev/graphql', (req) => {
  //     console.log(req.body)
  //     req.alias = 'GetStores'
  //   });
  //   cy.visit('http://localhost:3000/')
  //   cy.get('input').type('80206');
  //   cy.get('.find-stores-btn').click()
  //   cy.wait('@GetStores')
  //   cy.get('@GetStores')
  //   cy.contains(':nth-child(1) > .individual-store-card', 'King Soopers - CAPITOL HILL')
  //   cy.contains(':nth-child(3) > .individual-store-card', 'King Soopers - Leetsdale')
  // })
  
  describe('Search Page', () => {
    beforeEach(() => {
      cy.intercept('https://frugal-foods-be.fly.dev/graphql', {
        fixture: 'searchItems.json'
      }).as('searchItems')
      cy.visit('http://localhost:3000/search')
    });

  it('should allow user to navigate to search page', () => {
    cy.get('.search').click();
    cy.get('input').type('banana')
    cy.get('.search-page > :nth-child(1) > button').click()
    cy.contains(':nth-child(1) > .store-item-card', 'Organic Banana')
    cy.contains(':nth-child(1) > .store-item-card', 'King Soopers')
    cy.get('.footer > :nth-child(2)').contains('Creators GitHub')
  })

  it('should allow user to add items to cart', () => {
    cy.get('.search').click();
    cy.get('input').type('banana')
    cy.get('.search-page > :nth-child(1) > button').click()
    cy.get('.quantity-select > :nth-child(3)').click()
    cy.get('span').contains('2')
    cy.get('.quantity-select > :nth-child(1)').click()
    cy.get('span').contains('1')
  })
  it('should have a button to go back to home page', () => {
    cy.get('.stores').should('have.attr', 'href', '/')
  })

})

  describe('Cart Page', () => {
    beforeEach(() => {
      cy.intercept('https://frugal-foods-be.fly.dev/graphql', {
        fixture: 'userStoreItems.json'
      }).as('userStoreItems') 
      cy.visit('http://localhost:3000/cart')
    });
  

  it('should allow user to go to the cart page', () => {
    cy.get('h3').contains('Total')
  })

  it('should have a item from user choice', () => {
    cy.get('.individual-cart-item').contains('h4', 'Organic Banana')
  })

  it('should have a item from user choice', () => {
    cy.get('.individual-cart-item > p').contains('Item Total')
  })

  it('should have a delete button', () => {
    cy.get('.delete-btn').click()
  })

  it('should have a product image', () => {
    cy.get('.individual-cart-item').find("img").should('be.visible')
  })

  })


  // it.skip('should allow user to get a delete store', () => {
  //   cy.intercept("POST", 'https://frugal-foods-be.fly.dev/graphql', (req) => {
  //     console.log(req.body)
  //     req.alias = req.body.operationName
  //   });
  //   cy.visit('http://localhost:3000/')
  //   cy.get('input').type('80206');
  //   cy.get('.find-stores-btn').click()
  //   cy.wait('@GetStores')
  //   cy.get('@GetStores')
  //     .its('response.body.data.stores')
  //     .should('have.length', 3)
  //   cy.get(':nth-child(1) > .individual-store-card > input').click()
  //   cy.get(':nth-child(1) > .individual-store-card > input').click()
  //   cy.wait('@destroyUserStore')
  //   cy.get('@destroyUserStore')

  // })

// })


// cy.intercept('POST', 'https://frugal-foods-be.fly.dev/graphql', (req) => {
//   if (req.body.operationName === 'GetStores') {
//     req.alias = 'GetStores';
//     req.continue();
//   }
//  cy.visit('http://localhost:3000');
    // cy.wait('@GetStores')