import { test, expect } from "@playwright/test";

//admin
var email = "admin5@sft.com";
var password = "admin034";

var providerName = "providerName";
var price = "5";
var count = "10";
var selectionName = "niamnniam";
var translation = "NIAM";

var price2 = "3";
var count2 = "2";
var selectionName2 = "neniam";
var translation2 = "neskanu:((";


//tests regular logging in
test("Login as admin", async ({ page }) => {
    await page.goto("https://lunch.devbstaging.com/login-password");
  
    await page.getByLabel("email").fill(email);
    await page.getByLabel("password").fill(password);
    await page.locator(".v-btn__content").click();
});

test("Add provider", async ({ page }) => {
    await page.goto("https://lunch.devbstaging.com/login-password");
  
    //login
    await page.getByLabel("email").fill(email);
    await page.getByLabel("password").fill(password);
    await page.locator(".v-btn__content").click();

    await page.waitForTimeout(2000);
    //head to needed page
    await page.goto("https://lunch.devbstaging.com/edit/2024-08-26");
    //await page.waitForTimeout(5000);
    //await page.getByRole('button').filter({ hasText: 'buildclose' }).click({delay:500});
    await page.evaluate(() => {
    var button = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('buildclose'));
    if (button) {
        button.click();
    }
});

    await page.waitForTimeout(5000);
    await page.evaluate(() => {
        var button = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('add'));
        if (button) {
            button.click();
        }
    });
    
    //fill in details
    await page.getByRole('combobox', { name: 'Provider Name' }).fill(providerName);
    await page.getByRole('combobox', { name: 'Color' }).click();
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
        const link = Array.from(document.querySelectorAll('a')).find(a => a.textContent.includes('Red'));
        if (link) {
          link.click();
        }
      });
      await page.waitForTimeout(5000);

      await page.waitForSelector('role=spinbutton[name="Price"]');
      await page.getByRole('spinbutton', { name: 'Price' }).fill(price);
      
      await page.waitForSelector('role=spinbutton[name="Count"]');
      await page.getByRole('spinbutton', { name: 'Count' }).fill(count);
      
      await page.waitForSelector('role=textbox[name="Selection Name"]');
      await page.getByRole('textbox', { name: 'Selection Name' }).fill(selectionName);
      
      await page.waitForSelector('role=textbox[name="Translation"]');
      await page.getByRole('textbox', { name: 'Translation' }).fill(translation);

      //main dish

      await page.getByText('Pagrindiniai Patiekalai (Main Dishes)restaurant').click();
      //await page.waitForTimeout(5000);

      await page.waitForSelector('role=spinbutton[name="Price"]');
      await page.getByRole('spinbutton', { name: 'Price' }).nth(1).fill(price2);
      
      await page.waitForSelector('role=spinbutton[name="Count"]');
      await page.getByRole('spinbutton', { name: 'Count' }).fill(count2);
      
      await page.waitForSelector('role=textbox[name="Selection Name"]');
      await page.getByRole('textbox', { name: 'Selection Name' }).fill(selectionName2);
      
      await page.waitForSelector('role=textbox[name="Translation"]');
      await page.getByRole('textbox', { name: 'Translation' }).fill(translation2);

      //save
      await page.getByRole('button', { name: 'Save' }).click();
      await page.waitForTimeout(5000);

      //await expect(page.content()).toContain(providerName);
      
    
    
});

  