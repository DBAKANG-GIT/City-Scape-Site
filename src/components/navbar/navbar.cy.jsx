// import { mount } from '@cypress/react';
import NavBar from '../Navbar/navbar';
import { mount } from 'cypress/react18';

describe('NavBar', () => {
  const navItems = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about-page' },
    { name: 'Services', url: '/services-page' },
    { name: 'Work', url: '/work-page' },
    { name: 'Contact', url: '/contact-page' },
  ];

  beforeEach(() => {
    mount(<NavBar navItems={navItems} />);
  });

  it('renders the logo', () => {
    cy.get('#logo').should('exist');
  });

  it('renders the navigation items on mobile', () => {
    cy.viewport('iphone-6');
    navItems.forEach((navItem) => {
      cy.get('nav ul li a').contains(navItem.name).should('exist');
    });
  });

  it('renders the navigation items on tablet', () => {
    cy.viewport('ipad-2');
    navItems.forEach((navItem) => {
      cy.get('nav ul li a').contains(navItem.name).should('exist');
    });
  });

  it('renders the navigation items on desktop', () => {
    cy.viewport(1280, 720);
    navItems.forEach((navItem) => {
      cy.get('nav ul li a').contains(navItem.name).should('exist');
    });
  });
});
