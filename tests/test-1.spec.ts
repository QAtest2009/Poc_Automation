import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.qa.quotatis.fr/
  await page.goto('https://www.qa.quotatis.fr/');

  // Click text=Voir notre Annuaire Artisans
  await page.locator('text=Voir notre Annuaire Artisans').click();
  await expect(page).toHaveURL('https://www.qa.quotatis.fr/annuaire-artisan');

  // Click div[role="button"]:has-text("Continuer sans accepter")
  await page.locator('div[role="button"]:has-text("Continuer sans accepter")').click();

  // Click [id="project-\/annuaire-artisan\/menuisier-extérieur-link"] div:has-text("Menuisier extérieur") >> nth=0
  await page.locator('[id="project-\\/annuaire-artisan\\/menuisier-extérieur-link"] div:has-text("Menuisier extérieur")').first().click();
  await expect(page).toHaveURL('https://www.qa.quotatis.fr/annuaire-artisan/menuisier-ext%C3%A9rieur');

  // Click [placeholder="Ville\, code postal\, adresse\, \.\.\."]
  await page.locator('[placeholder="Ville\\, code postal\\, adresse\\, \\.\\.\\."]').click();

  // Fill [placeholder="Ville\, code postal\, adresse\, \.\.\."]
  await page.locator('[placeholder="Ville\\, code postal\\, adresse\\, \\.\\.\\."]').fill('75000');

  // Click text=75000Paris
  await page.locator('text=75000Paris').click();

  // Click text=Rechercher
  await page.locator('text=Rechercher').click();
  await page.locator('text=Rechercher').click();

  // await expect(page).toHaveURL('https://www.qa.quotatis.fr/annuaire-artisan/menuisier-ext%C3%A9rieur/idf/d%C3%A9partement-de-paris/paris/75000');

  // Click .image >> nth=0
  await page.locator('.image').first().click();
  // await expect(page).toHaveURL('https://www.qa.quotatis.fr/artisan/perret-thomas-et-fils-s-a-s-1fBpWbUzWvKBegzylQzks0');

  // Click text=Contacter
  await page.locator('text=Contacter').click();
  // await expect(page).toHaveURL('https://www.qa.quotatis.fr/contact-pro/perret-thomas-et-fils-s-a-s-1fBpWbUzWvKBegzylQzks0');

  // Click [placeholder="Prénom"]
  await page.locator('[placeholder="Prénom"]').click();

  // Fill [placeholder="Prénom"]
  await page.locator('[placeholder="Prénom"]').fill('Ay');

  // Click [placeholder="Nom"]
  await page.locator('[placeholder="Nom"]').click();

  // Click [placeholder="Prénom"]
  await page.locator('[placeholder="Prénom"]').click();

  // Fill [placeholder="Prénom"]
  await page.locator('[placeholder="Prénom"]').fill('Alain');

  // Click [placeholder="Nom"]
  await page.locator('[placeholder="Nom"]').click();

  // Press CapsLock
  await page.locator('[placeholder="Nom"]').press('CapsLock');

  // Fill [placeholder="Nom"]
  await page.locator('[placeholder="Nom"]').fill('BERNARD');

  // Press CapsLock
  await page.locator('[placeholder="Nom"]').press('CapsLock');

  // Click [placeholder="Téléphone"]
  await page.locator('[placeholder="Téléphone"]').click();

  // Fill [placeholder="Téléphone"]
  await page.locator('[placeholder="Téléphone"]').fill('0612345678');

  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('aabali@quotatis.com');

  // Click [placeholder="Ville du projet"]
  await page.locator('[placeholder="Ville du projet"]').click();

  // Fill [placeholder="Ville du projet"]
  await page.locator('[placeholder="Ville du projet"]').fill('Paris');

  // Click [placeholder="Code postal"]
  await page.locator('[placeholder="Code postal"]').click();

  // Fill [placeholder="Code postal"]
  await page.locator('[placeholder="Code postal"]').fill('75000');

  // Click textarea[name="content"]
  await page.locator('textarea[name="content"]').click();

  // Fill textarea[name="content"]
  await page.locator('textarea[name="content"]').fill('hkjshjhqkjhjlkqjknqkjnkdnkqncknqnc,;nq;,nc;jnq;ncj;nq,ncnq;nq');

  // Press Enter
  await page.locator('textarea[name="content"]').press('Enter');

  // Fill text=hkjshjhqkjhjlkqjknqkjnkdnkqncknqnc,;nq;,nc;jnq;ncj;nq,ncnq;nq
  await page.locator('text=hkjshjhqkjhjlkqjknqkjnkdnkqncknqnc,;nq;,nc;jnq;ncj;nq,ncnq;nq').fill('hkjshjhqkjhjlkqjknqkjnkdnkqncknqnc,;nq;,nc;jnq;ncj;nq,ncnq;nq\nnbqjnc,,q;,<s,,q:;,c,;bnb,nb,;n<;:,!:,:,qjbc;jbq:,!;:,:!;,!;,!c, ');

  // Press Enter
  await page.locator('text=hkjshjhqkjhjlkqjknqkjnkdnkqncknqnc,;nq;,nc;jnq;ncj;nq,ncnq;nq').press('Enter');

  // Fill text=hkjshjhqkjhjlkqjknqkjnkdnkqncknqnc,;nq;,nc;jnq;ncj;nq,ncnq;nq nbqjnc,,q;,<s,,q:;
  await page.locator('text=hkjshjhqkjhjlkqjknqkjnkdnkqncknqnc,;nq;,nc;jnq;ncj;nq,ncnq;nq nbqjnc,,q;,<s,,q:;').fill('hkjshjhqkjhjlkqjknqkjnkdnkqncknqnc,;nq;,nc;jnq;ncj;nq,ncnq;nq\nnbqjnc,,q;,<s,,q:;,c,;bnb,nb,;n<;:,!:,:,qjbc;jbq:,!;:,:!;,!;,!c, \n,b;,qn;:, !:;c!:;!:;!:;c!:q;;c:knq:;,;c!:;!q:;!;:c!:qd;!,c:;,dd');

  // Click button:has-text("Envoyer")
  await page.locator('button:has-text("Envoyer")').click();
  
  // await expect(page.locator('id="postalCodeError" >> span').innerText()).toEqual("Code postal invalide");

});

