describe('Cheat at games', () => {

    it('Beats QWOP', () => {
        cy.visit('http://foddy.net/Athletics.html?webgl=true')
        cy.wait(2000)
        cy.get('#gameContent').click()
        cy.wait(100)
        cy.get('#gameContent').trigger('keydown', { keyCode: 87, release: false })
        cy.wait(1000)
        cy.get('#gameContent').trigger('keyup', { keyCode: 87, release: false })

        for (let i = 0; i < 10000; i++) {
            cy.get('#gameContent').trigger('keydown', { keyCode: 81, release: false })
            cy.wait(250)
            cy.get('#gameContent').trigger('keyup', { keyCode: 81, release: false })
            for (let j = 0; j < 7; j++) {
                cy.get('#gameContent').trigger('keydown', { keyCode: 87, release: false })
                cy.get('#gameContent').trigger('keyup', { keyCode: 87, release: false })
            } cy.get('#gameContent').trigger('keydown', { keyCode: 87, release: false })
            cy.wait(250)
            cy.get('#gameContent').trigger('keyup', { keyCode: 87, release: false })
        }
    })

    it('Is the fastest typist around!', () => {
        cy.visit('https://10fastfingers.com/typing-test/english')
        cy.get('#ez-accept-all').click()
            for(let i=0; i <=380; i++) {
                cy.get('span[wordnr="'+i+'"]')
                    .then(el => {
                        cy.get('#inputfield').type(
                            el.text()+ ' '
                        )
                    })
            }
    })

})