import { test, expect } from "@playwright/test";

// Task - 1: Login as user

test("Create new computer", async ({ page }) => {
  await page.goto("https://lunch.devbstaging.com/login-password");

  await page.locator("#password").fill("ABC");
});
/*
//Task - 2: Update existing test to verify computer creation workflow with POM
test("Create new computer with page object model", async ({ page }) => {
  let computersListPage = new ComputersListPage(page);
  let addNewComputer = new NewComputerPage(page);

  await computersListPage.goto();
  await computersListPage.openNewComputerCreationPage();
  await addNewComputer.fillName("my pc");
  await addNewComputer.fillIntroduceDate("2020-02-08");
  await addNewComputer.fillDiscontinuedDate("2024-08-01");
  await addNewComputer.selectCompany("OQO");
  await addNewComputer.createComputer();

  await computersListPage.hasComputerBeenCreated("my pc");

});

test("Search doesn't match any records", async ({ page }) => {
  let computersListPage = new ComputersListPage(page);
  await computersListPage.goto();
  await computersListPage.search("Nonexistant");
  await computersListPage.verifyNoData();

});

test("Search has 6 records", async ({ page }) => {
  let computersListPage = new ComputersListPage(page);
  await computersListPage.goto();
  await computersListPage.search("ASCI");
  await computersListPage.verifyDataAmount(6);

});*/
