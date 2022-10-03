import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.qa.quotatis.fr/
  await page.goto('https://www.qa.quotatis.fr/');

  // Click #become-pro-link1
  await page.locator('#become-pro-link1').click();
  await expect(page).toHaveURL('https://www.qa.quotatis.fr/pro');

  // Click div[role="button"]:has-text("Continuer sans accepter")
  await page.locator('div[role="button"]:has-text("Continuer sans accepter")').click();

  // Click text=Gagnez plus en devenant Artisan PoseurRecevez gratuitement et sans engagement de >> button
  await page.locator('text=Gagnez plus en devenant Artisan PoseurRecevez gratuitement et sans engagement de >> button').click();
  await expect(page).toHaveURL('https://www.qa.quotatis.fr/pro/inscription-artisan-poseur');

  // Click [placeholder="Votre siret ou le nom de votre entreprise"]
  await page.locator('[placeholder="Votre siret ou le nom de votre entreprise"]').click();

  // Fill [placeholder="Votre siret ou le nom de votre entreprise"]
  await page.locator('[placeholder="Votre siret ou le nom de votre entreprise"]').fill('123456789');

  // Click [placeholder="Nom de l\'entreprise"]
  await page.locator('[placeholder="Nom de l\\\'entreprise"]').click();

  // Fill [placeholder="Nom de l\'entreprise"]
  await page.locator('[placeholder="Nom de l\\\'entreprise"]').fill('Enterprise');

  // Click [placeholder="Siret"]
  await page.locator('[placeholder="Siret"]').click();

  // Click [placeholder="Siret"]
  await page.locator('[placeholder="Siret"]').click();

  // Fill [placeholder="Siret"]
  await page.locator('[placeholder="Siret"]').fill('123456789');

  // Click [placeholder="Code postal Ville"]
  await page.locator('[placeholder="Code postal Ville"]').click();

  // Fill [placeholder="Code postal Ville"]
  await page.locator('[placeholder="Code postal Ville"]').fill('75000');

  // Click div:has-text("75000Paris") >> nth=0
  await page.locator('div:has-text("75000Paris")').first().click();

  // Click text=Choisissez votre métier
  await page.locator('text=Choisissez votre métier').click();

  // Click text=Électricien
  await page.locator('text=Électricien').click();

  // Click button:has-text("Suivant")
  await page.locator('button:has-text("Suivant")').click();

  // Click #registration-start
  await page.locator('#registration-start').click();

});