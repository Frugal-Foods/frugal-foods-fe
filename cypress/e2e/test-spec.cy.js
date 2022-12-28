
describe('Frugal Foods E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('should show user the home page', () => {
    cy.contains('h3', 'Find Grocery Stores Near You:')
  })

  it('should show header banner', () => {
    cy.get('.header-container').should('be.visible')
  })

  it('should show user a logo', () => {
    cy.get('.App').find("img").should('be.visible')
  })

  it('should have Find Stores button', () => {
    cy.contains('.find-store-container > button', 'Find Stores')
  })

  it('should have a stores button', () => {
    cy.contains('.stores', 'Stores')
  })

  it('should have a reset button', () => {
    cy.contains('.reset-btn', 'Reset All')
  })

  it('should contain a footer', () => {
    cy.contains(':nth-child(1) > .student-name', 'Danielle Sweeny')
  })

  it('should have a button to go back to search page', () => {
    cy.get('.search').should('have.attr', 'href', '/search')
  })

  it('should allow user to view store cards near them', () => {
    cy.get("input").type("80206");
    cy.intercept("https://frugal-foods-be.fly.dev/graphql", {
      fixture: "stores.json",
    }).as("stores");
    cy.get(".find-stores-btn").click();
    cy.get(".individual-store-card").contains(
      "Test King Soopers - CAPITOL HILL"
    );
  })
})

describe('Search Page', () => {
  beforeEach(() => {
    cy.intercept('https://frugal-foods-be.fly.dev/graphql', {
      fixture: 'searchItems.json'
    }).as('searchItems')
    cy.visit('http://localhost:3000/search/')
  });

  it('should allow user to navigate to search page', () => {
    cy.get('.search').click();
    cy.get('input').type('banana')
    cy.get('.search-page > :nth-child(1) > button').click()
    cy.contains(':nth-child(1) > .store-item-card', 'Organic Banana')
    cy.contains(':nth-child(1) > .store-item-card', 'King Soopers')
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

  it('should allow user to view store total', () => {
    cy.get('h3').contains('Total: $1.38')
  })

  it('should show store name for each individual store cart', () => {
    cy.contains("h2", "King Soopers - CAPITOL HILL")
  })

  it('should show store address for each individual store cart', () => {
    cy.get(".cart-container > :nth-child(2)").contains(
      "1155 E 9Th Ave, Denver, CO, 80218"
    )
  })

  it('should have a cart item from user choice', () => {
    cy.get('.individual-cart-item').contains('h4', 'Organic Banana')
  })

  it('should have a button to go back to search page', () => {
    cy.get('.search').should('have.attr', 'href', '/search')
  })

  it('should have a item total from user choice', () => {
    cy.get('.individual-cart-item > p').contains('Item Total: $1.38')
  })

  it('should take user to cart page on cart image click', () => {
    cy.get('.header-openBasket > svg').click()
      .url().should('include', '/cart')
  })

  it('should have a product image', () => {
    cy.get('.individual-cart-item').find("img").should('be.visible')
  })

  it('should have a delete button', () => {
    cy.get('.delete-btn').click()
  })

})


