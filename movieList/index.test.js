const { Builder, Capabilities, By } = require("selenium-webdriver");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get("http://127.0.0.1:5500/movieList/index.html");
});

afterAll(async () => {
  await driver.quit();
});

test("add a movie", async () => {
  const inputField = await driver.findElement(By.xpath("//input"));
  await inputField.sendKeys("Tron: Legacy");
  await driver.sleep(2000);

  const theButton = await driver.findElement(By.css("button"));
  await theButton.click();
  await driver.sleep(2000);
});

test("cross out a movie", async () => {
  const movieCrossout = await driver.findElement(By.css("span"));
  await movieCrossout.click();
  await driver.sleep(2000);
});

test("movie cross in", async () => {
  const movieCrossout = await driver.findElement(By.css("span"));
  await movieCrossout.click();
  await driver.sleep(2000);
});

test("delete a movie", async () => {
  const deleteButton = await driver.findElement(By.id("Tron:Legacy"));
  await deleteButton.click();
  await driver.sleep(2000);
});
