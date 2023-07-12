class Standard_Product {
    visit() {
        return cy.visit("https://www.amazon.com/Gorilla-Bigfoot-Figurine-Statue%EF%BC%8CMiniature-Accessory/dp/B094FWMRD6")
    }

    getBuyNewOption() {
        return cy.get('#newAccordionRow_1')
      }

    getAddToCartButton() {
        return cy.get("#add-to-cart-button")
    }
}

module.exports = Standard_Product