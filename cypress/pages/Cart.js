class Cart {
    visit() {
        return cy.visit("https://www.amazon.com/cart/")
    }

    verifyOnCartPage() {
        return cy.url().should("include", "/cart/")
      }

    getCartMessagingContainer() {
        return cy.get("#sw-atc-details-single-container")
    }
}

module.exports = Cart