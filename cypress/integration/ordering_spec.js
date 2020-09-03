describe('Test', () => {
    it('visit localhost:3000', () => {
        cy.visit('http://localhost:3000/')
    })

    it('should add items to cart', function () {
        cy.get('.card-add-btn').eq(0).click()
        cy.get('.card-add-btn').eq(3).click()
        cy.get('.card-add-btn').eq(4).click()
    });

    it('should change currency', function () {
        cy.get('#currencyEuro').check({force: true})
    });

    it('should visit /cart', function () {
        cy.get('a[href="/cart"]').click()
    });

    it('should enhance amount of second item', function () {
        cy.get('.list-group>li')
            .eq(1)
            .find('.btn-group .btn')
            .eq(0)
            .click()
    });

    it('should remove first item from cart', function () {
        cy.get('.list-group>li')
            .eq(0)
            .find('button')
            .click()
    });
})