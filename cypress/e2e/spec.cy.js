import { randomChar } from "../support/helper";

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("open page", () => {
    cy.contains("Books list").should("be.visible");
  });

  it("passes", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  });

  it("Should not login with empty login", () => {
    cy.login(" ", "123");
    // cy.get("#mail")
    //   .then(($el) => $el[0].checkValidity())
    //   .should("be.false");
    // cy.get("#mail")
    //   .then(($el) => $el[0].validationMessage)
    //   .should("contain", "Заполните это поле");
    cy.get("#mail").then((element) => {
      expect(element[0].checkValidity()).to.be.false;
      expect(element[0].validationMessage).to.be.eql("Заполните это поле.");
    });
  });

  it("Should not login with empty password", () => {
    cy.login("bropet@mail.ru", "1");
    cy.get("#pass")
      .then(($el) => $el[0].checkValidity())
      .should("be.true");
    cy.contains("Неправильая почта или пароль").should("be.visible");
  });

  it("Open favorites", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains("Favorites").click();
    cy.url().should("contain", "://localhost:3000/favorites");
  });

  it("Add book favorites", () => {
    cy.login("bropet@mail.ru", "123");
    const bookName = randomChar(15);
    const author = randomChar(8);
    cy.addFavoriteBook(bookName, "Тест", author);
    cy.contains("Favorites").click();
    cy.contains(bookName).should("be.visible");
    cy.contains(author).should("be.visible");
  });

  it("Delete book favorites", () => {
    cy.login("bropet@mail.ru", "123");
    const bookName = randomChar(10);
    const author = randomChar(10);
    cy.addFavoriteBook(bookName, "Тест", author);
    cy.contains("Favorites").click();
    cy.contains(bookName).should("be.visible");
    let index = -1;
    cy.get(".card-title").each(($el, i) => {
      if ($el.text() === bookName) {
        index = i;
        return false;
      }
    });
    cy.get(".btn").eq(index).click();
    cy.wait(2000);
    cy.contains(bookName).should("not.exist");
  });
});
