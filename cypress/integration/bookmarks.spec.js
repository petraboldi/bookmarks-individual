describe('Bookmarks page', function(){
    beforeEach(()=>{
        cy.task('resetDb')
        cy.visit('/bookmarks')
    })
    it('adding a bookmark', async function(){
        cy.get('#url-input').type('www.instagram.com')
        cy.get('#submit-button').click()
        cy.contains('www.instagram.com')
    })
})