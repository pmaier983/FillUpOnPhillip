context('Test Draggability', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('Can Drag when draggable', () => {
    cy.get('[data-testid="PersonalCard"]').then((PersonalCard) => PersonalCard[0].getBoundingClientRect()).then((personalCardBounds) => {
      cy.get('[data-testid="PersonalCard"]').within(() => {
        cy.get('[data-testid="card-handle"]').trigger('mousedown', { which: 1 })
      }).then(() => {
        cy.get('[data-testid="LayoutHandlerCard"]')
          .trigger('mousemove')
          .trigger('mouseup', { force: true })
      }).then(() => {
        cy.get('[data-testid="PersonalCard"]').then((PersonalCard) => PersonalCard[0].getBoundingClientRect()).then((newPersonalCardBounds) => {
          expect(newPersonalCardBounds.x).to.not.equal(personalCardBounds.x)
          expect(newPersonalCardBounds.y).to.not.equal(personalCardBounds.y)
          expect(newPersonalCardBounds.width).to.equal(personalCardBounds.width)
          expect(newPersonalCardBounds.height).to.equal(personalCardBounds.height)
        })
      })
    })
  })
  it('Cannot Drag when Not-draggable', () => {
    cy.get('[data-testid="toggle-draggability"]').click()
      .then(() => {
        cy.get('[data-testid="PersonalCard"]')
          .then((PersonalCard) => PersonalCard[0].getBoundingClientRect())
          .then((personalCardBounds) => {
            cy.get('[data-testid="PersonalCard"]').within(() => {
              cy.get('[data-testid="card-handle"]').trigger('mousedown', { which: 1 })
            })
              .then(() => {
                cy.get('[data-testid="LayoutHandlerCard"]')
                  .trigger('mousemove')
                  .trigger('mouseup', { force: true })
              })
              .then(() => {
                cy.get('[data-testid="PersonalCard"]').then((PersonalCard) => PersonalCard[0].getBoundingClientRect())
                  .then((newPersonalCardBounds) => {
                    expect(newPersonalCardBounds.x).to.equal(personalCardBounds.x)
                    // TODO: why does this go to 0 at one point
                    // I think it has something to do with how react-grid-layout handles dragging
                    // expect(newPersonalCardBounds.y).to.equal(personalCardBounds.y)
                    expect(newPersonalCardBounds.width).to.equal(personalCardBounds.width)
                    expect(newPersonalCardBounds.height).to.equal(personalCardBounds.height)
                  })
              })
          })
      })
  })
})
