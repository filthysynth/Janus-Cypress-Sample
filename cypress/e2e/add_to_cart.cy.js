import Standard_Product from "../pages/Standard_Product"
import Cart from "../pages/Cart"

const STANDARD_PRODUCT = new Standard_Product()
const CART = new Cart()

describe('Add to Cart Test for Amazon', () => {
  beforeEach(() => {
    STANDARD_PRODUCT.visit()
  })
  
  it('Adds the product to cart and asserts it is there', () => {
    STANDARD_PRODUCT.getBuyNewOption().click()
    STANDARD_PRODUCT.getAddToCartButton().click()
    CART.verifyOnCartPage()
    CART.getCartMessagingContainer().contains("Added to Cart").should("be.visible");
  })
})