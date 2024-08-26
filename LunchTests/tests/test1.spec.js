import { test, expect } from "@playwright/test";

// Task - 1: Login as user

test("Create new computer", async ({ page }) => {
  await page.goto("https://lunch.devbstaging.com/login-password");

  await page.locator("#password").fill("ABC");
  expect(1).toBe(1);
});