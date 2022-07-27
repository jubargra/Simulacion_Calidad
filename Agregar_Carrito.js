describe('Add to cart', () => {
    it('It adds an item to the cart', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('https://www.amazon.com.mx/Echo-Dot-3ra-generaci%C3%B3n-inteligente/dp/B07PDHSVQ9/ref=sr_1_2?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=T3R1NMRUXK1T&keywords=alexa&qid=1658892674&sprefix=alexa%2Caps%2C164&sr=8-2')

        cy.get('#add-to-cart-button').click()
    })
})