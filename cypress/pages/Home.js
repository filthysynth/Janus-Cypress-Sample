class Home {
    visit() {
        cy.visit("/")
    }

    typeSearchBox(text) {
        return cy.get('#twotabsearchtextbox').type(text)
      }

    getSearchButton() {
        return cy.get('#nav-search-submit-text')
    }

    getSearchResults(product_unique_string) {
        return cy.contains(product_unique_string)
    }

    getSearchResultsBar() {
        return cy.get("[data-component-type=s-result-info-bar]")
    }
}

module.exports = Home