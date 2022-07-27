describe('Search Item', () => {
    it('It searches an item specified in the search bar', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('https://www.amazon.com.mx/')
        cy.get('#twotabsearchtextbox')
            .type('monitores')
            .should('have.value', 'monitores')
            cy.get('#nav-search-submit-button').click()
        })
    })