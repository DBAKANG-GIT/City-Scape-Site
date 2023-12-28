// Import the Hero component
import { BrowserRouter } from 'react-router-dom';
import Hero from './hero';

// Test suite for the Hero component
describe('Hero component', () => {
  // Test case for rendering the Hero component
  it('should render the Hero component', () => {
    // Render the Hero component with the mock data
    cy.viewport('iphone-6');
    cy.mount(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    cy.contains('Welcome To CityScape').should('be.visible');

    cy.contains('Read More').should('be.visible');
  });

  // Test case for rendering the Hero component on tablet screen size
  it('should render the Hero component on tablet screen size', () => {
    // Render the Hero component with the mock data
    cy.viewport('ipad-2');
    cy.mount(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    cy.contains('Welcome To CityScape').should('be.visible');

    cy.contains('Read More').should('be.visible');
  });

  // Test case for rendering the Hero component on desktop screen size
  it('should render the Hero component on desktop screen size', () => {
    // Render the Hero component with the mock data
    cy.viewport(1920, 1080);
    cy.mount(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    cy.contains('Welcome To CityScape').should('be.visible');

    cy.contains('Read More').should('be.visible');
  });
});
