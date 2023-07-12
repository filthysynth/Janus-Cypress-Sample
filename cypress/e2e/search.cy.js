import Home from "../pages/Home"

const HOME = new Home()
let product_name = "Miniature Bigfoot and Gnomes"
let product_unique_string = "Bigfoot and Gnomes for The Fairy a Large Garden Accessory,"
let product_asin = "B094FWMRD6"

describe('Search Tests from Amazon Home Page', () => {
    beforeEach(() => {
        HOME.visit()
      })
    
    it('Searches by product name and verifies search results', () => {
        HOME.typeSearchBox(product_name)
        HOME.getSearchButton().click()
        HOME.getSearchResults(product_unique_string).should('exist')
    });

    it('Searches by ASIN and verifies a single result', () => {
        HOME.typeSearchBox(product_asin)
        HOME.getSearchButton().click()
        HOME.getSearchResultsBar().contains("1 result").should('be.visible') 
    });
});