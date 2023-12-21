import { mount } from 'cypress/react18';
import ContactSection from './contact-page';

describe('ContactSection', () => {
  const viewports = ['macbook-15', 'samsung-note9', 'ipad-mini', 'iphone-xr'];

  viewports.forEach((viewport) => {
    context(`Testing on ${viewport}`, () => {
      beforeEach(() => {
        cy.viewport(viewport);
        mount(<ContactSection />);
      });

      it('renders without crashing', () => {
        cy.get('#contact-a').should('exist');
      });

      it('renders the ContactForm component', () => {
        cy.get('#row').within(() => {
          cy.get('form').should('exist');
        });
      });

      it('renders the ContactItem components correctly', () => {
        // Define the expected contact items
        const expectedContactItems = [
          {
            href: 'mailto:test@gmail.com',
            title: 'Email',
            content: 'test@gmail',
          },
          {
            href: 'https://maps.app.goo.gl/Du6stTteNNENZQ6c6',
            title: 'Address',
            content: `London (City) Office 63/66 Hatton Garden
        Fifth Floor, Suite 23 London EC1N 8LE`,
          },
        ];

        // Check if the first ContactItem is rendered correctly
        cy.get(`#contact-items > :nth-child(1)`).within(() => {
          cy.get('a').should('have.attr', 'href', expectedContactItems[0].href);
          cy.contains(expectedContactItems[0].title).should('exist');
          cy.contains(expectedContactItems[0].content).should('exist');
        });

        // Check if the second ContactItem is rendered correctly
        cy.get(':nth-child(2) > a > p ').should('exist');
      });
    });
  });
});
