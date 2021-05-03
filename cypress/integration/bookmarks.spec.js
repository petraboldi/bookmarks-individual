describe('Bookmarks page', function(){
    beforeEach(()=>{
        cy.task('resetDb')
        cy.visit('/bookmarks')
    })
    it('adding a bookmark', function(){
        cy.get('#url-input').type('www.instagram.com')
        cy.get('#save-button').click()
        cy.contains('www.instagram.com')
    })
       it('deleting a bookmark', function(){
        cy.get('#url-input').type('www.instagram.com')
        cy.get('#save-button').click()
        cy.get('#delete-0').click()
        cy.get('#url-0').should('not.exist')
    })
})