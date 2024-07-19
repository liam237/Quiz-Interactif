const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../src/index.html"),
  "utf8"
);

describe("quiz interactif", () => {
  it("contient le bouton Jouer", () => {
    document.body.innerHTML = html.toString();
    const startButton = document.getElementById("start-button");
    expect(startButton).not.toBeNull();
    expect(startButton.textContent).toBe("Jouer");
  });
});
