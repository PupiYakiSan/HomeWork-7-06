Cypress.Commands.add("login", (email, password) => {
  cy.contains("Log in").click();
  if (email) {
    cy.get("#mail").type(email);
  }
  if (password) {
    cy.get("#pass").type(password);
  }
  cy.contains("Submit").click();
});

Cypress.Commands.add("addFavoriteBook", (nameBook, description, authors) => {
  cy.contains("Add new").click();
  cy.get("#title").type(nameBook);
  cy.get("#description").type(description);
  cy.get("#authors").type(authors);
  cy.get("#favorite").click().click();
  cy.get("form > .ml-2").click();
});

// Cypress.Commands.add("randomChar", (count) => {
//   const chars = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
//   let str = "";
//   for (let i = 0; i < count; i++) {
//     str += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return cy.wrap(str);
// });

// function randomChar(count) {
//   const chars = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
//   let str = "";
//   for (let i = 0; i < count; i++) {
//     str += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return str;
// }
