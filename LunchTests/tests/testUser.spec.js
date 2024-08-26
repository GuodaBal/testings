import { test, expect } from "@playwright/test";

//login details
var email = "guoda.baltutyte@sft.com";
var password = "student330";



//tests regular logging in
test("Login as user", async ({ page }) => {
  await page.goto("https://lunch.devbstaging.com/login-password");

  await page.getByLabel("email").fill(email);
  await page.getByLabel("password").fill(password);
  await page.locator(".v-btn__content").click();
});

//tests adding food
test("Add food", async ({ page }) => {
  await page.goto("https://lunch.devbstaging.com/login-password");

  //login
  await page.getByLabel("email").fill(email);
  await page.getByLabel("password").fill(password);
  await page.locator(".v-btn__content").click();
  //await page.goto("https://lunch.devbstaging.com/dishes");

  //add
  await page.locator(".dish-card").first().click();
  //check that it shows its added
  var count = await page.locator(".v-chip").count();
  await expect(count).toBe(1);
  //click to save selections
  await page.locator(".orders-list-button").click();
  // Wait for the notification to appear
  await page.waitForSelector(".v-snack", { timeout: 5000 });

  // Check that one arrived
  var count = await page.locator(".v-snack").count();
  await expect(count).toBe(1);

});

//tests removing food
test("Remove food", async ({ page }) => {
  await page.goto("https://lunch.devbstaging.com/login-password");

  //login
  await page.getByLabel("email").fill(email);
  await page.getByLabel("password").fill(password);
  await page.locator(".v-btn__content").click();
  //await page.goto("https://lunch.devbstaging.com/dishes");

    //add
      await page.waitForTimeout(2000); 
    await page.locator(".dish-card").first().click();
  await page.locator(".orders-list-button").click();
  await page.waitForTimeout(2000); 
  //click to remove
  await page.locator(".v-icon--link").first().click();
  //click to save selections
  await page.locator(".orders-list-button").click();

  //hover
  await page.locator(".v-chip__content").hover();
  const tooltip = await page.waitForSelector('.v-tooltip__content');
  // Get the text content of the tooltip
  const tooltipText = await tooltip.textContent();
  await expect(tooltipText).toBe('No Selections');

});
