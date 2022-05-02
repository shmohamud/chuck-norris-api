describe("App E2E", () => {
  it("should have a h1 header", () => {
    cy.visit("/");

    cy.get("h1").should("have.text", "Chuck Norris");
  });
  it("should have a h2 header", () => {
    cy.visit("/");

    cy.get("h2").should("have.text", "Random Facts");
  });
  it("should have a disabled button", () => {
    cy.visit("/");
    cy.get("button").should("be.disabled");
  });
  it("should be enabled with 3 chars", () => {
    cy.visit("/");
    cy.get("#search-input").type("Chu");
    cy.get("button").should("not.be.disabled");
  });
  //TODO: Add test for when Search button is clicked and Fact updates. Consider fixture.
});
