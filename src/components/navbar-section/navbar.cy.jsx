// import { mount } from '@cypress/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './navbar';
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
    mount(
      <BrowserRouter>
        <NavBar navItems={navItems} />
      </BrowserRouter>
    );
  });

  it('renders the logo', () => {
    cy.get('#logo').should('be.visible');
  });

  it('renders the navigation items on mobile', () => {
    cy.viewport('iphone-6');
    navItems.forEach((navItem) => {
      if (navItem.name === 'Home') {
        cy.get('nav ul a').contains(navItem.name).should('not.be.visible');
      } else cy.get('nav ul a').contains(navItem.name).should('be.visible');
    });
  });

  it('renders the navigation items on tablet', () => {
    cy.viewport('ipad-2');
    navItems.forEach((navItem) => {
      cy.get('nav ul a').contains(navItem.name).should('be.visible');
    });
  });

  it('renders the navigation items on desktop', () => {
    cy.viewport(1280, 720);
    navItems.forEach((navItem) => {
      cy.get('nav ul a').contains(navItem.name).should('be.visible');
    });
  });
});
