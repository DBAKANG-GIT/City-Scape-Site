import { mount } from 'cypress/react18';
import TeamMembers from '../team-members-section/team-member';

describe('TeamMembers', () => {
  it('renders correctly', () => {
    mount(<TeamMembers />);

    cy.get('h4').contains('Kamal');
    cy.get('p').contains('Fitness Director (17 years experience)');

    cy.get('h4').contains('Georgia');
    cy.get('p').contains('Head of Relations (8 years experience)');

    cy.get('h4').contains('Divine');
    cy.get('p').contains('Sales Manager (5 years experience)');
  });
});
