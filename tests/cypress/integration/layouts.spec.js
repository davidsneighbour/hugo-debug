describe("Checking Homepage", () => {
  it("shows the section layout on layout page", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "GoHugo Debug");
    cy.clearCookies();
  });
});
