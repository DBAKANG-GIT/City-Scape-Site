// import { mount } from '@cypress/react';
import NavBar from './navbar';
import { mount } from 'cypress/react18';

describe('NavBar', () => {
  const navItems = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    // Add more navigation items here
  ];

  beforeEach(() => {
    mount(<NavBar navItems={navItems} />);
  });

  it('renders the logo', () => {
    cy.get('#logo').should('exist');
  });

  it('renders the navigation items', () => {
    navItems.forEach((navItem) => {
      cy.get('nav ul li a').contains(navItem.name).should('exist');
    });
  });
});
