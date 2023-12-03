// hero.test.js

// Import the Hero component
import Hero from './hero';

// Test suite for the Hero component
describe('Hero component', () => {
  // Test case for rendering the Hero component
  it('should render the Hero component', () => {
    // Render the Hero component with the mock data
    cy.mount(<Hero />);

    // Assert that the text "The Sky is The Limit" is displayed on the hero
    cy.contains('The Sky is The Limit').should('be.visible');

    // Assert that the text "We provide world class financial assistance" is displayed on the hero
    cy.contains('We provide world class financial assistance').should(
      'be.visible'
    );
  });
});
