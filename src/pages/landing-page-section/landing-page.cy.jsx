import { BrowserRouter } from 'react-router-dom';
import LandingPage from './landing-page';
import { mount } from 'cypress/react18';

describe('LandingPage', () => {
  it('renders', () => {
    mount(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );

    // Assert that the landing page content is visible
    cy.contains('CityScape').should('be.visible');

    // Test different viewports and screen sizes
    cy.viewport('iphone-6');
    cy.contains('CityScape').should('be.visible');

    cy.viewport('ipad-2');
    cy.contains('CityScape').should('be.visible');

    cy.viewport(1280, 720);
    cy.contains('CityScape').should('be.visible');
  });
});
