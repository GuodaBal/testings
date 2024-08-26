import { test, expect } from "@playwright/test";

var email = "guoda.baltutyte@sft.com";
var password = "student330";
// Task - 1: Login as user

test("Create new computer", async ({ page }) => {
  await page.goto("https://lunch.devbstaging.com/login-password");

  await page.getByLabel("email").fill(email);
  await page.getByLabel("password").fill(password);
  expect(1).toBe(1);
});