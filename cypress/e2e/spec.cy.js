/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Just visit e2e test', () => {
  it('should visit', () => {
    cy.visit('/');
  });
});
describe('Contact page e2e test', () => {
  it('should visit the contact page and fill in the form', () => {
    cy.visit('/contact');
    cy.get('#name').type(faker.person.fullName());
    cy.get('#email').type(faker.internet.email());
    cy.get('#subject').type(faker.lorem.sentence());
    cy.get('#phone').type(faker.phone.number());
    cy.get('#message').type(faker.lorem.paragraph());

    // Intercept the form submission
    //TODO: assert that contact page shows up
  });
});
