import { test, expect } from "@playwright/test";

var email = "guoda.baltutyte@sft.com";
var password = "student330";
// Task - 1: Login as user

test("Login as user", async ({ page }) => {
  await page.goto("https://lunch.devbstaging.com/login-password");

  await page.getByLabel("email").fill(email);
  await page.getByLabel("password").fill(password);
  await page.locator(".v-btn__content").click();
});

//
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

test("Remove food", async ({ page }) => {
  await page.goto("https://lunch.devbstaging.com/login-password");

  //login
  await page.getByLabel("email").fill(email);
  await page.getByLabel("password").fill(password);
  await page.locator(".v-btn__content").click();
  //await page.goto("https://lunch.devbstaging.com/dishes");

  //add
  await page.locator(".dish-card").first().click();
  //click to save selections
  await page.locator(".orders-list-button").click();
  //click to remove
  await page.locator(".v-icon--link").first().click();
  //click to save selections
  await page.locator(".orders-list-button").click();

  await page.locator(".v-chip__content").hover({timeout: 5000});
  // Wait for the notification to appear
  await page.waitForSelector(".v-snack", { timeout: 5000 });

  var count = await page.locator(".v-chip").count();
  await expect(count).toBe(0);
});
